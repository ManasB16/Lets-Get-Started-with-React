const ExpenseDetails = (props) => {
  function handleChange(e) {
    console.log("Button Clicked");
  }

  return (
    <>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <h2>{props.location}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={handleChange}>Change Title</button>
    </>
  );
};

export default ExpenseDetails;
