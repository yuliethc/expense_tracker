import React, { useContext } from "react";
import { GlobalContext } from "../context/GoblalState";

const TransactionList = () => {
  const { transactions } = useContext(GlobalContext);

  return (
    <>
      <h3>History</h3>
      <ul id="list" className="list">
        {transactions.map((transaction) => (
          <li className="minus">
            {" "}
            {transaction.text} <span>{transaction.amount}</span> <button className="delete-btn">x</button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default TransactionList;
