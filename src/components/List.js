import React from 'react';
import PropTypes from 'prop-types';
import Expense from './Expense';


const List = ({expenses}) => ( 
    <div className="gastos-realizados">
        <h2>List</h2>
        {expenses.map(expense => (
            <Expense
                key={expense.id} 
                expense={expense}
            />
        ))}
    </div>
 );

 
List.propTypes = {
    expenses: PropTypes.array.isRequired,

}

export default List;