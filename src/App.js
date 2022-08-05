import "./App.css";
import Header from "./components/Header";
import Balance from "./components/Balance";
import IncomeExpenses from "./components/IncomeExpenses";
import TransactionList from "./components/TransactionList";
import AddTransacton from "./components/AddTransacton";

function App() {
  return (
    <>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpenses/>
        <TransactionList/>
        <AddTransacton/>
      </div>
    </>
  );
}

export default App;
