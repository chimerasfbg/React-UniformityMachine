import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

// Initial state
const initialState = {
  transactions: [
    { id: 1, text: "225/45 R17", amount: 32 , selectedOption: 'First Class'},
    { id: 2, text: "215/45 R16", amount: 62 , selectedOption: 'First Class'},
    { id: 3, text: "215/45 R16", amount: 3 , selectedOption: 'Secound Class'},
    { id: 4, text: "235/60R17", amount: 2 , selectedOption: 'Secound Class'},
  ],
};

// Create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions
  function deleteTransaction(id) {
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: id,
    });
  }

  function addTransaction(transaction) {
    dispatch({
      type: "ADD_TRANSACTION",
      payload: transaction,
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
