import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const IncomeExpenses = () => {
  const { transactions } = useContext(GlobalContext);

  var Tr = transactions.filter(transaction=>transaction.selectedOption == 'First Class' )

  var Hr = transactions.filter(transaction=>transaction.selectedOption == 'Secound Class' )

    var income = Tr.map((item=>item.amount))
    .reduce((acc, item) => (acc += item), 0);

    var expense =
    Hr.map((item=>item.amount))
    .reduce((acc, item) => (acc += item), 0)
  

  return (
    <div className="class-container">
      <div>
        <h4>First Class</h4>
        <p className="base green">{income}</p>
      </div>
      <div>
        <h4>Third class</h4>
        <p className="base red">{expense}</p>
      </div>
    </div>
  );
};
