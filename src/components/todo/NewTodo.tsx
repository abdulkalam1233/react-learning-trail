import React from 'react';
import { TodoItemType } from '../../types';
import Dialog from '../ui/Dialog';
import TodoForm from './TodoForm';

function NewTodo(props: {
  onClose: () => void;
  onCreate: (data: TodoItemType) => void;
}) {
  return (
    <Dialog
      title="Create Todo"
      closeButton="Close"
      saveBotton="Create"
      dialogId="createTrack"
      onClose={props.onClose}
      formId={'createTodo'}
    >
      <TodoForm onSubmit={props.onCreate} />
    </Dialog>
  );
}

export default NewTodo;
