import React from "react";
import { Lightbulb, Users, Handshake, Target } from "lucide-react";
import { FaCogs } from "react-icons/fa";
import { FaHandshakeAngle } from "react-icons/fa6";

export default function CoreValues() {
  const values = [
    {
      icon: FaCogs,
      title: "Innovation",
      description: "We push the boundaries of what's possible with AI.",
      color: "text-[#914FFC]",
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "We believe the best solutions are built together.",
      color: "text-purple-400",
    },
    {
      icon: FaHandshakeAngle,
      title: "Integrity",
      description: "We're committed to transparency and ethical practices.",
      color: "text-indigo-400",
    },
    {
      icon: Target,
      title: "Excellence",
      description: "We strive for the highest quality in everything we do.",
      color: "text-violet-400",
    },
  ];

  return (
    <section className="py-16 md:py-16 bg-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Title - Left Aligned */}
        <div className="mb-20 md:mb-26 text-left">
          <h2
            style={{ fontFamily: "'Gabarito', sans-serif" }}
            className="text-4xl sm:text-5xl md:text-6xl font-light tracking-tight text-white uppercase"
          >
            Our Core{" "}
            <span className="bg-gradient-to-r from-[#914FFC] to-purple-400 bg-clip-text text-transparent font-bold">
              Values
            </span>
          </h2>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-16">
          {values.map((value, index) => (
            <div
              key={index}
              className="flex flex-col items-start text-left group"
            >
              {/* 1. Icon */}
              <div className="mb-6">
                <value.icon
                  className="
                    w-10 h-10 md:w-12 md:h-12 
                    text-gray-300 
                    drop-shadow-[0_0_8px_rgba(255,255,255,0.3)] 
                    transition-all duration-300 
                    group-hover:text-gray-100 group-hover:drop-shadow-[0_0_12px_rgba(255,255,255,0.5)]
                  "
                  strokeWidth={1.5}
                />
              </div>

              {/* 2. Heading */}
              <h3
                style={{ fontFamily: "'Gabarito', sans-serif" }}
                className="text-2xl md:text-3xl font-bold text-white tracking-tight mb-4"
              >
                {value.title}
              </h3>

              {/* 3. Description */}
              <p
                style={{ fontFamily: "'Outfit', sans-serif" }}
                className="text-gray-400 text-base md:text-lg leading-relaxed font-normal"
              >
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
