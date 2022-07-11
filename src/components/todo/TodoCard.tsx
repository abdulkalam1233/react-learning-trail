import React from 'react';
import { TodoItemType } from '../../types';

function TodoCard(props: TodoItemType) {
  const onDragStart = (ev: any) => {
    console.log('dragstart:', props.id);
    ev.dataTransfer.setData('id', props.id);
  };

  return (
    <div
      className="border-2 p-2 md:w-[20rem] bg-red-400 rounded-xl text-black mb-2"
      draggable
      onDragStart={onDragStart}
    >
      <h1 className="font-bold capitalize mb-2">{props.title}</h1>
      <p className="text-sm">{props.description}</p>
      <div className="flex justify-end">
        <button className="self-end text-white">View</button>
      </div>
    </div>
  );
}

export default TodoCard;
