import { useEffect, useState } from "react";



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

  function ExpenseForm({ onAdd, editItem, isEditing, onUpdate, onCancel }) {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [type, setType] = useState("expense");
  const [category, setCategory] = useState("Food");
  const [error, setError] = useState("");
  const [date, setDate] = useState("");
 
  useEffect(() => {
    if(isEditing && editItem){
      setTitle(editItem.title);
      setAmount(editItem.amount.toString());
      setType(editItem.type);
      setCategory(editItem.category === "Income" ? "Food" : editItem.category);
      setDate("");
    }
  }, [editItem, isEditing]);


  const getTodayDate = () =>{
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const day = String(today.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  }
  const resetForm = () => {
  setTitle("");
  setAmount("");
  setDate("");
  setError("");
};
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

    // 2. Agar user ne date chuni hai toh vahi use hogi, nahi toh aaj ki date chalegi
     const finalDate = date || (isEditing ? "" : getTodayDate());

     const transactionDate = {
        title: title.trim(),
        amount: Number(amount),
        type,
        category: isIncome ? "Income" : category,
        icon: isIncome ? "💵" : selected.icon,
      date: finalDate,
     };

      // 5. IF-ELSE LOGIC: Agar edit mode hai toh onUpdate chalao, nahi toh onAdd // CHANGED
    if (isEditing) {
      onUpdate(transactionDate);
    } else {
      onAdd(transactionDate);
    }


     
  setTitle("");
  setAmount("");
  setDate("");
  setError("");
  resetForm();
  };

  
  return (
    <form onSubmit={handleSubmit} className="mb-10 rounded-2xl bg-white p-6 shadow">
       <h3 className="mb-4  text-xl font-bold text-slate-800">
       {isEditing ? "✏️ Edit Transaction" : "Add Transaction"}
      </h3>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">

        <div>
          <div>
              {/* Title Input */}
          <label htmlFor="title" className="mb-1 block text-sm  font-medium text-slate-600">
            Title
          </label>
           {/* Live Character Counter */}
           <span className="text-xs text-slate-400">
            {title.length}/30
           </span>
            </div>
          <input
          id="title"
          placeholder="e.g. Chai, Salary"
          value={title}
          onChange={(e)=>setTitle(e.target.value)}
          className={inputClass}
          maxLength={30}  // It will not allow the user to type beyond 30 characters.
          />
        </div>

        <div>
          <label htmlFor="amount" className="mb-7 block text-sm font-medium text-slate-500">
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
             {/* Type Select */}
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

         {/* 3. Naya Date Input Block */}
         <div>
          <label htmlFor="date" className="mb-1 block text-sm font-medium text-slate-600">
            Date
          </label>
          <input 
          id="date"
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className={inputClass}
          />
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
      className={`mt-4 rounded-lg px-5 py-2 text-sm font-semibold text-white transition active:scale-95 ${
        isEditing ? "bg-green-600 hover:bg-green-800" : "bg-indigo-600 hover:bg-indigo-800"
      }`}>
      {isEditing ? "✔ Update Transaction" : "+ Add Transaction"}
      </button>

       {isEditing && (
        <button
          type="button"
          onClick={() => { onCancel(); resetForm(); }}
          className="ml-3 mt-4 rounded-lg bg-slate-200 px-5 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-300"
        >
          Cancel
        </button>
      )}
    </form>
  );
}

export default ExpenseForm;