import React, {useState, useMemo} from 'react';

import TodoList from './components/TodoList';
import useTodo from './hooks/useTodo';
import TodoForm from './components/TodoForm';
import TodoFilter from './components/TodoFilter';

function App() {
  //Todoのstateを取得
  const {todos, toggleTodo, deleteTodo, addTodo} = useTodo();
  //選択中の絞り込みのstateとfilterを更新する関数
  const [filter, setFilter] = useState('all');
  //絞り込みのラジオボタンのイベントハンドラ
  const handleFilter = event => {
    setFilter(event.target.value);
  };

  // 絞り込みを適用したTodo
  const filteredTodos = useMemo(() => {
    switch(filter) {
      case 'active':
        return todos.filter(todo => !todo.completed);
      case 'completed':
        return todos.filter(todo => todo.completed);
      case 'all':
      default:
        return todos;
    }
  }, [todos, filter]);

  return (
    <div>
      <h1>Todo List</h1>
      <TodoFilter selectedFilter={filter} handleFilter={handleFilter}/>
      <TodoForm addTodo={addTodo}/>
      <TodoList
        todos={filteredTodos}
        toggleTodo={toggleTodo}
        deleteTodo={deleteTodo} />
    </div>
  );
}

export default App;
