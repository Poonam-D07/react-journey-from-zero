import Button from "./components/Button";
import Card from "./components/Card";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import SummeryCard from "./components/SummeryCard";
import TransactionList from "./components/TransactionList";
import { transactions } from "./data/transaction";


 

function App() {
    const totalIncome = transactions
          .filter((t)=>t.type === "income")
          .reduce((sum, t) => sum + t.amount, 0);

    const totalExpense = transactions
          .filter((t) => t.type === "expense")
          .reduce((sum, t) => sum + t.amount , 0);

    const balance = totalIncome - totalExpense;

  return (
    <div className='min-h-screen bg-slate-200'>
      <Navbar />

      <main className="max-w-5xl mx-auto p-6">
        <div className="mb-8">
             <h2 className="text-3xl font-bold text-slate-800"> Dashboard</h2>
             <p className="text-slate-500"> Aapke paise ka poora hisaab , matr ek jagah</p>
             </div>

{/* Summary Cards */}
             <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <SummeryCard
          title="Total Balance"
          amount={balance}
          subtitle="This month balance"
          icon="💼"
          gradient="bg-gradient-to-br from-indigo-500 to-purple-600" 
          />
          
          <SummeryCard
            title="Total Income"
            amount={totalIncome}
            subtitle="This month income"
            icon="📈"
            gradient="bg-gradient-to-br from-emerald-500 to-teal-600"
          />
          
          <SummeryCard
            title="Total Expenses"
            amount={totalExpense}
            subtitle="This month expenses"
            icon="📉"
            gradient="bg-gradient-to-br from-rose-500 to-orange-600"
          />
        </div>

        {/* Recent Transactions */}
        {/* <section className="mt-10 rounded-2xl bg-white p-6 shadow"> */}
          <Card>
            <div className="mb-2 flex items-center justify-between">
          <h3 className=" text-xl font-bold text-slate-800">
             Recent Transactions
          </h3>

          <span className="rounded-full bg-indigo-100 px-3 py-1 text-sm font-medium text-indigo-600">
            {transactions.length} items
          </span>
             </div>

          <TransactionList transactions={transactions}/>
        {/* </section> */}
        </Card>
        
        {/* button */}
        <div className="flex items-center justify-center gap-8 p-6 ">
          <div className=" ">
                  <Button 
                text= "Create"
                color= "blue"
                />
          </div>
          <div>
                <Button 
                text= "Delete"
                color= "red"
                />
          </div>
        </div>
      </main>
   
      <Footer />
    </div>
  )
}

export default App;
