import { useState } from "react";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-indigo-100 to-blue-200 px-4 relative overflow-hidden">
      {/* Dotted Background Decoration */}
      <div className="absolute bottom-0 left-0 w-full h-40 bg-[url('https://www.toptal.com/designers/subtlepatterns/patterns/dots.png')] opacity-20"></div>

      {/* Login Card */}
      <div className="relative z-10 bg-white rounded-[30px] shadow-2xl p-8 w-full max-w-[380px] border border-gray-100">
        {/* Header */}
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-2">
          Log in
        </h2>
        <p className="text-center text-gray-500 text-sm mb-8">
          Log in with one of the following
        </p>

        {/* Social Buttons */}
        <div className="flex gap-3 mb-8">
          <button
            type="button"
            className="flex-1 flex items-center justify-center gap-2 py-3 border border-gray-200 rounded-xl hover:bg-gray-50 transition"
          >
            <img
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              alt="Google"
              className="w-5 h-5"
            />
            <span className="text-sm font-medium text-gray-700">Google</span>
          </button>
          <button
            type="button"
            className="flex-1 flex items-center justify-center gap-2 py-3 border border-gray-200 rounded-xl hover:bg-gray-50 transition"
          >
            <img
              src="https://www.svgrepo.com/show/494341/facebook.svg"
              alt="Facebook"
              className="w-5 h-5"
            />
            <span className="text-sm font-medium text-gray-700">Facebook</span>
          </button>
        </div>

        {/* Divider */}
        <div className="flex items-center mb-6">
          <div className="flex-1 h-px bg-gray-200" />
          <span className="px-3 text-gray-400 text-sm">or</span>
          <div className="flex-1 h-px bg-gray-200" />
        </div>

        {/* Login Form */}
        <form className="space-y-5">
          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Email*
            </label>
            <input
              id="email"
              type="email"
              placeholder="example@gmail.com"
              className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-gray-700 focus:ring-2 focus:ring-blue-400 focus:outline-none"
            />
          </div>

          {/* Password */}
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Password*
            </label>
            <div className="relative">
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-gray-700 focus:ring-2 focus:ring-blue-400 focus:outline-none pr-10"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                {showPassword ? "🙈" : "👁️"}
              </button>
            </div>
          </div>

          {/* Remember & Forgot */}
          <div className="flex items-center justify-between text-sm text-gray-600">
            <label className="flex items-center gap-2">
              <input type="checkbox" className="accent-blue-500 w-4 h-4" />
              <span>Remember info</span>
            </label>
            <a href="#" className="text-blue-500 font-medium hover:underline">
              Forgot Password?
            </a>
          </div>

          {/* Submit Button */}
          <button
            type="button"
            className="w-full bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-semibold py-3 rounded-xl hover:opacity-90 transition-all"
          >
            Log In
          </button>
        </form>

        {/* Sign Up */}
        <p className="text-center text-gray-500 text-sm mt-8">
          First time here?{" "}
          <a href="/signup" className="text-blue-600 font-semibold hover:underline">
            Sign up for free
          </a>
        </p>
      </div>
    </div>
  );
}
