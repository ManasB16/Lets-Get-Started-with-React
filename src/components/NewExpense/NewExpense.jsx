import React from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = ({ addFunction }) => {
  function getFormData(data) {
    const formData = { ...data, id: Math.random().toString() };
    addFunction(formData);
  }

  return (
    <div className="new-expense">
      <ExpenseForm formFunction={getFormData} />
    </div>
  );
};

export default NewExpense;
