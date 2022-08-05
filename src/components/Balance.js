import React, { useContext } from "react";
import {GlobalContext} from "../context/GoblalState";

const Balance = () => {
  const {transactions} = useContext(GlobalContext)
  const amounts = transactions.map(transaction => transaction.amount);
  const total = amounts.reduce((sum,item)=>(sum+=item),0).toFixed(2)
  return (
    <div>
      <h4>Your balance</h4>
      <h1 id="balance">{total}</h1>
    </div>
  );
};

export default Balance;
