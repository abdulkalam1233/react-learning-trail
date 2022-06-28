import { useState } from 'react';
import './App.css';
import Expenses from './components/expenses/Expenses';
import NewExpense from './components/expenses/newExpense/NewExpense';
import HelloWorld from './components/HelloWorld';
import Clock from './components/ui/Clock';
import ClockClass from './components/ui/ClockClass';
import { ExpenseItemType } from './types';

function App() {
  const [expensesList, updateExpensesList] = useState<Array<ExpenseItemType>>(
    []
  );

  const addExpenseItem = (item: ExpenseItemType) => {
    updateExpensesList(prevState => {
      return [...prevState, item];
    });
  };

  return (
    <div className="flex flex-col m-5">
      <div className="flex flex-row justify-between">
        <header className="text-2xl font-bold mb-2">Expense Tracker</header>
        {/* <Clock /> */}
        <ClockClass />
        <HelloWorld name={'Abdul Kalam'} />
      </div>
      <NewExpense onExpenseAdd={addExpenseItem} />
      <Expenses list={expensesList} />
    </div>
  );
}

export default App;
