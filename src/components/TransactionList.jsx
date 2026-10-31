import TransactionItem from "./TransactionItem";

function TransactionList( { transactions, onDelete, onEdit }) {
    if(transactions.length === 0){
  return (
    <div className="py-12 text-center">
        <p className="text-5xl">📭</p>
        <p className="mt-3 font-semibold text-slate-700">Koi transaction nahi mila</p>
        <p className="text-sm  text-slate-500">Naya expense add karke dekho</p>
    </div>

  );
}
return(
    <div className="divide-y divide-slate-200">
        {transactions.map((t)=> (
           <TransactionItem 
        key={t.id}
        id={t.id}
        icon={t.icon}
        title={t.title}
        category={t.category}
        date={t.date}
        amount={t.amount}
        type = {t.type}
          onDelete={onDelete}
          onEdit={onEdit}
        />  
        ))}
       
    </div>
);
}
export default  TransactionList;