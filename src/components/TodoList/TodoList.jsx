import React from 'react';
import { useState } from 'react';

export default function TodoList() {
    const [todos, setTodos] = useState([
      {id: '123', text: '장보기', status: 'active'},
      {id: '124', text: '공부보기', status: 'active'},
    ]); // 해야할 목록 리스트
  return (
    <section>
      <ul>
          {
            todos.map(item => <li key={item.id}>{item.text}</li>)
          }
      </ul>
    </section>
  );
}

