import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import Error from './Error';

const Question = ({ setBudget, setRemaining, setQuestion }) => {

    //Defining state
    const [ amount, setAmount ] = useState(0);
    const [ error, setError ] = useState(false);

    //Function for define budget
    const defineBudget = e => {
        setAmount( parseInt(e.target.value, 10 ))
    }

    //Submit
    const addBudget = e => {
        e.preventDefault();

        //Validation
        if( amount < 1 || isNaN( amount )){
            setError(true);
            return;
        }

        // If validates
        setError(false);
        setBudget(amount);
        setRemaining(amount);
        setQuestion(false);

    }

    return ( 
        <Fragment>
            <h2>Add your budget</h2>

            { error ? <Error message="The budget is not valid" />  : null}

            <form
                onSubmit={addBudget}
            >
                <input 
                    type="number"
                    className="u-full-width"
                    placeholder="Add your budget"
                    onChange={defineBudget}
                /> 

                <input 
                    type="submit"
                    className="button-primary u-full-width"
                    value="Define Budget"
                />
            </form>

        </Fragment>
     );
}

Question.propTypes = {
    setBudget: PropTypes.func.isRequired,
    setRemaining: PropTypes.func.isRequired,
    setQuestion: PropTypes.func.isRequired

}
 
export default Question;