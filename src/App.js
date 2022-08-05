import "./App.css";
import Header from "./components/Header";
import Balance from "./components/Balance";
import IncomeExpenses from "./components/IncomeExpenses";
import TransactionList from "./components/TransactionList";
import AddTransacton from "./components/AddTransacton";
import {GlobalPovider} from "./context/GoblalState"


function App() {
  return (
    <GlobalPovider>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpenses/>
        <TransactionList/>
        <AddTransacton/>
      </div>
    </GlobalPovider>
  );
}

export default App;
