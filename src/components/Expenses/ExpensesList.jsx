import React from "react";
import ExpenseItem from "./ExpenseItem";
const ExpensesList = ({ filteredItems }) => {
  if (filteredItems.length === 0) {
    return <h2>No Expenses found</h2>;
  }
  return (
    <ul>
      {filteredItems.map((expense) => {
        return (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            date={expense.date}
            price={expense.price}
          />
        );
      })}
    </ul>
  );
};

export default ExpensesList;
