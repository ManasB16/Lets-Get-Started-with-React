import React from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = ({ onAddExpense }) => {
  function getFormData(data) {
    const formData = { ...data, id: Math.random().toString() };
    onAddExpense(formData);
  }

  return (
    <div className="new-expense">
      <ExpenseForm formFunction={getFormData} />
    </div>
  );
};

export default NewExpense;
