import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  // Handle form changes
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // purely frontend right now
    if (form.password !== form.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    console.log("Signup details:", form);
    alert("Account created successfully (frontend only)!");
    navigate("/login");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white text-black px-6 py-10">
      <div className="w-full max-w-[400px] bg-white rounded-[30px] border border-gray-100 p-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1
            className="text-4xl font-extrabold tracking-tight mb-2"
            style={{ color: "#2a3fc7" }}
          >
            Sign Up
          </h1>
          <p className="text-gray-600 text-sm">Create your CREDORA account</p>
        </div>

        {/* Sign up Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Name */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Full Name*
            </label>
            <input
              id="name"
              name="name"
              type="text"
              value={form.name}
              onChange={handleChange}
              required
              placeholder="John Doe"
              className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-gray-700 focus:ring-2 focus:ring-[#2a3fc7] focus:outline-none"
            />
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Email Address*
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              required
              placeholder="you@example.com"
              className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-gray-700 focus:ring-2 focus:ring-[#2a3fc7] focus:outline-none"
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
            <input
              id="password"
              name="password"
              type="password"
              value={form.password}
              onChange={handleChange}
              required
              placeholder="Enter password"
              className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-gray-700 focus:ring-2 focus:ring-[#2a3fc7] focus:outline-none"
            />
          </div>

          {/* Confirm Password */}
          <div>
            <label
              htmlFor="confirmPassword"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Re-enter Password*
            </label>
            <input
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              value={form.confirmPassword}  
              onChange={handleChange}
              required
              placeholder="Re-enter password"
              className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-gray-700 focus:ring-2 focus:ring-[#2a3fc7] focus:outline-none"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3.5 rounded-xl text-white font-semibold text-lg transition-all hover:opacity-90"
            style={{
              backgroundColor: "#2a3fc7",
            }}
          >
            Create Account
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center my-8">
          <div className="flex-1 h-px bg-gray-200" />
          <span className="px-3 text-gray-400 text-sm">or sign up with</span>
          <div className="flex-1 h-px bg-gray-200" />
        </div>

        {/* Social Sign Up */}
        <div className="flex gap-3">
          <button
            type="button"
            className="flex-1 flex items-center justify-center gap-2 py-3 border border-gray-200 rounded-xl hover:bg-gray-50 transition"
          >
            <img
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              alt="Google"
              className="w-5 h-5"
            />
            <span className="text-sm font-medium text-gray-700">
              Google
            </span>
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
            <span className="text-sm font-medium text-gray-700">
              Facebook
            </span>
          </button>
        </div>

        {/* Footer Link */}
        <p className="text-center text-gray-500 text-sm mt-8">
          Already have an account?{" "}
          <button
            onClick={() => navigate("/login")}
            className="text-[#2a3fc7] font-semibold hover:underline"
          >
            Log in
          </button>
        </p>
      </div>
    </div>
  );
}
