import { useState } from "react";
import {
  Home,
  Clock,
  BarChart2,
  User,
  Plus,
  Mic,
} from "lucide-react"; // ✅ icon pack (install via: npm install lucide-react)

export default function Dashboard() {
  const userName = "Sharvesh"; // Replace with dynamic user data later
  const [transactions] = useState([
    { title: "Internet", date: "4 July 2024", amount: "$36.50" },
    { title: "House Rent", date: "1 July 2024", amount: "$1,800.00" },
    { title: "Dribble Monthly Plan", date: "28 Jun 2024", amount: "$12.00" },
    { title: "Car Repair", date: "26 Jun 2024", amount: "$150.00" },
    { title: "Utility Bills", date: "25 Jun 2024", amount: "$800.58" },
    { title: "Grocery", date: "22 Jun 2024", amount: "$74.30" },
    { title: "Electricity", date: "20 Jun 2024", amount: "$110.00" },
    { title: "Petrol", date: "18 Jun 2024", amount: "$45.00" },
    { title: "Netflix", date: "15 Jun 2024", amount: "$9.99" },
    { title: "Gym Membership", date: "12 Jun 2024", amount: "$30.00" },
  ]);

  return (
    <div className="min-h-screen bg-[#0b0c10] text-white flex flex-col justify-between pb-24">
      {/* Greeting */}
      <div className="px-6 pt-8">
        <h2 className="text-lg text-gray-400">Welcome back,</h2>
        <h1
          className="text-2xl font-bold tracking-tight"
          style={{ color: "#2a3fc7" }}
        >
          {userName}
        </h1>
      </div>

      {/* Balance Card */}
      <div className="px-6 mt-6">
        <div className="bg-gradient-to-r from-[#2a3fc7] to-[#1c2a8d] rounded-2xl p-5 shadow-lg">
          <div className="flex justify-between items-center mb-3">
            <div>
              <p className="text-gray-200 text-sm">Total Balance</p>
              <h2 className="text-3xl font-bold text-white mt-1">$90,000</h2>
            </div>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/0/04/Visa.svg"
              alt="Visa"
              className="w-12 h-12"
            />
          </div>
          <div className="text-gray-100 text-sm">
            <p>2352 5896 0011 8545</p>
            <p className="mt-2 font-medium">{userName}</p>
          </div>
        </div>
      </div>

      {/* Add Income / Expense Buttons */}
      <div className="flex gap-4 px-6 mt-6">
        <button
          className="flex-1 py-3 rounded-xl bg-gray-800 border border-gray-700 text-white font-medium hover:bg-gray-700 transition"
        >
          Add Income
        </button>
        <button
          className="flex-1 py-3 rounded-xl font-medium text-white hover:opacity-90 transition"
          style={{ backgroundColor: "#2a3fc7" }}
        >
          Add Expense
        </button>
      </div>

      {/* Transactions */}
      <div className="px-6 mt-8">
        <div className="flex justify-between items-center mb-3">
          <h2 className="text-lg font-semibold text-white">Transactions</h2>
          <button className="text-sm text-gray-400 hover:text-[#2a3fc7]">
            View All
          </button>
        </div>

        <div className="space-y-4">
          {transactions.slice(0, 10).map((tx, index) => (
            <div
              key={index}
              className="flex justify-between items-center bg-gray-900 p-4 rounded-xl"
            >
              <div>
                <h3 className="text-sm font-medium text-white">{tx.title}</h3>
                <p className="text-xs text-gray-400">{tx.date}</p>
              </div>
              <p className="font-semibold text-white">{tx.amount}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Navigation Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-gray-900 border-t border-gray-800 py-3 flex justify-around items-center">
        {/* Home */}
        <button className="flex flex-col items-center text-gray-400 hover:text-white">
          <Home className="w-6 h-6" />
          <span className="text-xs mt-1">Home</span>
        </button>

        {/* History */}
        <button className="flex flex-col items-center text-gray-400 hover:text-white">
          <Clock className="w-6 h-6" />
          <span className="text-xs mt-1">History</span>
        </button>

        {/* Mic (Center Unique Button) */}
        <div className="relative -top-5">
          <button
            className="p-4 rounded-full shadow-lg hover:scale-105 transition"
            style={{ backgroundColor: "#2a3fc7" }}
          >
            <Mic className="w-6 h-6 text-white" />
          </button>
        </div>

        {/* Analytics */}
        <button className="flex flex-col items-center text-gray-400 hover:text-white">
          <BarChart2 className="w-6 h-6" />
          <span className="text-xs mt-1">Analytics</span>
        </button>

        {/* Profile */}
        <button className="flex flex-col items-center text-gray-400 hover:text-white">
          <User className="w-6 h-6" />
          <span className="text-xs mt-1">Profile</span>
        </button>
      </div>
    </div>
  );
}
