import React, {useState, useMemo} from 'react';

import useTodo from './hooks/useTodo';
import TodoForm from './components/TodoForm';
import { DataGrid } from '@material-ui/data-grid';
import TextField from '@material-ui/core/TextField';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

const columns = [
  {
    field: 'task',
    headerName: 'Task',
    width: 150,
    editable: true,
  },
];

const rows = [
  { id: 1, task: "aaa"},
  { id: 2, task: "bbb"},
  { id: 3, task: "ccc"},
  { id: 4, task: "ddd"},
];

export default function Todo() {

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
      <div style={{padding:"5px"}}>
        {/*<TodoForm addTodo={addTodo}/>*/}
        <TextField id="standard-basic" label="Standard" style={{width:"70vh"}}/>
        <Fab color="primary" aria-label="add" style={{left:"5px"}}>
          <AddIcon />
        </Fab>
      </div>
      <div style={{ height: 400, width: '100%' }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
          checkboxSelection
          disableSelectionOnClick
        />
      </div>
      {/*<TodoList
        todos={filteredTodos}
        toggleTodo={toggleTodo}
        deleteTodo={deleteTodo}
      />*/}
    </div>
  );
}
