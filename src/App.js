import ExpenseItem from "./components/ExpenseItem.js";
import NewExpense from "./components/NewExpense/NewExpense.js";

function App() {
  const expense = [
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
  const exp = expense.map((data, index) => (
    <ExpenseItem
      Title={data.Title}
      Ammount={data.Ammount}
      Location={data.Location}
    />
  ));
  console.log(exp);
  function dataAdd(data) {
    expense.push(data);
    console.log(data, "yaha hai data");
  }
  return (
    <div>
      <h2>Let's get started</h2>
      {exp}
      <NewExpense onDataAdd={dataAdd}></NewExpense>
    </div>
  );
}

export default App;
