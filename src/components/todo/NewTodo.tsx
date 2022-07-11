import React from 'react';
import { TodoItemType } from '../../types';
import Dialog from '../ui/Dialog/Dialog';
import DialogBody from '../ui/Dialog/DialogBody';
import DialogHeader from '../ui/Dialog/DialogHeader';
import TodoForm from './TodoForm';

function NewTodo(props: {
  onClose: () => void;
  onCreate: (data: TodoItemType) => void;
}) {
  return (
    <Dialog dialogId="createTrack">
      <DialogHeader title="Create Todo" onClose={props.onClose} />
      <DialogBody>
        <TodoForm onSubmit={props.onCreate} onClose={props.onClose} />
      </DialogBody>
    </Dialog>
  );
}

export default NewTodo;
