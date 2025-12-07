import { Home, PieChart, History, User, Mic } from "lucide-react";

export default function Dashboard() {
  const recentTransactions = [
    { id: 1, title: "Groceries", amount: -450, date: "Today" },
    { id: 2, title: "Salary", amount: 25000, date: "Yesterday" },
    { id: 3, title: "Electricity Bill", amount: -1200, date: "Yesterday" },
    { id: 4, title: "Snacks", amount: -80, date: "Today" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-indigo-100 to-blue-200 pt-6 pb-28 px-4 overflow-y-auto relative">

      {/* dotted background */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-[url('https://www.toptal.com/designers/subtlepatterns/patterns/dots.png')] opacity-20"></div>

      {/* Greeting */}
      <h2 className="text-xl font-bold text-gray-900">
        Welcome back, <span className="text-[#2a3fc7]">Sharvesh</span> 👋
      </h2>

      {/* Balance Card */}
      <div className="mt-4 bg-white rounded-3xl shadow-lg p-6 border border-gray-100">
        <p className="text-gray-500 text-sm">Current Balance</p>
        <h1 className="text-3xl font-bold text-gray-900 mt-1">₹ 12,450</h1>

        <p className="text-gray-400 text-xs mt-3">Account Holder</p>
        <p className="font-semibold text-[#2a3fc7]">Sharvesh</p>
      </div>

      {/* Income & Expense Buttons */}
      <div className="mt-5 flex gap-4">
        <button className="flex-1 bg-white border border-gray-200 rounded-2xl py-3 text-green-600 font-semibold shadow-md active:scale-95 transition">
          + Income
        </button>

        <button className="flex-1 bg-white border border-gray-200 rounded-2xl py-3 text-red-500 font-semibold shadow-md active:scale-95 transition">
          - Expense
        </button>
      </div>

      {/* Recent Transactions */}
      <h3 className="mt-6 text-lg font-semibold text-gray-800">
        Recent Transactions
      </h3>

      <div className="bg-white rounded-2xl p-4 shadow-md mt-3 border border-gray-100">
        {recentTransactions.map((t) => (
          <div
            key={t.id}
            className="flex items-center justify-between py-3 border-b last:border-b-0"
          >
            <div>
              <p className="font-semibold text-gray-900">{t.title}</p>
              <p className="text-gray-500 text-xs">{t.date}</p>
            </div>

            <p
              className={`font-bold ${
                t.amount < 0 ? "text-red-500" : "text-green-600"
              }`}
            >
              {t.amount < 0 ? "-" : "+"}₹{Math.abs(t.amount)}
            </p>
          </div>
        ))}
      </div>

      {/* Floating Mic Button (Mobile Perfect) */}
      <button
        className="fixed bottom-16 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-500 to-indigo-500 text-white p-5 rounded-full shadow-2xl active:scale-95 transition-all z-20"
      >
        <Mic size={28} />
      </button>

      {/* Bottom Navigation Bar */}
      <div className="fixed bottom-0 left-0 w-full bg-white rounded-t-3xl shadow-2xl border-t border-gray-200 py-3 px-8 flex justify-between items-center z-10">

        <button className="flex flex-col items-center text-[#2a3fc7] active:scale-90">
          <Home size={22} />
          <span className="text-xs">Home</span>
        </button>

        <button className="flex flex-col items-center text-gray-500 active:scale-90">
          <History size={22} />
          <span className="text-xs">History</span>
        </button>

        {/* Spacer for mic */}
        <div className="w-16"></div>

        <button className="flex flex-col items-center text-gray-500 active:scale-90">
          <PieChart size={22} />
          <span className="text-xs">Stats</span>
        </button>

        <button className="flex flex-col items-center text-gray-500 active:scale-90">
          <User size={22} />
          <span className="text-xs">Profile</span>
        </button>
      </div>
    </div>
  );
}
