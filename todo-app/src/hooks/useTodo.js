import {useState, useEffect} from "react";
import {uuid} from 'uuidv4';

import todoService from '../services/todos';

//Todoのstateと更新ロジックを持つフック
export default function useTodo() {
  //Todoのstateとtodosを更新する関数
  const [todos, setTodos] = useState([]);

  //このカスタムフックを利用しているコンポーネントがマウントされたらTodoを取得する。
  useEffect(() => {
    todoService.getAll().then(todos => {
      //最後に追加したものから先頭に表示させたいため、取得したTodoの配列を反転させる。
      setTodos(todos.reverse());
    });
  },[]);

  //IDが一致したTodoの状態(作業中/完了)を更新する
  const toggleTodo = (id, completed) => {
    const todo = todos.find(todo => todo.id === id);
    const newTodo = {...todo, completed:!completed};

    //更新が成功したらstateを更新する
    todoService.update(id, newTodo).then(updatedTodo => {
      const newTodos = todos.map(todo =>
        todo.id !== updatedTodo.id ? todo : updatedTodo
      );
      setTodos(newTodos);
    });
  };

  //IDが一致したTodoを削除する
  const deleteTodo = id => {
    // 削除が成功したらstateを更新する
    todoService.delete(id).then(deletedTodoId => {
      const newTodos = todos.filter(todo => todo.id !== deletedTodoId);
      setTodos(newTodos);
    })
  }

  // タスクを追加する
  const addTodo = todo => {
    const newTodo = {
      title: todo,
      completed: false,
      id: uuid()
    };

    // todoService.addの実行結果をreturnすることで、
    // 以下のようにタスクの追加完了後に、任意の処理を実行させることができる。
    // addTodo('').then(() => {
    // console.log('added todo');  
    //})
    return todoService.add(newTodo).then(addedTodo => {
      // 新しいタスクを上に表示したいため、追加するタスクを配列の先頭に追加する。
      setTodos([addedTodo].concat(todos));
    });
  };

  return {todos, toggleTodo, deleteTodo, addTodo};
}