import React from "react";
import webDevImg from "../assets/web-dev.png";
import Challenges from "../components/services/challenges";
import OurServices from "../components/services/ourServices";

const Services = () => {
  return (
    <div className="min-h-screen text-white font-sans selection:bg-blue-100 selection:text-blue-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-16 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <div className="space-y-4 animate-in fade-in slide-in-from-left duration-1000 fill-mode-both">
            <div className="space-y-2">
              <h1 className="text-3xl md:text-4xl lg:text-5xl text-left font-light tracking-tight text-gray-300 leading-none">
                Empowering Your
              </h1>
              <h2 className="text-4xl md:text-5xl lg:text-6xl text-left font-bold tracking-tight bg-linear-to-r from-[#e11d48] via-[#9333ea] to-[#2563eb] bg-clip-text text-transparent leading-none">
                Business
              </h2>
              <div className="h-1 w-24 bg-[#0066cc] mt-4 mb-2"></div>
              <h3 className="text-xl md:text-2xl lg:text-3xl text-left font-semibold text-white pt-1 leading-tight">
                with Next-Gen AI Solutions
              </h3>
            </div>

            <p className="text-base md:text-lg text-white text-left leading-relaxed max-w-md font-light">
              We offer a wide range of AI-powered services to help your business
              grow, innovate, and lead in the digital era.
            </p>

            <div className="pt-2">
              <button
                style={{ fontFamily: "'Rubik', sans-serif" }}
                className="
              inline-flex items-center px-10 py-5 
              bg-gradient-to-r from-[#914FFC] to-purple-600 
              hover:from-purple-600 hover:to-[#914FFC] 
              text-white font-semibold text-xl 
              rounded-full shadow-xl shadow-purple-900/40 
              transition-all duration-500 
              hover:shadow-2xl hover:shadow-purple-700/60 
              hover:-translate-y-1 active:scale-95
            "
              >
                Hire us
                <svg
                  className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </button>
            </div>
          </div>

          <div className="relative animate-in fade-in zoom-in duration-1000 fill-mode-both delay-300 flex justify-center">
            <div className="absolute -inset-10 bg-linear-to-tr from-blue-50/10 to-purple-50/10 blur-3xl rounded-full -z-10"></div>
            <img
              src={webDevImg}
              alt="Next-Gen AI Solutions"
              className="w-auto h-130 drop-shadow-[0_20px_20px_rgba(0,0,0,0.3)] relative z-10"
            />
          </div>
        </div>
      </div>
      <Challenges />
      <OurServices />
    </div>
  );
};

export default Services;
