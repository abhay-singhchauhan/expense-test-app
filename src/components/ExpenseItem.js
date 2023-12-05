import "./ExpenseItem.css";

function ExpenseItem(props) {
  const buttonClickHandler = (e) => {
    e.target.parentElement.remove();
  };

  return (
    <div className="mainDiv">
      <div>{props.Title}</div> <div>Rs {props.Ammount}</div>
      <div> {props.Location}</div>
      <button onClick={buttonClickHandler}>Change Title</button>
    </div>
  );
}
export default ExpenseItem;
