import { useState } from "react";
import Button from "./components/Button";
import Card from "./components/Card";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import SummeryCard from "./components/SummaryCard";
import TransactionList from "./components/TransactionList";
import { transactions as initialTransactions } from "./data/transaction";



 
const sampleExpenses = [
  { icon: "☕", title: "Chai Tapri", category: "Food", amount: 60 },
  { icon: "⛽", title: "Petrol", category: "Travel", amount: 1200 },
  { icon: "📚", title: "Udemy Course", category: "Education", amount: 499 },
  { icon: "🍕", title: "Dominos Pizza", category: "Food", amount: 780 },
  { icon: "🎮", title: "Game Purchase", category: "Entertainment", amount: 2999 },
];

const filterTabs = [
  { value: "all", label: "All" },
  { value: "income", label: "Income" },
  { value: "expense", label: "Expense" },
];


function App() {
  const [transactions, setTransactions] = useState(initialTransactions);
  const [filter, setFilter] = useState("all");

    // Derived values: state se hi nikalte hain, alag state nahi banate
    const totalIncome = transactions
          .filter((t)=>t.type === "income")
          .reduce((sum, t) => sum + t.amount, 0);

    const totalExpense = transactions
          .filter((t) => t.type === "expense")
          .reduce((sum, t) => sum + t.amount , 0);

    const balance = totalIncome - totalExpense;

    const visibleTransactions = filter === "all" ? transactions : transactions.filter((t) => t.type === filter);

    // ---- Event handlers ----
    const handleAdd = () =>{
          const sample = sampleExpenses[Math.floor(Math.random() * sampleExpenses.length)];

          const newTransaction = {
      ...sample,
      id: Date.now(), // unique id
      type: "expense",
      date: new Date().toLocaleDateString("en-IN", { day: "2-digit", month: "short" }),
    };
     setTransactions((prev) => [newTransaction, ...prev]);
  };

  const handleDelete = (id) => {
    setTransactions((prev) => prev.filter((t) => t.id !== id));
  };

  const handleDeleteLatest = () => {
    setTransactions((prev) => prev.slice(1));
  };



  return (
    <div className='min-h-screen bg-slate-200'>
      <Navbar />

      <main className="max-w-5xl mx-auto p-6">
        <div className="mb-8">
             <h2 className="text-3xl font-bold text-slate-800"> Dashboard</h2>
             <p className="text-slate-500"> Aapke paise ka poora hisaab, sirf ek jagah.</p>
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

        {/* Recent Transactions */}
        {/* <section className="mt-10 rounded-2xl bg-white p-6 shadow"> */}
          <Card className="mt-10 rounded-2xl bg-white p-6 shadow">
            <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
          <h3 className=" text-xl font-bold text-slate-800">
             Recent Transactions
          </h3>

          <span className="rounded-full bg-indigo-100 px-3 py-1 text-sm font-medium text-indigo-600">
            {transactions.length} items
          </span>
             </div>

             {/* Filter tabs */}
             <div className="mb-2 flex gap-2">
            {filterTabs.map((tab)=>(
              <button
              key={tab.value}
              onClick={()=> setFilter(tab.value)}
              className={`rounded-full px-4 py-1.5 text-sm font-medium transition ${filter === tab.value?"bg-indigo-600 text-white": "bg-slate-200 text-slate-600 hover:bg-slate-300"}`}
              > {tab.label}</button>
            ))}
             </div>

          <TransactionList transactions={visibleTransactions} onDelete={handleDelete}/>
        {/* </section> */}
        </Card>
        
        {/* button */}
     <div className="mt-6 flex justify-center gap-4">
            <Button text="+ Add Expense" color="blue" onClick={handleAdd} />
            <Button text="Delete latest" color="red" onClick={handleDeleteLatest} />
        </div>
      </main>
   
      <Footer />
    </div>
  )
}

export default App;
