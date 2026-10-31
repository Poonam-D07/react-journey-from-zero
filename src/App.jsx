import { useEffect, useState } from "react";
import Button from "./components/Button";
import Card from "./components/Card";
import ExpenseForm from "./components/ExpenseForm";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import SummeryCard from "./components/SummaryCard";
import TransactionList from "./components/TransactionList";
import { transactions as initialTransactions } from "./data/transaction";



const filterTabs = [
  { value: "all", label: "All" },
  { value: "income", label: "Income" },
  { value: "expense", label: "Expense" },
];

const STORAGE_KEY = "expense-tracker-transactions";

const formatDate = (iso) =>
                            new Date(iso).toLocaleDateString("en-IN",{day: "2-digit", month: "short"});
function App() {

  const [transactions, setTransactions] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? JSON.parse(saved) : initialTransactions;
    } catch {
      return initialTransactions;
    }
  });
  const [filter, setFilter] = useState("all");

  const [savedAt, setSavedAt] = useState("");
  const [search, setSearch] = useState("");


  // Jab bhi transactions badle, localStorage mein save karo
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(transactions));
    const now = new Date();
    const timeString = now.toLocaleTimeString("en-IN", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });
    setSavedAt(timeString);
  }, [transactions]);

  // Derived values: state se hi nikalte hain, alag state nahi banate
  const totalIncome = transactions
    .filter((t) => t.type === "income")
    .reduce((sum, t) => sum + t.amount, 0);

  const totalExpense = transactions
    .filter((t) => t.type === "expense")
    .reduce((sum, t) => sum + t.amount, 0);

  const balance = totalIncome - totalExpense;

  const visibleTransactions = transactions
    .filter((t) => filter === "all" || t.type === filter)
    .filter((t) => t.title.toLowerCase().includes(search.toLowerCase()));

  // ---- Event handlers ----
  const handleAdd = (data) => {

    const newTransaction = {
      ...data,
      id: Date.now(),
      date: formatDate(data.date),
    };
    setTransactions((prev) => [newTransaction, ...prev]);
  };

  const handleReset = () => {
    setTransactions(initialTransactions);
  };

  const handleDelete = (id) => {
    setTransactions((prev) => prev.filter((t) => t.id !== id));
    if(id === editingId) handleCancelEdit();
  };

  const handleDeleteLatest = () => {
    setTransactions((prev) => prev.slice(1));
  };

  // 1. Yeh yaad rakhega ki kis item ki ID edit ho rahi hai (null matlab koi edit nahi ho raha)
  const [editingId, setEditingId] = useState(null);

  // 2. Yeh us pure item ko store karega jise hum edit kar rahe hain
  const [editItem, setEditItem] = useState(null);

  // 3. Jab koi ✏️ button par click karega
  const handleEditClick = (item) => {
    setEditingId(item.id); // ID save kar li
    setEditItem(item);     // Pure item ki values form ko bhejne ke liye save kar li
  };
    const handleCancelEdit = () => {
  setEditingId(null);
  setEditItem(null);
};

  // 4. Jab user "Update" button dabayega, toh list ko update karne wala function
  const handleUpdateTransaction = (updatedTx) => {
  setTransactions( 
    transactions.map((tx) =>
      tx.id === editingId
        ? { ...tx, ...updatedTx, date: updatedTx.date ? formatDate(updatedTx.date) : tx.date }
        : tx
    )
  );
  handleCancelEdit();   // update ke baad edit mode band
};

  return (
    <div className='min-h-screen bg-slate-200'>
      <Navbar />

      <main className="max-w-5xl mx-auto p-6">
        {/* Header Section */}
        <div className="mb-8 flex items-baseline justify-between">
          <div className="">
            <h2 className="text-3xl font-bold text-slate-800"> Dashboard</h2>
            <p className="text-slate-500"> Aapke paise ka poora hisaab, sirf ek jagah.</p>
          </div>

          {/* 3. Chhota Saved Text UI */}
          {savedAt && (
            <span className="text-xs font-medium text-emerald-600 bg-emerald-50 px-2 py-1 rounded-md border border-emerald-200 animate-pulse">
              💾 Saved {savedAt}
            </span>
          )}
        </div>
        {/* Summary Cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <SummeryCard
            title="Total Balance"
            amount={balance}
            icon="💼"
            gradient="bg-gradient-to-br from-indigo-500 to-purple-600"
          />

          <SummeryCard
            title="Total Income"
            amount={totalIncome}
            icon="📈"
            gradient="bg-gradient-to-br from-emerald-500 to-teal-600"
          />

          <SummeryCard
            title="Total Expenses"
            amount={totalExpense}
            icon="📉"
            gradient="bg-gradient-to-br from-rose-500 to-orange-600"
          />
        </div>
        <ExpenseForm onAdd={handleAdd}
          editItem={editItem}  // Edit hone wale item ki values
          isEditing={editingId !== null} // Kya abhi edit chal raha hai? (True/False)
          onUpdate={handleUpdateTransaction}
           onCancel={handleCancelEdit}
        />

        {/* Recent Transactions */}
        {/* <section className="mt-10 rounded-2xl bg-white p-6 shadow"> */}
        <Card className="mt-10 rounded-2xl bg-white p-6 shadow">
          <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
            <h3 className=" text-xl font-bold text-slate-800">
              Recent Transactions
            </h3>

            <span className="rounded-full bg-indigo-100 px-3 py-1 text-sm font-medium text-indigo-600">
              {visibleTransactions.length} items
            </span>
          </div>

          {/* Filter tabs */}
          <div className="mb-2 flex gap-2">
            {filterTabs.map((tab) => (
              <button
                key={tab.value}
                onClick={() => setFilter(tab.value)}
                className={`rounded-full px-4 py-1.5 text-sm font-medium transition ${filter === tab.value ? "bg-indigo-600 text-white" : "bg-slate-200 text-slate-600 hover:bg-slate-300"}`}
              > {tab.label}</button>
            ))}
            </div>
            {/* Search */}
            <input
              type="text"
              placeholder="🔎 Search by title..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="my-3 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
            />
          



          <TransactionList
            transactions={visibleTransactions}
            onDelete={handleDelete}
            onEdit={handleEditClick}
          />
          {/* </section> */}
        </Card>

        {/* button */}
        <div className="mt-6 flex justify-center gap-4">
          <Button text="Reset Data" color="blue" onClick={handleReset} />
          <Button text="Delete latest" color="red" onClick={handleDeleteLatest} />
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default App;
