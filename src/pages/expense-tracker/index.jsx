import { use } from "react";
import { useAddTransaction } from "../../hooks/useAddTransaction";
import { useState } from "react";

export const ExpenseTracker = () => {
  const { addTransaction } = useAddTransaction();

  const [description, setDescription] = useState("");
  const [transactionAmount, setTransactionAmount] = useState(0);
  const [transactionType, setTransactionType] = useState("expense");

  const onSubmit = async (e) => {
    e.preventDefault();
    await addTransaction({
      description,
      transactionAmount,
      transactionType,
    });
  };

  return (
    <>
      <div className="expense-tracker">
        <div className="container">
          <h1 className="text-4xl">Expense Tracker</h1>
          <div className="balance">
            <h3 className="text-2xl">Balance:</h3>
            <h2 className="text-3xl">$0.00</h2>
          </div>
          <div className="summary">
            <div className="income">
              <h4 className="text-xl">Income</h4>
              <p>$0.00</p>
            </div>
            <div className="expenses">
              <h4 className="text-xl">Expense</h4>
              <p>$0.00</p>
            </div>
          </div>
          <form className="add-transaction" onSubmit={onSubmit}>
            <input
              type="text"
              placeholder="Description"
              required
              onChange={(e) => setDescription(e.target.value)}
            />
            <input
              type="number"
              placeholder="Amount"
              required
              onChange={(e) => setTransactionAmount(e.target.value)}
            />
            <input
              type="radio"
              id="expense"
              value="expense"
              checked={transactionType === "expense"}
              onChange={(e) => setTransactionType(e.target.value)}
            />
            <label htmlFor="expense">Expense</label>
            <input
              type="radio"
              id="income"
              value="income"
              checked={transactionType === "income"}
              onChange={(e) => setTransactionType(e.target.value)}
            />
            <label htmlFor="income">Income</label>

            <button type="sumbit">Add Transaction</button>
          </form>
        </div>
      </div>
      <div className="transactions">
        <h3 className="text-2xl">Transactions</h3>
      </div>
    </>
  );
};
