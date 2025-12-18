import { useNavigate } from "react-router-dom";
import { Home, PieChart, History, User, Mic } from "lucide-react";

export default function StatsPage() {
  const navigate = useNavigate();

  const summary = {
    income: 30000,
    expenses: 8500,
    balance: 21500,
  };

  const categories = [
    { name: "Food & Dining", amount: 2500, color: "bg-blue-500" },
    { name: "Bills & Utilities", amount: 3000, color: "bg-indigo-500" },
    { name: "Transport", amount: 1200, color: "bg-emerald-500" },
    { name: "Entertainment", amount: 800, color: "bg-purple-500" },
  ];

  const maxAmount = Math.max(...categories.map((c) => c.amount));

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-indigo-100 to-blue-200 pt-6 pb-28 px-4 overflow-y-auto relative">
      {/* dotted background */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-[url('https://www.toptal.com/designers/subtlepatterns/patterns/dots.png')] opacity-20" />

      {/* Header */}
      <h2 className="text-xl font-bold text-gray-900">
        Spending <span className="text-[#2a3fc7]">Insights</span>
      </h2>
      <p className="text-xs text-gray-500 mt-1">
        Overview of your income, expenses and categories.
      </p>

      {/* Summary Cards */}
      <div className="mt-4 grid grid-cols-3 gap-3 text-xs">
        <div className="bg-white rounded-2xl p-3 shadow border border-gray-100">
          <p className="text-[10px] text-gray-500">Income</p>
          <p className="text-sm font-bold text-emerald-600 mt-1">
            ₹ {summary.income.toLocaleString("en-IN")}
          </p>
        </div>
        <div className="bg-white rounded-2xl p-3 shadow border border-gray-100">
          <p className="text-[10px] text-gray-500">Expenses</p>
          <p className="text-sm font-bold text-red-500 mt-1">
            ₹ {summary.expenses.toLocaleString("en-IN")}
          </p>
        </div>
        <div className="bg-white rounded-2xl p-3 shadow border border-gray-100">
          <p className="text-[10px] text-gray-500">Balance</p>
          <p className="text-sm font-bold text-indigo-600 mt-1">
            ₹ {summary.balance.toLocaleString("en-IN")}
          </p>
        </div>
      </div>

      {/* Category Bars */}
      <div className="mt-5 bg-white rounded-3xl shadow-lg p-5 border border-gray-100">
        <p className="text-sm font-semibold text-gray-900 mb-3">
          By Category
        </p>
        {categories.map((cat) => {
          const widthPercent = (cat.amount / maxAmount) * 100;
          return (
            <div key={cat.name} className="mb-3 last:mb-0">
              <div className="flex justify-between text-[11px] mb-1">
                <span className="text-gray-700">{cat.name}</span>
                <span className="font-medium text-gray-900">
                  ₹ {cat.amount.toLocaleString("en-IN")}
                </span>
              </div>
              <div className="h-2 rounded-full bg-gray-100 overflow-hidden">
                <div
                  className={`h-2 rounded-full ${cat.color}`}
                  style={{ width: `${widthPercent}%` }}
                />
              </div>
            </div>
          );
        })}
      </div>

      {/* Floating Mic Button */}
      <button
        className="fixed bottom-16 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-500 to-indigo-500 text-white p-5 rounded-full shadow-2xl active:scale-95 transition-all z-20"
      >
        <Mic size={28} />
      </button>

      {/* Bottom Navigation Bar */}
      <div className="fixed bottom-0 left-0 w-full bg-white rounded-t-3xl shadow-2xl border-t border-gray-200 py-3 px-8 flex justify-between items-center z-10">
        <button
          className="flex flex-col items-center text-gray-500 active:scale-90"
          onClick={() => navigate("/dashboard")}
        >
          <Home size={22} />
          <span className="text-xs">Home</span>
        </button>

        <button
          className="flex flex-col items-center text-gray-500 active:scale-90"
          onClick={() => navigate("/history")}
        >
          <History size={22} />
          <span className="text-xs">History</span>
        </button>

        {/* Spacer for mic */}
        <div className="w-16" />

        <button
          className="flex flex-col items-center text-[#2a3fc7] active:scale-90"
          onClick={() => navigate("/stats")}
        >
          <PieChart size={22} />
          <span className="text-xs">Stats</span>
        </button>

        <button
          className="flex flex-col items-center text-gray-500 active:scale-90"
          onClick={() => navigate("/profile")}
        >
          <User size={22} />
          <span className="text-xs">Profile</span>
        </button>
      </div>
    </div>
  );
}


