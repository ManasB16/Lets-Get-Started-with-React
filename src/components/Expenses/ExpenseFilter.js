import React from "react";
import "./ExpensesFilter.css";

const ExpenseFilter = ({ selectedYear, onChangeFilter }) => {
  function onSetYearHandle(e) {
    onChangeFilter(e.target.value);
  }
  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter Year</label>
        <select value={selectedYear} onChange={onSetYearHandle}>
          <option value="2026">2026</option>
          <option value="2025">2025</option>
          <option value="2024">2024</option>
          <option value="2023">2023</option>
        </select>
      </div>
    </div>
  );
};

export default ExpenseFilter;
