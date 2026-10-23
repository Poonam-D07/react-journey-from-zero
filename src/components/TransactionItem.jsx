
 function TransactionItem( { icon, title, category, date, amount, type = "expense"}) {
    const isIncome = type ==="income";
  return (
    <div className="flex items-center justify-between py-4">
        <div className="flex items-center gap-4">
            <div className={`flex h-12 w-12 items-center justify-center rounded-full text-xl ${isIncome ? "bg-green-100": "bg-red-100"}`}>
                {icon}
            </div>

            <div>
                <p className="font-semibold text-slate-800">{title}</p>
                <p className="text-sm text-slate-500"> {category} • {date}</p>
            </div>
        </div>
        
        <p className={`font-bold ${isIncome ? "text-green-600" : "text-red-500"}`}>
            {isIncome ? "+" : "-"}₹{amount.toLocaleString("en-IN")}
        </p>
    </div>
  )
}
export default TransactionItem;
