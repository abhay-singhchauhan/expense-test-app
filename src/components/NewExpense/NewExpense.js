import { useState } from "react";

const NewExpense = () => {
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

  return (
    <div>
      <form>
        <div>
          <div>
            <input
              onChange={nameOnChange}
              placeholder="Name"
              type="text"
            ></input>
          </div>
          <div>
            <input
              onChange={priceOnChange}
              placeholder="Price"
              type="number"
            ></input>
          </div>
          <div>
            <input
              onChange={locationOnChange}
              placeholder="Location"
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
