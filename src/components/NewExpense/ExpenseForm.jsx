import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = () => {
  const [enteredTitle, setEnteredTitle] = useState("");

  function handleTitle(e) {
    setEnteredTitle(e.target.value);
  }
  const [enteredAmount, setEnteredAmount] = useState("");

  function handleAmount(e) {
    setEnteredAmount(e.target.value);
  }
  const [enteredDate, setEnteredDate] = useState("");

  function handleDate(e) {
    setEnteredDate(e.target.value);
  }

  return (
    <form>
      <div className="new-expense_controls">
        <div className="new-expense_control">
          <label htmlFor="title">Title</label>
          <input type="text" id="title" onChange={handleTitle} />
        </div>
        <div className="new-expense_control">
          <label htmlFor="amount">Amount</label>
          <input type="Number" id="amount" onChange={handleAmount} />
        </div>
        <div className="new-expense_control">
          <label htmlFor="date">Date</label>
          <input
            type="date"
            min="2023=01-01"
            max="2024-12-31"
            id="date"
            onChange={handleDate}
          />
        </div>
      </div>
      <div className="new-expense_actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
