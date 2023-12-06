const NewExpense = () => {
  function inputChange(e) {
    console.log(e.target.value);
  }

  return (
    <div>
      <form>
        <div>
          <div>
            <input
              onChange={inputChange}
              placeholder="Name"
              type="text"
            ></input>
          </div>
          <div>
            <input
              onChange={inputChange}
              placeholder="Price"
              type="number"
            ></input>
          </div>
          <div>
            <input
              onChange={inputChange}
              placeholder="Location"
              type="location"
            ></input>
          </div>
          <div>
            <button onChange={inputChange} type="submit">
              Add Expense
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default NewExpense;
