import React, { startTransition, Suspense, useState } from 'react';
import './App.css';
import HelloWorld from './components/HelloWorld';
// import TodoBoard from './components/todo/TodoBoard';
// import Clock from './components/ui/Clock';
import ClockClass from './components/ui/ClockClass';
import ErrorBoundary from './components/ui/ErrorBoundary';
import Loader from './components/ui/Loader';
const TodoBoard = React.lazy(() => import('./components/todo/TodoBoard'));
const Expenses = React.lazy(() => import('./components/expenses/Expenses'));

function App() {
  const [tab, setTab] = useState<string>('todo');

  const Tabs = () => {
    return (
      <div className="flex justify-between flex-row">
        <button
          type="button"
          onClick={() => {
            startTransition(() => {
              setTab('todo');
            });
          }}
          className={`inline-block px-6 py-2.5 bg-transparent 
           font-medium text-xs leading-tight uppercase rounded
          hover:bg-blue-400 focus:text-blue-700
           focus:bg-gray-100 focus:outline-none 
           focus:ring-0 active:bg-gray-200 active:text-blue-800 
           transition duration-300 ease-in-out  ${
             tab === 'todo' ? 'bg-white text-black' : ''
           }`}
        >
          Todo
        </button>

        <button
          type="button"
          onClick={() => setTab('expenses')}
          className={`inline-block px-6 py-2.5 bg-transparent
           font-medium text-xs leading-tight uppercase rounded
          hover:bg-blue-400 focus:text-blue-700
           focus:bg-gray-100 focus:outline-none 
           focus:ring-0 active:bg-gray-200 active:text-blue-800 
           transition duration-300 ease-in-out ${
             tab === 'expenses' ? 'bg-white text-black' : ''
           }`}
        >
          Expenses
        </button>
      </div>
    );
  };

  return (
    <div className="flex flex-col m-5">
      <div className="flex flex-row justify-between">
        <header className="text-2xl font-bold mb-2">{'Projects'}</header>
        <Tabs />
        <div>
          <ClockClass />
          <HelloWorld name={'Abdul Kalam'} />
        </div>
      </div>
      <hr className="mt-2 mb-2" />
      {/* <Expenses list={expensesList} /> */}
      <ErrorBoundary>
        <Suspense fallback={<Loader />}>
          {tab === 'todo' ? <TodoBoard /> : <Expenses />}
        </Suspense>
      </ErrorBoundary>
    </div>
  );
}

export default App;
