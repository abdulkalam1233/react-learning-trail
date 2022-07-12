import { useState } from 'react';
import { ExpenseItemType } from '../../types';
import Card from '../ui/Card';
import ExpenseItem from './ExpenseItem';
import NewExpense from './newExpense/NewExpense';

function Expenses() {
  const [expensesList, updateExpensesList] = useState<Array<ExpenseItemType>>(
    []
  );

  const addExpenseItem = (item: ExpenseItemType) => {
    updateExpensesList(prevState => {
      return [...prevState, item];
    });
  };

  return (
    <div className="flex flex-col justify-center">
      <NewExpense onExpenseAdd={addExpenseItem} />
      <Card className="flex flex-col bg-black p-10 self-center w-[40%]">
        {expensesList.length ? (
          expensesList.map((expense: ExpenseItemType) => (
            <ExpenseItem
              key={expense?.id ?? expense.title}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          ))
        ) : (
          <div className="self-center">No expenses found</div>
        )}
      </Card>
    </div>
  );
}

export default Expenses;
