import React from "react";
import { ArrowRight } from "lucide-react";

const ServiceCard = ({ title, description }) => (
  <div className="group relative p-8 rounded-4xl border border-white/10 bg-white/5 hover:bg-white/10 transition-all duration-300 h-full flex flex-col justify-between">
    <div>
      <h3 className="text-2xl font-light text-white mb-4 leading-tight">
        {title}
      </h3>
      <p className="text-gray-400 text-sm leading-relaxed font-light">
        {description}
      </p>
    </div>
  </div>
);

const OurServices = () => {
  const services = [
    {
      title: "Go-to-Market Strategy",
      description:
        "Develop a winning roadmap to position your startup for success.",
    },
    {
      title: "Brand & Project Management",
      description: "Ensure consistent execution across all business functions.",
    },
    {
      title: "Campaign Development & Management",
      description:
        "Plan, launch, and optimize high-performing marketing campaigns.",
    },
    {
      title: "SEO & Performance Marketing",
      description:
        "Drive organic growth and targeted engagement with data-backed strategies.",
    },
    {
      title: "Content Creation & Storytelling",
      description:
        "Build a compelling brand voice with impactful content across platforms.",
    },
  ];

  return (
    <section className="bg-black py-16 px-6 sm:px-12 selection:bg-purple-500/30 selection:text-purple-100 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-white mb-16 max-w-4xl text-left">
          <span className="text-[#0066cc]">Solutions</span> Tailored for Your{" "}
          <span className="bg-linear-to-r from-[#914FFC] to-purple-400 bg-clip-text text-transparent font-bold">
            Success
          </span>
        </h2>

        {/* Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
          {/* Services Cards */}
          {services.map((item, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-[2rem] border border-white/10 bg-white/5 hover:bg-white/10 transition-all duration-300 min-h-[220px] flex flex-col justify-between"
            >
              <div>
                <h3
                  style={{ fontFamily: "'Gabarito', sans-serif" }}
                  className="text-2xl font-light text-white mb-4 leading-tight"
                >
                  {item.title}
                </h3>
                <p
                  style={{ fontFamily: "'Outfit', sans-serif" }}
                  className="text-gray-400 text-sm leading-relaxed font-normal"
                >
                  {item.description}
                </p>
              </div>
            </div>
          ))}

          {/* Hire Us Button centered in the last slot */}
          <div className="flex items-center justify-center h-full min-h-[220px]">
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
              <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                <ArrowRight className="w-4 h-4" />
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurServices;
