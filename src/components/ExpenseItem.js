import "./ExpenseItem.css";

function ExpenseItem(props) {
  return (
    <div className="mainDiv">
      <div>{props.Title}</div> <div>Rs {props.Ammount}</div>
      <div> {props.Location}</div>
    </div>
  );
}
export default ExpenseItem;
