import { useEffect, useState } from 'react';
import { ExpenseItemType } from '../../types';
import Card from '../ui/Card';
import ExpenseFilterBar from './ExpenseFilterBar';
import ExpenseItem from './ExpenseItem';
import NewExpense from './newExpense/NewExpense';

const DATA = [
  {
    title: 'dummy',
    amount: 10,
    date: new Date(),
  },
  {
    title: 'dummy2',
    amount: 20,
    date: new Date(
      new Date().getFullYear() - 1,
      new Date().getMonth(),
      new Date().getDate() - 2
    ),
  },
  {
    title: 'dummy3',
    amount: 30,
    date: new Date(
      new Date().getFullYear(),
      new Date().getMonth(),
      new Date().getDate() - 1
    ),
  },
];

function Expenses() {
  const [expensesList, updateExpensesList] =
    useState<Array<ExpenseItemType>>(DATA);

  const [filters, setFilters] = useState<{
    search: string;
    year: number | string;
  }>({
    search: '',
    year: new Date().getFullYear(),
  });

  useEffect(() => {
    if (filters.search) {
      updateExpensesList(
        DATA.filter(
          item =>
            filters.search &&
            item.title.includes(filters.search) &&
            item.date.getFullYear() == filters.year
        )
      );
    } else {
      updateExpensesList(
        DATA.filter(item => item.date.getFullYear() == filters.year)
      );
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filters.search, filters.year]);

  const addExpenseItem = (item: ExpenseItemType) => {
    updateExpensesList(prevState => {
      return [...prevState, item];
    });
  };

  return (
    <div className="flex flex-col justify-center">
      <NewExpense onExpenseAdd={addExpenseItem} />
      <Card className="flex flex-col bg-black p-10 self-center w-[40%]">
        <ExpenseFilterBar setFilters={setFilters} filters={filters} />
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
