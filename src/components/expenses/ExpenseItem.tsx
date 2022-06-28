import { ExpenseItemType } from '../../types';
import Card from '../ui/Card';
import ExpanseDate from './ExpanseDate';

import './ExpenseItem.css';

function ExpenseItem(props: ExpenseItemType) {
  const { amount, title, date } = props;

  const month = date.toLocaleString('en-US', { month: 'long' }),
    year = date.getFullYear(),
    day = date.toLocaleString('en-US', { day: '2-digit' });
  return (
    <Card className="expense-item">
      <ExpanseDate month={month} day={day} year={year} />
      <div className="ml-2 expense-item-description">
        <div className="expense-item-title">{title}</div>
        <div className="expense-item-amount">${amount}</div>
      </div>
    </Card>
  );
}

export default ExpenseItem;
