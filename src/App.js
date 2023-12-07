import ExpenseItem from "./components/ExpenseItem.js";
import NewExpense from "./components/NewExpense/NewExpense.js";
import { useState } from "react";

function App() {
  const data_expense = [
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
  const [expense, setExpense] = useState(data_expense);

  function dataAdd(data) {
    setExpense((preExpense) => {
      console.log("currentData", data, "previous Expense", preExpense);
      return [data, ...preExpense];
    });
    console.log(expense, "yaha hai data");
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
  return (
    <div>
      <h2>Let's get started</h2>
      {exp}
      <NewExpense onDataAdd={dataAdd}></NewExpense>
    </div>
  );
}

export default App;
