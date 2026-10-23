
  function SummeryCard( {title, amount, icon, gradient}) {
   return (
    <div className={`${gradient} rounded-2xl p-6 text-white shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-2xl`}>
           <div className="flex items-center justify-between">
            <p className="text-sm font-medium opacity-90"> {title}</p>
            <span className="text-3xl">{icon}</span>
           </div>
           <h2 className="mt-4 text-3xl font-bold">
            ₹{amount?.toLocaleString("en-IN")}
           </h2>
    </div>
  )
}
export default SummeryCard;
