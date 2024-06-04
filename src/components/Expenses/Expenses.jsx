// Write your code at relevant places in the code below:

import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpenseFilter";
import "./Expenses.css";
import Card from "../UI/Card";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2023");

  const changeFilterHandler = (selectedYear) => {
    console.log(selectedYear);
    setFilteredYear(selectedYear);
  };

  let filteredYearExp = props.expenses.filter((item) => {
    return item.date.getFullYear().toString() === filteredYear;
  });

  return (
    <Card className="expenses">
      <ExpensesFilter
        selectedYear={filteredYear}
        onChangeFilter={changeFilterHandler}
      />
      {filteredYearExp.map((expense) => {
        return (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            date={expense.date}
            price={expense.price}
          />
        );
      })}
    </Card>
  );
};

export default Expenses;
