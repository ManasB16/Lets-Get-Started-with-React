import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = ({ formFunction }) => {
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
    e.preventDefault();
    const newUserInput = {
      title: userInput.enteredTitle,
      price: userInput.enteredAmount,
      date: new Date(userInput.enteredDate),
    };
    formFunction(newUserInput);
    setUserInput({
      enteredTitle: "",
      enteredAmount: "",
      enteredDate: "",
    });
  }

  return (
    <form onSubmit={onSubmit}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            value={userInput.enteredTitle}
            id="title"
            onChange={handleTitle}
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="amount">Amount</label>
          <input
            type="Number"
            id="amount"
            onChange={handleAmount}
            value={userInput.enteredAmount}
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="date">Date</label>
          <input
            type="date"
            min="2023=01-01"
            max="2024-12-31"
            id="date"
            onChange={handleDate}
            value={userInput.enteredDate}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
