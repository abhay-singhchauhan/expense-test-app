import ExpenseItem from "./components/ExpenseItem.js";

function App() {
  return (
    <div>
      <h2>Let's get started achas beetetdifh apdsfjadsfhaf;hdsakjhs;d!</h2>
      <ExpenseItem
        Title="Abhay"
        Ammount="800000"
        Location="Delhi"
      ></ExpenseItem>
      <ExpenseItem Title="Shahid" Ammount="50" Location="America"></ExpenseItem>
      <ExpenseItem
        Title="Numan"
        Ammount="5000"
        Location="New York"
      ></ExpenseItem>
    </div>
  );
}

export default App;
