export type ExpenseItemType = {
  id?: string;
  amount: number;
  date: Date;
  title: string;
};

export type ExpenseDateType = {
  month: string;
  day: string | number;
  year: number;
};

export type ExpensesListType = {
  list: Array<ExpenseItemType>;
};

export type TodoItemType = {
  id?: string;
  title: string;
  description: string;
};
