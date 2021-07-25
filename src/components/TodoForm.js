import { importAttribute } from '@babel/types';
import React, {useState} from 'react';

function TodoForm({addTodo}) {
  // input要素に入力した値の状態とvalueを更新する関数
  const [value, setValue] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    // タスクの追加が完了したら入力した値を空にする
    addTodo(value).then(() => {
      setValue('');
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        // valueが入力欄に描画される
        value = {value}
        // 入力欄の値を変更したらvalueを更新する
        onChange = {event => setValue(event.target.value)}
      />
      <button type="submit">追加</button>
    </form>
  );
}

export default TodoForm;
