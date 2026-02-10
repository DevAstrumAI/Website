import React from "react";
import Solutions from "../components/portfolio/solutions.jsx";
import OurExperties from "../components/portfolio/ourExperties.jsx";
import animationRock from "../assets/animation-rock.png";

export default function Portfolio() {
  return (
    <div>
      {/* Portfolio Section */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row items-center">
          {/* Left Content */}
          <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
            <h1
              style={{ fontFamily: "'Gabarito', sans-serif" }}
              className="text-4xl sm:text-5xl md:text-6xl font-semi-bold text-white text-left mb-8 tracking-tight leading-[1.4]"
            >
              Our AI Solutions Portfolio
            </h1>

            <h2
              style={{ fontFamily: "'Outfit', sans-serif" }}
              className="mt-6 text-xl md:text-2xl text-gray-300 font-semibold leading-relaxed"
            >
              AstrumAI’s platform and products are engineered by AI specialists
              for AI specialists, enabling organizations to obtain massive
              volumes of unbiased, production-grade training data — delivered
              fast.
            </h2>

            <p
              style={{ fontFamily: "'Outfit', sans-serif" }}
              className="mt-4 text-lg md:text-xl text-gray-300 leading-relaxed"
            >
              The following are recent select solutions that we have delivered
              successfully for our customers who were interviewed, and who
              responded by giving us positive feedback about the services
              Techverx provided them with.
            </p>
          </div>

          {/* Right Content */}
          <div className="md:w-1/2 flex justify-center">
            <img
              src={animationRock}
              alt="Animation Rock"
              className="h-110 w-auto object-contain"
            />
          </div>
        </div>
      </section>

      {/* Other Sections */}
      <div className="mt-20">
        <Solutions />
        <OurExperties />
      </div>

      {/* Final CTA – dark theme, no extra bg */}
      <section className="py-12 md:py-16 border-t border-gray-800/50">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2
            style={{ fontFamily: "'Gabarito', sans-serif" }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semi-bold tracking-tight text-white mb-8"
          >
            The future of your industry{" "}
            <span className="bg-gradient-to-r from-[#914FFC] to-violet-600 font-bold bg-clip-text text-transparent">
              starts here
            </span>
          </h2>

          <p
            style={{ fontFamily: "'Outfit', sans-serif" }}
            className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed mb-10"
          >
            Contact our team to discuss your project or request a free AI
            consultation. Let's innovate together!
          </p>

          <button
            style={{ fontFamily: "'Rubik', sans-serif" }}
            className="
              inline-flex items-center px-10 py-5 
              bg-gradient-to-r from-[#914FFC] to-violet-600 
              hover:from-violet-600 hover:to-[#914FFC] 
              text-white font-semibold text-xl 
              rounded-full shadow-xl shadow-purple-900/40 
              transition-all duration-500 
              hover:shadow-2xl hover:shadow-purple-700/60 
              hover:-translate-y-1 active:scale-95
            "
          >
            Get in Touch
          </button>
        </div>
      </section>
    </div>
  );
}
