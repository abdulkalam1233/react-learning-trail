import { ExpenseDateType } from '../../types';

function ExpanseDate({ month, year, day }: ExpenseDateType) {
  return (
    <div className="flex flex-col content-center border-2 border-white bg-black rounded-lg p-2">
      <div className="font-bold">{month}</div>
      <div>{year}</div>
      <div className="font-bold">{day}</div>
    </div>
  );
}

export default ExpanseDate;
