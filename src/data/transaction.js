export const transactions = [
  { id: 1, icon: "💵", title: "Salary", category: "Income", date: "01 Jan", amount: 50000, type: "income" },
  { id: 2, icon: "🍔", title: "Zomato Order", category: "Food", date: "03 Jan", amount: 450, type: "expense" },
  { id: 3, icon: "🚕", title: "Uber Ride", category: "Travel", date: "04 Jan", amount: 320, type: "expense" },
  { id: 4, icon: "🛍️", title: "Shopping", category: "Lifestyle", date: "05 Jan", amount: 2800, type: "expense" },
  { id: 5, icon: "💻", title: "Freelance Project", category: "Income", date: "07 Jan", amount: 12000, type: "income" },
  { id: 6, icon: "💡", title: "Electricity Bill", category: "Bills", date: "08 Jan", amount: 1800, type: "expense" },
  { id: 7, icon: "🎬", title: "Netflix", category: "Entertainment", date: "09 Jan", amount: 649, type: "expense" },
];

// Ye array of objects hai. Har object = ek transaction.
// export const (named export) ka matlab: dusri file import { transactions } from ... karegi. Dhyan do, yahan { } lagta hai, jabki export default mein nahi lagta.
// Har object mein unique id hai, jo hamari key banegi.