import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import Select from "react-select";

export const AddTransaction = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);

  const { addTransaction } = useContext(GlobalContext);

  const options = [
    { value: "First Class", label: "First Class" },
    { value: "Secound Class", label: "Secound Class" },
  ];

  const [selectedOption, setSelectedOption] = useState([]);

  const handleChange = (options) => {
    setSelectedOption(options.value);
    
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text,
      amount: +amount,
      selectedOption
    };

    addTransaction(newTransaction);
    console.log(newTransaction);
  };

  return (
    <>
      <h3>Submit New Data</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Tire Size</label>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="e.g. 215/45R17"
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
          </label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder=" Tire Count  "
          />
        </div>
          <label htmlFor="select">
            Class of Tires
          </label>
        <Select
          options={options}
          closeMenuOnSelect={true}
          onChange={handleChange}
        />
        <button className="btn">Submit</button>
      </form>
    </>
  );
};
