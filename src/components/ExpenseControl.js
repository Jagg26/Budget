import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { checkBudget } from '../helpers';


const ExpenseControl = ({budget, remaining}) => {
    return ( 
        <Fragment>
            <div className="alert alert-primary">
                Budget: $ {budget}
            </div>
            <div className={checkBudget(budget, remaining)}>
                Remaining: $ {remaining}
            </div>
        </Fragment>
     );
}
 
ExpenseControl.propTypes = {
    budget: PropTypes.number.isRequired,
    remaining: PropTypes.number.isRequired,

}

export default ExpenseControl;