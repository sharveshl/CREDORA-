import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login:", { email, password });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#6a5af9] to-[#8366f4] px-4">
      {/* Outer mobile-like container */}
      <div className="w-full max-w-[400px] bg-white rounded-[40px] shadow-2xl overflow-hidden">
        {/* Top Gradient Header */}
        <div className="bg-gradient-to-b from-[#6a5af9] to-[#8366f4] pt-12 pb-8 text-center text-white relative">
          <h1 className="text-4xl font-extrabold tracking-tight">CREDORA</h1>
          <p className="text-white/80 mt-1 text-sm">Finance Tracker</p>

          {/* Get Started button (top right small) */}
          <button className="absolute top-6 right-6 text-sm bg-white/20 hover:bg-white/30 px-4 py-1.5 rounded-full border border-white/30 backdrop-blur-md">
            Get Started
          </button>
        </div>

        {/* Main Form Section */}
        <div className="p-8 pt-6">
          <h2 className="text-2xl font-semibold text-gray-900 mb-1">
            Welcome Back 👋
          </h2>
          <p className="text-gray-500 text-sm mb-8">
            Enter your credentials to continue
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm text-gray-600 mb-2 font-medium"
              >
                Email Address
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="you@example.com"
                className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-indigo-400 focus:outline-none"
              />
            </div>

            {/* Password */}
            <div>
              <label
                htmlFor="password"
                className="block text-sm text-gray-600 mb-2 font-medium"
              >
                Password
              </label>
              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  placeholder="••••••••"
                  className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-indigo-400 focus:outline-none pr-10"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((s) => !s)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-700"
                >
                  {showPassword ? "🙈" : "👁️"}
                </button>
              </div>
            </div>

            {/* Forgot Password */}
            <div className="flex justify-end">
              <a
                href="#"
                className="text-sm text-indigo-500 font-medium hover:underline"
              >
                Forgot password?
              </a>
            </div>

            {/* Sign In Button */}
            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold text-lg shadow-md hover:shadow-lg transition-all"
            >
              Sign In
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center my-8">
            <div className="flex-1 h-px bg-gray-200" />
            <p className="px-4 text-gray-400 text-sm">or sign in with</p>
            <div className="flex-1 h-px bg-gray-200" />
          </div>

          {/* Social Login */}
          <div className="flex gap-3">
            <button className="flex-1 py-3 border border-gray-200 rounded-xl flex items-center justify-center gap-2 text-gray-700 hover:bg-gray-50 transition">
              <img
                src="https://www.svgrepo.com/show/475656/google-color.svg"
                alt="Google"
                className="w-5 h-5"
              />
              Google
            </button>
            <button className="flex-1 py-3 border border-gray-200 rounded-xl flex items-center justify-center gap-2 text-gray-700 hover:bg-gray-50 transition">
              <img
                src="https://www.svgrepo.com/show/448234/facebook.svg"
                alt="Facebook"
                className="w-5 h-5"
              />
              Facebook
            </button>
          </div>

          {/* Sign Up Link */}
          <p className="text-center text-gray-500 text-sm mt-10">
            Don’t have an account?{" "}
            <a
              href="#"
              className="text-indigo-500 font-semibold hover:underline"
            >
              Sign up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
  