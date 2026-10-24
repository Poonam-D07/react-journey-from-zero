import Button from "./components/Button";
import Card from "./components/Card";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import SummeryCard from "./components/SummeryCard";
import TransactionItem from "./components/TransactionItem";


 

function App() {
   

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
          amount={32500}
          subtitle="This month balance"
          icon="💼"
          gradient="bg-gradient-to-br from-indigo-500 to-purple-600" 
          />
          
          <SummeryCard
            title="Total Income"
            amount={50000}
            subtitle="This month income"
            icon="📈"
            gradient="bg-gradient-to-br from-emerald-500 to-teal-600"
          />
          
          <SummeryCard
            title="Total Expenses"
            amount={17500}
            subtitle="This month expenses"
            icon="📉"
            gradient="bg-gradient-to-br from-rose-500 to-orange-500"
          />
        </div>

        {/* Recent Transactions */}
        {/* <section className="mt-10 rounded-2xl bg-white p-6 shadow"> */}
          <Card>
          <h3 className="mb-2 text-xl font-bold text-slate-800">
             Recent Transactions
          </h3>

          <div className="divide-y divide-slate-100">
            <TransactionItem 
            icon="💵"
            title="Salary"
            category="Income"
            date="01 Jan"
            amount={50000}
            type="income"
            />

            <TransactionItem
              icon="🍔"
              title="Zomato Order"
              category="Food"
              date="03 Jan"
              amount={450}

            />

            <TransactionItem
              icon="🚕"
              title="Uber Ride"
              category="Travel"
              date="04 Jan"
              amount={320}
            />

              <TransactionItem
              icon="🛍️"
              title="Shopping"
              category="Lifestyle"
              date="05 Jan"
              amount={2800}
            />
          </div>
        {/* </section> */}
        </Card>
        
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
