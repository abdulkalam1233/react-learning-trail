import React from 'react';
import { TodoItemType } from '../../types';

function TodoCard(props: TodoItemType) {
  return (
    <div className="border-2 p-2 md:w-[20rem] bg-red-400 rounded-xl text-black mb-2">
      <h1 className="font-bold capitalize mb-2">{props.title}</h1>
      <p className="text-sm">{props.description}</p>
    </div>
  );
}

export default TodoCard;
