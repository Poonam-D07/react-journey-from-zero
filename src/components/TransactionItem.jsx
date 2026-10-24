
 function TransactionItem( { icon, title, category, date, amount, type = "expense"}) {
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
                        <span className="rounded-full bg-orange-100 px-2 py-0.5 text-xs font-medium text-orange-600">
                            High spend
                        </span>
                    )}
                </div>
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
