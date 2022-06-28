import { nanoid } from 'nanoid';
import React from 'react';
import { ExpenseItemType } from '../../../types';
import Card from '../../ui/Card';
import ExpenseForm from './ExpenseForm';

type PropType = {
  onExpenseAdd: (item: ExpenseItemType) => void;
};

function NewExpense(props: PropType) {
  const saveExpenseHandler = (item: ExpenseItemType) => {
    props.onExpenseAdd({
      ...item,
      id: nanoid(),
      date: new Date(item.date),
    });
  };

  return (
    <Card className="flex bg-blue-400 p-10 self-center w-[40%] mb-3">
      <ExpenseForm saveExpenseHandler={saveExpenseHandler} />
    </Card>
  );
}

export default NewExpense;
