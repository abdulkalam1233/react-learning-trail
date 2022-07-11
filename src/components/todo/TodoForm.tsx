import React, { useState } from 'react';
import { TodoItemType } from '../../types';
import DialogActionButton from '../ui/Dialog/DialogActionButton';
import DialogFooter from '../ui/Dialog/DialogFooter';
import Input from '../ui/Input';

export default function TodoForm(props: {
  onSubmit: (data: TodoItemType) => void;
  onClose: () => void;
}) {
  const [formData, setFormData] = useState<TodoItemType>({
    title: '',
    description: '',
  });
  const [errors, setErrors] = useState<TodoItemType>({
    title: '',
    description: '',
  });
  const handleSubmit = (e: any) => {
    if (!validate()) {
      props.onSubmit(formData);
    }
    e.preventDefault();
  };

  const validate = (): boolean => {
    const newErrors = { ...errors };
    if (!formData.title.trim()) {
      newErrors.title = 'Title is required';
    } else {
      newErrors.title = '';
    }

    if (!formData.description.trim()) {
      newErrors.description = 'Description is required';
    } else {
      newErrors.description = '';
    }
    setErrors(newErrors);
    return newErrors.title.length > 0 || newErrors.description.length > 0;
  };

  const onChangeInput = (e: any) => {
    setFormData(prevState => {
      const existingFormValues: any = { ...prevState };
      existingFormValues[e.target.name] = e.target.value;
      return existingFormValues;
    });
  };

  return (
    <form onSubmit={handleSubmit} id={'createTrack'}>
      <div className="flex flex-col">
        <label>Title</label>
        <Input
          type={'text'}
          minLength={3}
          maxLength={25}
          name="title"
          value={formData.title}
          onChange={onChangeInput}
        />
        <small className="text-red-600">{errors.title}</small>
      </div>
      <div className="flex flex-col">
        <label>Description</label>
        <textarea
          minLength={3}
          maxLength={250}
          name="description"
          value={formData.description}
          className={'border-2 p-2'}
          onChange={onChangeInput}
        />
        <small className="text-red-600">{errors.description}</small>
      </div>
      <DialogFooter>
        <DialogActionButton
          title="Cancel"
          onClick={props.onClose}
          className="bg-red-600 hover:bg-red-500 active:bg-red-600 focus:red-purple-600"
        />
        <input
          type="submit"
          value="Submit"
          className={`inline-block px-6 py-2.5 text-white font-medium text-xs leading-tight uppercase rounded
           shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg
           transition duration-150 ease-in-out bg-purple-600 hover:bg-purple-500 active:bg-purple-600 focus:red-purple-600`}
        />
      </DialogFooter>
    </form>
  );
}
