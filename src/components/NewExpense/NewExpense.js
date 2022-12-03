import React, { useState } from 'react';
import './NewExpense.css';
import './ExpenseForm';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {
  const [Show, setShow] = useState(false);

  const NewDataHandler = (NewExpenseData) => {
    const expenseData = {
      ...NewExpenseData,
      id: Math.random().toString(),
    };
    props.NewDataExpense(expenseData);
    setShow(false);
  };

  const startShowing = () => {
    setShow(true);
  };

  const NotSowing = () => {
    setShow(false);
  };
  return (
    <div className='new-expense'>
      {!Show && <button onClick={startShowing}>Add New Expense</button>}
      {Show && (
        <ExpenseForm onSaveExpenseData={NewDataHandler} onCancel={NotSowing} />
      )}
    </div>
  );
};

export default NewExpense;
