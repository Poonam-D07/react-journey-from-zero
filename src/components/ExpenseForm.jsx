import { useState } from "react";



    const categories = [
  { name: "Food", icon: "🍔" },
  { name: "Travel", icon: "🚕" },
  { name: "Bills", icon: "💡" },
  { name: "Lifestyle", icon: "🛍️" },
  { name: "Entertainment", icon: "🎬" },
  { name: "Health", icon: "💊" },
  { name: "Education", icon: "📚" },
];

const inputClass =
  "w-full rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200";

  function ExpenseForm({ onAdd }) {
      const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [type, setType] = useState("expense");
  const [category, setCategory] = useState("Food");
  const [error, setError] = useState("");

  const handleSubmit = (e) =>{
     e.preventDefault();

     if(title.trim() ===""){
      setError("Title khali nhi ho sakta. ")
      return;
     }
     if(Number(amount) <= 0){
      setError("Amount 0 se zyada hona chahiye.")
      return;
     }

     const isIncome = type === "income";
     const selected = categories.find((c)=>c.name === category);


     onAdd({
      title: title.trim(),
      amount: Number(amount),
      type,
      category: isIncome ? "Income" : category,
      icon: isIncome ? "💵" : selected.icon,
    });


    // form reset
    setTitle("");
    setAmount("");
    setError("");
  };

  
  return (
    <form onSubmit={handleSubmit} className="mb-10 rounded-2xl bg-white p-6 shadow">
       <h3 className="mb-4  text-xl font-bold text-slate-800">Add Transaction</h3>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div>
          <label htmlFor="title" className="mb-1 block text-sm  font-medium text-slate-600">
            Title
          </label>

          <input
          id="text"
          placeholder="e.g. Chai, Salary"
          value={title}
          onChange={(e)=>setTitle(e.target.value)}
          className={inputClass}
          />
        </div>

        <div>
          <label htmlFor="amount" className="mb-1 block text-sm font-medium text-slate-500">
             Amount (₹)
            </label>

            <input
            id="amount"
            type="number"
            placeholder="500"
            value={amount}
            onChange={(e)=> setAmount(e.target.value)}
            className={inputClass}
            />
        </div>
        
        <div>
          <label htmlFor="type" className="mb-1 block text-sm font-medium text-slate-600">
             Type
          </label>

          <select
          id="type"
          value={type}
          onChange={(e)=>setType(e.target.value)}
          className={inputClass}>
            <option value="expense">Expense</option>
            <option value="income">Income</option>
          </select>
        </div>
        {type === "expense" &&(
          <div>
            <label htmlFor="category" className="mb-1 block text-sm font-medium text-slate-600">
               Category
            </label>
            <select
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className={inputClass}
            >
              {categories.map((c) =>(
                <option key={c.name} value={c.name}>
                  {c.icon} {c.name}
                </option>
              ))}
            </select>
          </div>
        )}
      </div>
        {error && <p className="mt-3 text-sm font-medium text-red-500">⚠️ {error}</p>}
      <button 
      type="submit"
      className="mt-4 rounded-lg bg-indigo-600 px-5 py-2 text-sm font-semibold text-white transition hover:bg-indigo-800 active:scale-95">
       + Add Transaction
      </button>
    </form>
  );
}

export default ExpenseForm;