import React from "react";
import Mission from "../components/careers/mission";
import CoreValues from "../components/careers/coreValues";
import Hiring from "../components/careers/hiring";
import OurBenefits from "../components/careers/ourBenefits";

const Careers = () => {
  return (
    <>
      <section className="pt-20 pb-20 md:pt-32 md:pb-24 overflow-hidden">
        {/* Background gradient */}

        {/* Colorful bubble/glass overlay (pure CSS) */}
        <div className="absolute inset-0 opacity-30 pointer-events-none">
          <div className="absolute top-20 left-20 w-64 h-64 rounded-full bg-linear-to-br from-purple-500/30 via-violet-500/20 to-pink-500/10 blur-3xl animate-pulse-slow" />
          <div className="absolute bottom-40 right-32 w-96 h-96 rounded-full bg-linear-to-tl from-indigo-500/25 via-purple-600/15 to-blue-500/10 blur-3xl animate-pulse-slow delay-1000" />
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-80 h-80 rounded-full bg-linear-to-r from-violet-500/20 via-purple-500/15 to-pink-500/10 blur-3xl animate-pulse-slow delay-2000" />
        </div>

        {/* Main content */}
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-semi-bold tracking-tight text-white leading-tight mb-8">
            AstrumAI is{" "}
            <span className="bg-gradient-to-r from-[#914FFC] via-violet-500 to-purple-600 bg-clip-text text-transparent">
              growing
            </span>
            <span className="inline-block w-[0.12em] h-[0.12em] rounded-full bg-linear-to-r from-[#914FFC] to-purple-600 ml-2" />
            <br />
            Grow{" "}
            <span className="bg-gradient-to-r from-[#914FFC] via-violet-500 to-purple-600 bg-clip-text text-transparent">
              with Us
            </span>
            <span className="inline-block w-[0.12em] h-[0.12em] rounded-full bg-linear-to-r from-[#914FFC] to-purple-600 ml-2" />
          </h1>

          <p
            style={{ fontFamily: "'Outfit', sans-serif" }}
            className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-12"
          >
            Join us as we develop reliable AI systems
            <br className="hidden sm:block" />
            for the world's most important decisions.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a
              href="/careers/open-positions"
              style={{ fontFamily: "'Rubik', sans-serif" }}
              className="
                inline-flex items-center px-5 py-2.5 md:px-7 md:py-3
                bg-gradient-to-r from-[#914FFC] to-violet-600 
                hover:from-violet-600 hover:to-[#914FFC] 
                text-white font-semibold text-sm md:text-base
                rounded-full shadow-lg shadow-purple-900/30 
                transition-all duration-300 
                hover:shadow-xl hover:shadow-purple-700/50 
                hover:-translate-y-0.5 active:scale-95
              "
            >
              View Open Positions →
            </a>
          </div>
        </div>
      </section>
      <Mission />
      <CoreValues />
      <OurBenefits />
      <Hiring />
    </>
  );
};

export default Careers;
