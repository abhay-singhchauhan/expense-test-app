import "./ExpenseItem.css";
import { useState } from "react";

function ExpenseItem(props) {
  const [title, setTitle] = useState(props.Title);
  const [ammount, setAmmount] = useState(props.Ammount);
  const buttonClickHandler = (e) => {
    setTitle("Hmm");
    console.log(title);
  };
  const changeAmmount = () => {
    setAmmount("100");
    console.log(ammount);
  };

  return (
    <div className="mainDiv">
      <div>{title}</div> <div>Rs {ammount}</div>
      <div> {props.Location}</div>
      <button onClick={buttonClickHandler}>Change Title</button>
      <button onClick={changeAmmount}>Change Ammount</button>
    </div>
  );
}
export default ExpenseItem;
