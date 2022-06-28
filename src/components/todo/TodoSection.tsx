import { nanoid } from 'nanoid';
import React, { useState } from 'react';
import { TodoItemType } from '../../types';
import NewTodo from './NewTodo';
import TodoCard from './TodoCard';

type TProps = {
  title: string;
  items?: Array<TodoItemType>;
  hasCreate?: boolean;
};
function TodoSection(props: TProps) {
  const [todos, updateTodos] = useState<Array<TodoItemType>>(props.items ?? []);
  const [openCreateTodo, setOpenCreateTodo] = useState<Boolean>(false);

  const handleOpenCreateTodo = () => {
    setOpenCreateTodo(true);
  };

  const handleCloseCreateTodo = () => {
    setOpenCreateTodo(false);
  };

  const handleCreateTodo = (data: TodoItemType) => {
    data.id = nanoid();
    updateTodos(prevState => [...prevState, data]);
    handleCloseCreateTodo();
  };

  return (
    <>
      <div className="flex flex-col">
        <div className="font-bold text-blue-500 self-center">{props.title}</div>
        <div className="mt-2 mb-4 border-b-2"></div>
        {todos?.map((item: TodoItemType) => {
          return <TodoCard {...item} key={item.id} />;
        })}
        {props.hasCreate ? (
          <button
            onClick={handleOpenCreateTodo}
            className="font-bold text-2xl border-2 rounded-2xl w-20 p-0 mt-2 bg-blue-600 self-center content-center"
          >
            +
          </button>
        ) : (
          ''
        )}
      </div>
      {openCreateTodo && (
        <NewTodo onClose={handleCloseCreateTodo} onCreate={handleCreateTodo} />
      )}
    </>
  );
}

export default TodoSection;
