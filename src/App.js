// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import React from "react";
import ExpenseItem from "./components/Expenses/ExpenseItem";
import NewExpense from "./components/NewExpense/NewExpense";

const App = () => {
  const expenses = [
    {
      id: 1,
      title: "Food",
      amount: 10,
      location: "Delhi",
      date: new Date(2023, 10, 12),
    },
    {
      id: 2,
      title: "Sweets",
      amount: 100,
      location: "Delhi",
      date: new Date(2023, 8, 9),
    },
    {
      id: 3,
      title: "Chocolates",
      amount: 50,
      location: "Delhi",
      date: new Date(2023, 9, 10),
    },
    {
      id: 4,
      title: "Butter",
      amount: 70,
      location: "Delhi",
      date: new Date(2023, 10, 11),
    },
  ];

  function addData(data) {
    expenses.push(data);
    console.log(data);
  }

  return (
    <div>
      <NewExpense addFunction={addData} />
      {expenses.map((expense) => (
        <ExpenseItem
          key={expense.id} // Don't forget to set a unique key when mapping components
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
          location={expense.location}
        />
      ))}
    </div>
  );
};

export default App;
