import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = () => {
  // const [enteredTitle, setEnteredTitle] = useState("");
  // const [enteredAmount, setEnteredAmount] = useState("");
  // const [enteredDate, setEnteredDate] = useState("");

  const [userInput, setUserInput] = useState({
    enteredTitle: "",
    enteredAmount: "",
    enteredDate: "",
  });

  function handleTitle(e) {
    // console.log(e.target.value);
    setUserInput((prev) => {
      return {
        ...prev,
        enteredTitle: e.target.value,
      };
    });
  }

  function handleAmount(e) {
    setUserInput((prev) => {
      return {
        ...prev,
        enteredAmount: e.target.value,
      };
    });
  }

  function handleDate(e) {
    setUserInput((prev) => {
      return {
        ...prev,
        enteredDate: e.target.value,
      };
    });
  }

  function onSubmit(e) {
    // e.preventDefault();
    console.log(userInput);
  }

  return (
    <form onSubmit={onSubmit}>
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
