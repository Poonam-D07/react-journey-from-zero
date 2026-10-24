
 function Button({ text, color}) {
      const bgClass = color === 'red' ? 'bg-red-600 hover:bg-red-700' : 'bg-blue-600 hover:bg-blue-700';

  return (
    <div>
    <button className={`${bgClass} text-white font-semibold px-5 py-2.5 rounded-lg shadow-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 ${color === 'red' ? 'focus:ring-red-500' : 'focus:ring-blue-500'}`}>
                {text}
            </button> 
    
    </div>
        )
}

export default Button;