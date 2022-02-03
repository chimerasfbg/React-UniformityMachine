import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";




export const Transaction = ({ transaction }) => {
  const { deleteTransaction } = useContext(GlobalContext);


  return (
    <li className={transaction.selectedOption == 'Secound Class' ? "minus" : "plus"}>
      {transaction.text}
      <span>
        {(transaction.amount)}
      </span>
      <button
        onClick={() => deleteTransaction(transaction.id)}
        className="delete-btn"
      >
        x
      </button>
    </li>
  );
};
