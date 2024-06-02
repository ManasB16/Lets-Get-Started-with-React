import { useState } from "react";

const ExpenseDetails = (props) => {
  const [title, setTitle] = useState(props.title);

  function handleChange(e) {
    setTitle("New Title");
  }

  return (
    <>
      <div className="expense-item__description">
        <h2>{title}</h2>
        <h2>{props.location}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={handleChange}>Change Title</button>
    </>
  );
};

export default ExpenseDetails;
