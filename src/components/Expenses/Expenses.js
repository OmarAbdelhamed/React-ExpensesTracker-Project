import './Expenses.css';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import { useState } from 'react';
import ExpensesChart from './ExpensesChart';
import ExpensesList from './ExpensesList';

const Expenses = (props) => {
  const [FilteredYear, setFilteredYear] = useState('All');

  const onChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredList = props.expenses.filter((expense) => {
    if (FilteredYear === 'All') {
      return FilteredYear;
    } else return expense.date.getFullYear().toString() === FilteredYear;
  });

  return (
    <li>
      <Card className='expenses'>
        <ExpensesFilter
          selected={FilteredYear}
          onChangeHandler={onChangeHandler}
        />
        <ExpensesChart expenses={filteredList} />
        <ExpensesList
          items={filteredList}
          FilteredYear={FilteredYear}
          expenses={props.expenses}
        />
      </Card>
    </li>
  );
};

export default Expenses;
