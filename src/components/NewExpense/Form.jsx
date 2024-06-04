import React from "react";
import "./ExpenseForm.css";

const Form = ({
  submitFunc,
  userInput,
  handleTitle,
  handleAmount,
  handleDate,
  trueHandler,
  falseHandler,
  displayForm,
}) => {
  if (!displayForm) {
    return (
      <div className="buttons">
        <div className="new-expense__actions">
          <button onClick={trueHandler}>Add Expense</button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={submitFunc}>
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
      <div className="buttons">
        <div className="new-expense__actions">
          <button onClick={falseHandler}>Cancel</button>
        </div>
        <div className="new-expense__actions">
          <button type="submit">Add Expense</button>
        </div>
      </div>
    </form>
  );
};

export default Form;
