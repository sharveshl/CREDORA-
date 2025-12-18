import { useNavigate } from "react-router-dom";
import { Home, PieChart, History, User, Mic } from "lucide-react";

export default function HistoryPage() {
  const navigate = useNavigate();

  const allTransactions = [
    { id: 1, title: "Groceries", amount: -450, date: "Today", category: "Food" },
    { id: 2, title: "Salary", amount: 25000, date: "Yesterday", category: "Income" },
    { id: 3, title: "Electricity Bill", amount: -1200, date: "This Week", category: "Bills" },
    { id: 4, title: "Snacks", amount: -80, date: "Today", category: "Food" },
    { id: 5, title: "Gym Membership", amount: -800, date: "This Week", category: "Health" },
    { id: 6, title: "Freelance", amount: 5000, date: "This Month", category: "Income" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-indigo-100 to-blue-200 pt-6 pb-28 px-4 overflow-y-auto relative">
      {/* dotted background */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-[url('https://www.toptal.com/designers/subtlepatterns/patterns/dots.png')] opacity-20" />

      {/* Header */}
      <h2 className="text-xl font-bold text-gray-900">
        Transaction <span className="text-[#2a3fc7]">History</span>
      </h2>
      <p className="text-xs text-gray-500 mt-1">
        View all your recent income and expenses.
      </p>

      {/* Filter Pills (UI only) */}
      <div className="mt-4 flex gap-2 text-xs">
        {["Today", "This Week", "This Month", "All"].map((label, idx) => (
          <button
            key={label}
            className={`px-3 py-1.5 rounded-full border text-[11px] ${
              idx === 3
                ? "bg-[#2a3fc7] text-white border-transparent"
                : "bg-white/80 text-gray-700 border-gray-200"
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      {/* List */}
      <div className="mt-4 bg-white rounded-3xl shadow-lg p-4 border border-gray-100">
        {allTransactions.map((t) => (
          <div
            key={t.id}
            className="flex items-center justify-between py-3 border-b last:border-b-0"
          >
            <div>
              <p className="font-semibold text-gray-900">{t.title}</p>
              <p className="text-[11px] text-gray-500">
                {t.date} • {t.category}
              </p>
            </div>
            <p
              className={`font-bold text-sm ${
                t.amount < 0 ? "text-red-500" : "text-green-600"
              }`}
            >
              {t.amount < 0 ? "-" : "+"}₹{Math.abs(t.amount)}
            </p>
          </div>
        ))}
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
          className="flex flex-col items-center text-[#2a3fc7] active:scale-90"
          onClick={() => navigate("/history")}
        >
          <History size={22} />
          <span className="text-xs">History</span>
        </button>

        {/* Spacer for mic */}
        <div className="w-16" />

        <button
          className="flex flex-col items-center text-gray-500 active:scale-90"
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


