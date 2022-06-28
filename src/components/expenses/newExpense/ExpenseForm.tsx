import React, { useEffect, useState } from 'react';
import { ExpenseItemType } from '../../../types';

import './ExpenseForm.css';

type PropType = {
  saveExpenseHandler: (expenseItem: ExpenseItemType) => void;
};

function ExpenseForm(props: PropType) {
  const [formValues, setFormValues] = useState<ExpenseItemType>();
  const [errors, setErrors] = useState<{
    title: string;
    amount: string;
    date: string;
  }>();

  const handleInputChange = (e: any) => {
    setFormValues(prevState => {
      const existingFormValues: any = { ...prevState };
      existingFormValues[e.target.name] = e.target.value;
      return existingFormValues;
    });
  };

  const validateTheInputs = (handleSubmitFunction?: any) => {
    const errorObject: any = {
      ...errors,
    };
    if (formValues) {
      if (!formValues.title.trim()) {
        errorObject.title = 'Title is required';
      } else {
        errorObject.title = '';
      }
      if (!formValues.amount) {
        errorObject.amount = 'Amount is required';
      } else {
        errorObject.amount = '';
      }
      if (!formValues.date) {
        errorObject.date = 'Date is required';
      } else {
        errorObject.date = '';
      }

      if (
        !errorObject?.date &&
        !errorObject?.amount &&
        !errorObject?.title &&
        typeof handleSubmitFunction == 'function'
      ) {
        handleSubmit();
      }

      setErrors(errorObject);
    }
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(validateTheInputs, [formValues]);

  const handleSubmit = () => {
    if (formValues) {
      props.saveExpenseHandler(formValues);
    }
  };

  return (
    <form
      onSubmit={e => {
        validateTheInputs(handleSubmit);
        e.preventDefault();
      }}
    >
      <div className="formContainer">
        <div className="inputContainer">
          <label className="font-bold">Title</label>
          <input
            type={'text'}
            placeholder="Title"
            id="title"
            name="title"
            className={`${errors?.title ? 'inputError' : 'input'}`}
            onChange={handleInputChange}
          />
          <p className="error">{errors?.title}</p>
        </div>
        <div className="inputContainer">
          <label className="font-bold">Amount</label>
          <input
            type={'number'}
            placeholder="Amount"
            id="amount"
            name="amount"
            className={`${errors?.amount ? 'inputError' : 'input'}`}
            min={0}
            onChange={handleInputChange}
          />
          <p className="error">{errors?.amount}</p>
        </div>
        <div className="inputContainer">
          <label className="font-bold">Date</label>
          <input
            type={'date'}
            placeholder="dd.mm.yyyy"
            id="date"
            name="date"
            className={`${errors?.date ? 'inputError' : 'input'}`}
            onChange={handleInputChange}
          />
          <p className="error">{errors?.date}</p>
        </div>
      </div>
      <div className="flex justify-end">
        <input
          type={'submit'}
          value="Create Expense"
          className="submitButton"
        />
      </div>
    </form>
  );
}

export default ExpenseForm;
