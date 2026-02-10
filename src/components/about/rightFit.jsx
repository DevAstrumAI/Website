import React from "react";

export default function RightFit() {
  return (
    <section className="py-8 bg-black">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[32px] bg-gradient-to-br from-gray-50 via-gray-100 to-gray-400 p-10 md:p-16 text-center shadow-xl">
          {/* Subtle light reflection overlay */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 right-0 w-80 h-80 bg-white rounded-full mix-blend-overlay filter blur-[60px]" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-gray-300 rounded-full mix-blend-multiply filter blur-[80px]" />
          </div>

          <div className="relative z-10 max-w-4xl mx-auto">
            <h2
              style={{ fontFamily: "'Gabarito', sans-serif" }}
              className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 leading-[1.2] md:leading-[1.15] tracking-tight mb-10"
            >
              We believe in <span className="font-semibold">The Right Fit</span>
              —ensuring that every client gets the right-sized team, the right
              technology, and the right process to drive success.
            </h2>

            <button
              style={{ fontFamily: "'Outfit', sans-serif" }}
              className="inline-flex items-center px-10 py-4 bg-gray-900 hover:bg-black text-white font-semibold text-lg rounded-full transition-all duration-300 hover:scale-105 shadow-lg shadow-black/20 active:scale-95"
            >
              Get free consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
