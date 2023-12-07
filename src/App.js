import ExpenseItem from "./components/ExpenseItem.js";
import NewExpense from "./components/NewExpense/NewExpense.js";
import Filter from "./components/filter.js";
import { useState } from "react";

function App() {
  let main_data = [
    {
      Title: "Abhay",
      Ammount: 54524,
      Location: "Delhi",
    },
    {
      Title: "Shanu",
      Ammount: 78,
      Location: "Mumbai",
    },
    {
      Title: "Salmon Bhaai",
      Ammount: 69,
      Location: "Mumbai",
    },
  ];
  const data_expense = main_data;
  const [expense, setExpense] = useState(data_expense);
  const [visible, setVisible] = useState(true);

  function dataAdd(data) {
    main_data = [data, ...main_data];
    setExpense(main_data);
    setVisible(false);
    console.log(expense, "yaha hai data");
  }

  function selectChange(value) {
    console.log("this is teh vlue", value);
    if (value === "") {
      console.log(main_data);
      setExpense(main_data);
    } else {
      const arr = main_data.filter((ele) => {
        if (ele.Location === value) {
          return true;
        } else {
          return false;
        }
      });
      setExpense(arr);
    }
  }

  const exp = expense.map((data, index) => (
    <ExpenseItem
      key={index}
      Title={data.Title}
      Ammount={data.Ammount}
      Location={data.Location}
    />
  ));
  console.log(exp);
  function showForm() {
    setVisible(true);
  }
  return (
    <div>
      <h2>Let's get started</h2>
      <Filter onSelectChange={selectChange}></Filter>
      {exp}
      {visible ? (
        <NewExpense onDataAdd={dataAdd}></NewExpense>
      ) : (
        <button onClick={showForm}>Add Expense</button>
      )}
    </div>
  );
}

export default App;
