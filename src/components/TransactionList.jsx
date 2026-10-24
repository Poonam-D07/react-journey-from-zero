import TransactionItem from "./TransactionItem";

function TransactionList( { transactions }) {
    if(transactions.length === 0){
  return (
    <div>
        <p>📭</p>
        <p>Koi transaction nahi mila</p>
        <p>Pehla expense add karke shuru karo.</p>
    </div>
  );
}
return(
    <div>
        {transactions.map((t)=> (
           <TransactionItem 
        key={t.id}
        icon={t.icon}
        title={t.title}
        category={t.category}
        date={t.date}
        amount={t.amount}
        type = {t.type}
        />  
        ))}
       
    </div>
);
}
export default  TransactionList;