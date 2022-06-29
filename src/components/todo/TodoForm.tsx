import React, { useState } from 'react';
import { TodoItemType } from '../../types';
import Input from '../ui/Input';

export default function TodoForm(props: {
  onSubmit: (data: TodoItemType) => void;
  id: string;
}) {
  const [formData, setFormData] = useState<TodoItemType>({
    title: '',
    description: '',
  });

  const handleSubmit = (e: any) => {
    props.onSubmit(formData);
    e.preventDefault();
  };

  const onChangeInput = (e: any) => {
    setFormData(prevState => {
      const existingFormValues: any = { ...prevState };
      existingFormValues[e.target.name] = e.target.value;
      return existingFormValues;
    });
  };

  return (
    <form onSubmit={handleSubmit} id={props.id}>
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
      </div>
    </form>
  );
}
