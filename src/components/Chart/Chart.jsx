import React from "react";
import ChartBar from "./ChartBar";
import "./Chart.css";
const Chart = ({ chartdata }) => {
  const onlyExpenses = chartdata.map((data) => {
    return data.price;
  });

  const maxVal = Math.max(...onlyExpenses);
  console.log(maxVal);

  const chart = [
    { expenseMonth: "Jan", expenseAmount: 0 },
    { expenseMonth: "Feb", expenseAmount: 0 },
    { expenseMonth: "Mar", expenseAmount: 0 },
    { expenseMonth: "Apr", expenseAmount: 0 },
    { expenseMonth: "May", expenseAmount: 0 },
    { expenseMonth: "June", expenseAmount: 0 },
    { expenseMonth: "July", expenseAmount: 0 },
    { expenseMonth: "Aug", expenseAmount: 0 },
    { expenseMonth: "Sept", expenseAmount: 0 },
    { expenseMonth: "Oct", expenseAmount: 0 },
    { expenseMonth: "Nov", expenseAmount: 0 },
    { expenseMonth: "Dec", expenseAmount: 0 },
  ];

  for (let item of chartdata) {
    chart[item.date.getMonth()].expenseAmount += item.price;
  }

  return (
    <div className="chart">
      {chart.map((monthData, index) => {
        return (
          <ChartBar
            key={index}
            label={monthData.expenseMonth}
            value={monthData.expenseAmount}
            maxValue={maxVal}
          />
        );
      })}
    </div>
  );
};

export default Chart;
