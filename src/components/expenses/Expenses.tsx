import { useEffect, useState } from 'react';
import { ExpenseItemType } from '../../types';
import Card from '../ui/Card';
import ExpenseFilterBar from './ExpenseFilterBar';
import ExpenseItem from './ExpenseItem';
import NewExpense from './newExpense/NewExpense';

const DATA = [
  {
    title: 'dummy',
    amount: 20,
    date: new Date(
      new Date().getFullYear() - 1,
      new Date().getMonth(),
      new Date().getDate() - 2
    ),
  },
  {
    title: 'dummy2',
    amount: 20,
    date: new Date(
      new Date().getFullYear() - 2,
      new Date().getMonth(),
      new Date().getDate()
    ),
  },
  {
    title: 'dummy3',
    amount: 10,
    date: new Date(),
  },
  {
    title: 'dummy4',
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

  const filterData = () => {
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
  };

  useEffect(filterData, [filters.search, filters.year]);

  const addExpenseItem = (item: ExpenseItemType) => {
    DATA.push(item);
    filterData();
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
