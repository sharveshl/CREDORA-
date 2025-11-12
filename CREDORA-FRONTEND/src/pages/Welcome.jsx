    import { useState, useEffect } from "react";
    import { useNavigate } from "react-router-dom";
    import mainLogo from "../assets/Main Logo.png";
    import welcomeLogo1 from "../assets/Welcome page logo 1.png";
    import welcomeLogo2 from "../assets/Welcome page logo 2.png";
    import welcomeLogo3 from "../assets/Welcome page logo 3.png";

    export default function Welcome() {
    // Replace these with your local asset imports later
    const images = [mainLogo, welcomeLogo1, welcomeLogo2, welcomeLogo3];

    const [current, setCurrent] = useState(0);

    const navigate = useNavigate();

    // Auto-slide every 3 seconds
    useEffect(() => {
        const timer = setInterval(() => {
        setCurrent((prev) => (prev + 1) % images.length);
        }, 3000);
        return () => clearInterval(timer);
    }, [images.length]);

    return (
        <div className="min-h-screen flex flex-col items-center justify-between bg-white text-black px-6 py-10 overflow-hidden">
        {/* Header / App Name */}
        <div className="text-center mt-10">
            <h1
            className="text-5xl font-extrabold tracking-tight mb-2"
            style={{ color: "#2a3fc7" }}
            >
            CREDORA
            </h1>
            <p className="text-gray-600 text-base font-medium">
            Smart Finance Tracker
            </p>
        </div>

        {/* Image Slider */}
        <div className="relative w-full max-w-[380px] h-[240px] mt-10 overflow-hidden rounded-2xl">
            {images.map((src, index) => (
            <img
                key={src}
                src={src}
                alt={`slide-${index}`}
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
                index === current ? "opacity-100" : "opacity-0"
                }`}
            />
            ))}
        </div>

        {/* Welcome Text */}
        <div className="text-center mt-10 px-3">
            <h2 className="text-2xl font-semibold mb-2" style={{ color: "#2a3fc7" }}>
            Welcome to CREDORA 👋
            </h2>
            <p className="text-gray-700 text-sm leading-relaxed">
            Take control of your finances. Track expenses, manage your budget, and
            achieve your goals effortlessly.
            </p>
        </div>

        {/* Get Started Button */}
        <div className="w-full max-w-[380px] mt-12 mb-10">
            <button
            type="button"
            className="w-full py-3.5 rounded-xl text-white font-semibold text-lg shadow-md hover:shadow-lg transition-all"
            style={{
                backgroundColor: "#2a3fc7",
            }}
            onClick={() => navigate("/login")}
            >
            Get Started
            </button>
        </div>
        </div>
    );
    }
