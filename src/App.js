import React, { useState, useEffect } from 'react';
import Question from './components/Question';
import Form from './components/Form';
import List from './components/List';
import ExpenseControl from './components/ExpenseControl';


function App() {

  //States
  const [budget, setBudget] = useState(0);
  const [remaining, setRemaining] = useState(0);
  const [showQuestion, setQuestion] = useState(true);
  const [expenses, setExpenses] = useState([]);
  const [expense, setExpense] = useState({});
  const [createExpense, setCreateExpense] = useState(false);

  //Use Effect


  useEffect(() => {
    if (createExpense) {
      setExpenses([
        ...expenses,
        expense
      ]);

      const remainingBudget = remaining - expense.amount;
      setRemaining(remainingBudget);

      setCreateExpense(false);  
    }
  }, [expense, createExpense, expenses, remaining]);


  return (
    <div className="container">
      <header>
        <h1>Weekly Budget</h1>

        <div className="contenido-principal contenido">
          {showQuestion ?

            <Question
              setBudget={setBudget}
              setRemaining={setRemaining}
              setQuestion={setQuestion}
            />
            :
            <div className="row">
              <div className="one-half column">
                <Form
                  setExpense={setExpense}
                  setCreateExpense={setCreateExpense}
                />
              </div>

              <div className="one-half column">
                <List
                  expenses={expenses}
                />

                <ExpenseControl
                  budget={budget}
                  remaining={remaining}
                />
              </div>
            </div>

          }
        </div>
      </header>
    </div>
  );
}

export default App;
