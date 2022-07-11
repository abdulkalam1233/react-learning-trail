import React, { useState } from 'react';
import { TodoItemType } from '../../types';
import TodoSection from './TodoSection';

function TodoBoard() {
  const [items, setItems] = useState<Array<TodoItemType>>([]);

  const handleDragOver = (e: any) => {
    e.preventDefault();
  };

  const handleDrop = (e: any, category: string) => {
    setItems(prevItems => {
      return prevItems.map(item => {
        if (item.id === e.dataTransfer.getData('id')) {
          item.category = category;
        }
        return item;
      });
    });
  };

  const handleCreateTodo = (data: TodoItemType) => {
    setItems(prevState => [...prevState, data]);
  };

  return (
    <div>
      <hr className="mt-2 mb-2" />
      <div className="flex flex-row justify-between">
        <div onDrop={e => handleDrop(e, 'backlog')} onDragOver={handleDragOver}>
          <TodoSection
            title="Backlog"
            items={items.filter(item => item.category === 'backlog')}
            handleCreateTodo={handleCreateTodo}
          />
        </div>
        <div onDrop={e => handleDrop(e, 'wip')} onDragOver={handleDragOver}>
          <TodoSection
            title="InProgress"
            items={items.filter(item => item.category === 'wip')}
          />
        </div>
        <div
          onDrop={e => handleDrop(e, 'completed')}
          onDragOver={handleDragOver}
        >
          <TodoSection
            title="Completed"
            items={items.filter(item => item.category === 'completed')}
          />
        </div>
      </div>
    </div>
  );
}

export default TodoBoard;
