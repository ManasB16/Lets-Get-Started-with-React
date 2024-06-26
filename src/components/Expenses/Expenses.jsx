import React, { useState } from "react";
import ExpensesFilter from "./ExpenseFilter";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

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
    <li>
      <Card className="expenses">
        <ExpensesFilter
          selectedYear={filteredYear}
          onChangeFilter={changeFilterHandler}
        />
        <ExpensesChart chartData={filteredYearExp} />
        <ExpensesList filteredItems={filteredYearExp} />
      </Card>
    </li>
  );
};

export default Expenses;
