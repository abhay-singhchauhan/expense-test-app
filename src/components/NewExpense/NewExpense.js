import { useState } from "react";

const NewExpense = (props) => {
  const [nameState, setNameState] = useState("");
  const [priceState, setPriceState] = useState("");
  const [locationState, setLocationState] = useState("");

  function nameOnChange(e) {
    setNameState(e.target.value);
  }
  function priceOnChange(e) {
    setPriceState(e.target.value);
  }
  function locationOnChange(e) {
    setLocationState(e.target.value);
  }

  function submitHandler(e) {
    e.preventDefault();
    const expenseData = {
      Title: nameState,
      Ammount: priceState,
      Location: locationState,
    };

    props.onDataAdd(expenseData);
    setLocationState("");
    setNameState("");
    setPriceState("");
  }
  return (
    <div>
      <form onSubmit={submitHandler}>
        <div>
          <div>
            <input
              onChange={nameOnChange}
              placeholder="Name"
              value={nameState}
              type="text"
            ></input>
          </div>
          <div>
            <input
              onChange={priceOnChange}
              placeholder="Price"
              value={priceState}
              type="number"
            ></input>
          </div>
          <div>
            <input
              onChange={locationOnChange}
              placeholder="Location"
              value={locationState}
              type="location"
            ></input>
          </div>
          <div>
            <button type="submit">Add Expense</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default NewExpense;
