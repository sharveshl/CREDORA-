import { useState } from "react";
import { Home, PieChart, History, User, Mic, Camera } from "lucide-react";

export default function Profile() {
  const [username, setUsername] = useState("Sharvesh");
  const [profileImage, setProfileImage] = useState(null);

  const walletBalance = 12450; // in INR – can be wired to real data later

  const handleImageChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const imageUrl = URL.createObjectURL(file);
    setProfileImage(imageUrl);
  };

  const handleDownloadStatement = () => {
    // Placeholder – hook up to real PDF generation / API later
    alert("PDF statement download is not implemented yet.");
  };

  const handlePasswordChange = (e) => {
    e.preventDefault();
    // Placeholder – connect to backend to actually change password
    alert("Password change is not implemented yet.");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-indigo-100 to-blue-200 pt-6 pb-28 px-4 overflow-y-auto relative">
      {/* dotted background */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-[url('https://www.toptal.com/designers/subtlepatterns/patterns/dots.png')] opacity-20 pointer-events-none" />

      {/* Header */}
      <h2 className="text-xl font-bold text-gray-900">
        Profile{" "}
        <span className="text-[#2a3fc7]">
          &amp; Settings
        </span>
      </h2>

      {/* Profile Card */}
      <div className="mt-4 bg-white rounded-3xl shadow-lg p-6 border border-gray-100">
        <div className="flex items-center gap-4">
          <div className="relative">
            {profileImage ? (
              <img
                src={profileImage}
                alt="Profile"
                className="w-16 h-16 rounded-full object-cover border-2 border-indigo-400"
              />
            ) : (
              <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-indigo-500 to-blue-400 flex items-center justify-center text-white font-semibold text-xl border-2 border-indigo-300">
                {username?.[0]?.toUpperCase() || "U"}
              </div>
            )}

            <label className="absolute -bottom-1 -right-1 bg-white rounded-full p-1 shadow-md cursor-pointer active:scale-95 transition">
              <Camera size={16} className="text-indigo-600" />
              <input
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleImageChange}
              />
            </label>
          </div>

          <div className="flex-1">
            <p className="text-xs text-gray-400 uppercase tracking-wide">
              Username
            </p>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="mt-1 w-full bg-gray-50 border border-gray-200 rounded-xl px-3 py-2 text-sm font-semibold text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400"
            />
            <p className="mt-1 text-[10px] text-gray-500">
              This name will be shown across your dashboard.
            </p>
          </div>
        </div>
      </div>

      {/* Wallet Balance */}
      <div className="mt-4 bg-white rounded-3xl shadow-lg p-5 border border-gray-100">
        <p className="text-gray-500 text-xs">Wallet Balance</p>
        <h1 className="text-2xl font-bold text-gray-900 mt-1">
          ₹ {walletBalance.toLocaleString("en-IN")}
        </h1>
        <p className="text-[11px] text-gray-400 mt-2">
          This is your available balance in INR.
        </p>

        <button
          onClick={handleDownloadStatement}
          className="mt-4 w-full bg-gradient-to-r from-blue-500 to-indigo-500 text-white text-sm font-semibold rounded-2xl py-2.5 shadow-md active:scale-95 transition"
        >
          Download Statement (PDF)
        </button>
      </div>

      {/* Change Password */}
      <form
        onSubmit={handlePasswordChange}
        className="mt-4 bg-white rounded-3xl shadow-lg p-5 border border-gray-100 space-y-3"
      >
        <h3 className="text-sm font-semibold text-gray-900">
          Change Password
        </h3>

        <div className="space-y-1">
          <label className="text-[11px] text-gray-500">Current Password</label>
          <input
            type="password"
            className="w-full bg-gray-50 border border-gray-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400"
            placeholder="Enter current password"
          />
        </div>

        <div className="space-y-1">
          <label className="text-[11px] text-gray-500">New Password</label>
          <input
            type="password"
            className="w-full bg-gray-50 border border-gray-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400"
            placeholder="Enter new password"
          />
        </div>

        <div className="space-y-1">
          <label className="text-[11px] text-gray-500">
            Confirm New Password
          </label>
          <input
            type="password"
            className="w-full bg-gray-50 border border-gray-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400"
            placeholder="Re-enter new password"
          />
        </div>

        <button
          type="submit"
          className="mt-2 w-full bg-white border border-indigo-500 text-indigo-600 text-sm font-semibold rounded-2xl py-2.5 shadow-sm active:scale-95 transition"
        >
          Update Password
        </button>
      </form>

      {/* Floating Mic Button (same as Dashboard) */}
      <button
        className="fixed bottom-16 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-500 to-indigo-500 text-white p-5 rounded-full shadow-2xl active:scale-95 transition-all z-20"
      >
        <Mic size={28} />
      </button>

      {/* Bottom Navigation Bar */}
      <div className="fixed bottom-0 left-0 w-full bg-white rounded-t-3xl shadow-2xl border-t border-gray-200 py-3 px-8 flex justify-between items-center z-10">
        <button className="flex flex-col items-center text-gray-500 active:scale-90">
          <Home size={22} />
          <span className="text-xs">Home</span>
        </button>

        <button className="flex flex-col items-center text-gray-500 active:scale-90">
          <History size={22} />
          <span className="text-xs">History</span>
        </button>

        {/* Spacer for mic */}
        <div className="w-16" />

        <button className="flex flex-col items-center text-gray-500 active:scale-90">
          <PieChart size={22} />
          <span className="text-xs">Stats</span>
        </button>

        <button className="flex flex-col items-center text-[#2a3fc7] active:scale-90">
          <User size={22} />
          <span className="text-xs">Profile</span>
        </button>
      </div>
    </div>
  );
}


