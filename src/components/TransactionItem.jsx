
 function TransactionItem( { id, icon, title, category, date, amount, type = "expense", onDelete }) {
    const isIncome = type ==="income";
    const isHighSpend = !isIncome && amount>2000;
  return (
    <div className="flex items-center justify-between py-4 transition hover:bg-slate-50">
        <div className="flex items-center gap-4">
            <div className={`flex h-12 w-12 items-center justify-center rounded-full text-xl ${isIncome ? "bg-green-100": "bg-red-100"}`}>
                {icon}
            </div>

            <div>
                <div className="flex items-center gap-2">
                    <p className="font-semibold text-slate-800">{title}</p>
                    {isHighSpend && (
                        <span className="rounded-full bg-red-200 px-2 py-0.5 text-xs font-medium text-red-700">
                            High spend
                        </span>
                    )}
                </div>
                <div className="flex items-center gap-2 mt-1 text-sm text-slate-500">
                    <span className={`rounded-full px-2 py-0.5 text-xs font-medium ${
                        {
                            Food: "bg-orange-100 text-orange-700",
                            Travel: "bg-blue-100 text-blue-700",
                            Bills: "bg-red-100 text-red-700",
                            Income: "bg-green-100 text-green-700",
                            Lifestyle: "bg-purple-100 text-purple-700"    
                        }[category] || "bg-slate-100 text-slate-700"
                    }`}>
                        {category}
                    </span>
                    <span>• {date}</span>
                </div>
            </div>
        </div>
        <div className="flex items-center gap-4">
        <p className={`font-bold ${isIncome ? "text-green-600" : "text-red-500"}`}>
            {isIncome ? "+" : "-"}₹{amount.toLocaleString("en-IN")}
        </p>

        <button
            onClick={()=> onDelete(id)}
            aria-label={`Delete ${title}`}
            className="rounded-full p-2 text-slate-400 transition hover:bg-red-50 hover:text-red-600"
        >
            ✕
        </button>
        </div>
    </div>
  )
}
export default TransactionItem;
