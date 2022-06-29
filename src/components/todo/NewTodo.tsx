import React from 'react';
import { TodoItemType } from '../../types';
import Dialog from '../ui/Dialog/Dialog';
import DialogActionButton from '../ui/Dialog/DialogActionButton';
import DialogBody from '../ui/Dialog/DialogBody';
import DialogFooter from '../ui/Dialog/DialogFooter';
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
        <TodoForm onSubmit={props.onCreate} id="createTrack" />
      </DialogBody>
      <DialogFooter>
        <DialogActionButton
          title="Cancel"
          onClick={props.onClose}
          className="bg-red-600 hover:bg-red-500 active:bg-red-600 focus:red-purple-600"
        />
        <DialogActionButton
          title="Create"
          onClick={props.onClose}
          form="createTrack"
          type="submit"
          className="bg-purple-600 hover:bg-purple-500 active:bg-purple-600 focus:red-purple-600"
        />
      </DialogFooter>
    </Dialog>
  );
}

export default NewTodo;
