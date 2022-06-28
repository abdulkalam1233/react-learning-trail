import React from 'react';
import TodoSection from './TodoSection';

function TodoBoard() {
  return (
    <div>
      <hr className="mt-2 mb-2" />
      <div className="flex flex-row justify-between">
        <TodoSection title="Backlog" items={[]} hasCreate />
        <TodoSection title="InProgress" items={[]} />
        <TodoSection title="Completed" items={[]} />
      </div>
    </div>
  );
}

export default TodoBoard;
