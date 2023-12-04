import "./ExpenseItem.css";

function ExpenseItem() {
  const expenseDate = new Date(2021, 2, 28);
  const expenseTitle = "Car Insurance";
  const expenseAmount = 546.25;
  const locationOfExpenditure = "Delhi";

  return (
    <div className="mainDiv">
      <h2>Expense Item's</h2>
      <div>
        <div>{expenseTitle}</div> <div>Rs {expenseAmount}</div>
        <div> {locationOfExpenditure}</div>
      </div>
      <div>
        <div>Petrol</div> <div>Rs 100</div>
      </div>
      <div>
        <div>Movies</div> <div>Rs 200</div>
      </div>
    </div>
  );
}
export default ExpenseItem;
