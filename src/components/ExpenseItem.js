import "./ExpenseItem.css";

function ExpenseItem() {
  const expenseDate = new Date(2000, 11, 16);
  const expenseTitle = "Birthday";
  const expenseAmount = 100000;
  const locationOfExp = "Delhi";

  return (
    <div className="expense-item">
      <div>{expenseDate.toISOString()}</div>
      <div className="expense-item__description">
        <h2>{expenseTitle}</h2>
        <h2>{locationOfExp}</h2>
        <div className="expense-item__price">${expenseAmount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
