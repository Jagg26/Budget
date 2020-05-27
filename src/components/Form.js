import React, { useState } from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';
import Error from './Error';


const Form = ({ setExpense, setCreateExpense }) => {

    //State
    const [ name, setName ] = useState('');
    const [ amount, setAmount ] = useState(0);
    const [ error, setError ] = useState(false);

    //Add Expense
    const addExpense = e => {
        e.preventDefault();

        //Validate
        if(amount < 1 || isNaN(amount) || name.trim() === '') {
            setError(true);
            return;
        }

        setError(false);

        //Build Expense
        const expense = {
            name,
            amount,
            id: shortid.generate()
        }

        //
        setExpense(expense);
        setCreateExpense(true);

        //Reset Form
        setName('');
        setAmount(0);
    }

    return ( 
        <form
            onSubmit={addExpense}
        >
            <h2>Add your expenses</h2>

            { error ? <Error message="You have to add both fields correctly" /> : null}

            <div className="campo">
                <label>Expense</label>
                <input 
                    type="text"
                    className="u-full-width"
                    value={name}
                    onChange={ e => setName(e.target.value)}
                />
            </div>

            <div className="campo">
                <label>Expense amount</label>
                <input 
                    type="number"
                    className="u-full-width"
                    value={amount}
                    onChange={ e => setAmount( parseInt(e.target.value, 10) )}
                />
            </div>
                
            <input
                type="submit"
                className="button-primary u-full-width"
                value="Add expense"
            />

        </form>

     );
}
 
Form.propTypes = {
    setExpense: PropTypes.func.isRequired,
    setCreateExpense: PropTypes.func.isRequired

}

export default Form;