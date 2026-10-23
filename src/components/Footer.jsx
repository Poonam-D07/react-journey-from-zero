function Footer(){
    const year = new Date().getFullYear();

    return(
        <footer className="text-center text-slate-500 py-4 mt-48">
            @{year} Expense Tracker. Made with React !
        </footer>
    )
}
export default Footer;