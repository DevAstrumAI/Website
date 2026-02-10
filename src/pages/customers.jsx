import React from "react";
import Solutions from "../components/customers/solutions.jsx";
import HowWeWork from "../components/customers/howWeWork.jsx";
import OurExperties from "../components/customers/ourExperties.jsx";

// Import your saved logo icons from assets
import cohere from "../assets/cohere.png";
import adept from "../assets/adept.png";
import meta from "../assets/meta.png";
import cisco from "../assets/cisco.png";

export default function Customers() {
  const logos = [
    { src: cohere, alt: "Cohere", name: "cohere" },
    { src: adept, alt: "Adept", name: "Adept" },
    { src: meta, alt: "Meta", name: "Meta" },
    { src: cisco, alt: "Cisco", name: "cisco" },
  ];

  return (
    <div className="bg-gray-950">
      {/* Customers Intro + Logos */}
      <section className="py-20 md:py-28 border-t border-gray-800/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Heading + Paragraph */}
          <div className="text-center mb-16 md:mb-20">
            <h2
              style={{ fontFamily: "'Gabarito', sans-serif" }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white"
            >
              Customers
            </h2>

            <p
              style={{ fontFamily: "'Outfit', sans-serif" }}
              className="mt-6 text-lg md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
            >
              AstrumAI’s platform and products are engineered by AI specialists
              for AI specialists, enabling organizations to obtain massive
              volumes of unbiased, production-grade training data — delivered
              fast.
            </p>
          </div>

          {/* Logo Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 items-center justify-items-center">
            {logos.map((logo) => (
              <div
                key={logo.name}
                className="flex items-center justify-center transition-opacity duration-300"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="h-8 md:h-10 w-auto object-contain brightness-0 invert opacity-70 hover:opacity-100 transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Other Sections */}
      <div className="mt-20">
        <Solutions />
        <HowWeWork />
        <OurExperties />
      </div>

      {/* Final CTA – dark theme, no extra bg */}
      <section className="py-12 md:py-16 border-t border-gray-800/50">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2
            style={{ fontFamily: "'Gabarito', sans-serif" }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-8"
          >
            The future of your industry{" "}
            <span className="bg-gradient-to-r from-[#914FFC] to-violet-600 bg-clip-text text-transparent">
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
