
 function Button({ text, color="blue", onClick}) {
const colors = {
    blue: "bg-blue-600 hover:bg-blue-700",
    red: "bg-red-600 hover:bg-red-700",
    green: "bg-green-600 hover:bg-green-700",
  };

  return (
   <button
   onClick={onClick}
   className={`${colors[color]} rounded-lg px-4 py-2 text-sm font-semibold text-white transition active:scale-95`}
   >
    {text}
   </button>
        );
}


export default Button;