
  function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg"> 
        <div className="mx-auto flex max-w-5xl items-center justify-between py-6 px-4">
            <h1 className="text-2xl font-bold"> Expense Tracker</h1>
            <p className="hidden text-sm opacity-90 sm:block">Track every rupee</p>
        </div>
    </nav>
  );
}
export default Navbar;
