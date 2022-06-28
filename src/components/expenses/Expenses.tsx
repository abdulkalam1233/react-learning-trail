import { ExpenseItemType, ExpensesListType } from '../../types';
import Card from '../ui/Card';
import ExpenseItem from './ExpenseItem';

function Expenses({ list }: ExpensesListType) {
  return (
    <Card className="flex flex-col bg-black p-10 self-center w-[40%]">
      {list.length ? (
        list.map((expense: ExpenseItemType) => (
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
  );
}

export default Expenses;
