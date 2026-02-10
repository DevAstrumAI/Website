import React from "react";
import { Heart, Shield, Zap, Trophy, Star } from "lucide-react";

import { FcMindMap } from "react-icons/fc";
import { GiHoleLadder } from "react-icons/gi";
import { FaUsersLine } from "react-icons/fa6";
import { FaRunning } from "react-icons/fa";

export default function CoreValues() {
  const values = [
    {
      icon: Heart,
      title: "Earn Customer Love",
      description:
        "We are deeply passionate about our customers and fully devoted to their success. We understand that trust and confidence are earned through every interaction, every delivery, and every problem we solve together.",
    },
    {
      icon: FcMindMap,
      title: "Intellectual Rigor, Open Mind",
      description:
        "We reason with clear, verifiable hypotheses and continuously gather data to validate or challenge them. We ask tough questions, test assumptions, and pursue truth with intellectual honesty and curiosity.",
    },
    {
      icon: GiHoleLadder,
      title: "Ambition Shapes Reality",
      description:
        "We set exceptionally high standards and pursue bold goals. We expect short-term setbacks, but we view failure as a guide that accelerates learning and ultimately drives greater success.",
    },
    {
      icon: FaUsersLine,
      title: "Team Flow",
      description:
        "We are energized by each other's achievements and actively invest in one another with care, candor, and focus. Ideas flow freely because we treat each other with deep trust and genuine respect.",
    },
    {
      icon: Shield,
      title: "Ownership Is The Job",
      description:
        "We think and act like owners. We embrace expansive responsibility, believe in our power to drive meaningful outcomes, and take initiative to create lasting change.",
    },
    {
      icon: Zap,
      title: "Run Through Walls",
      description:
        "We are undeterred by obstacles and charge toward solutions. We step beyond comfort zones, rigorously test ideas, and do the hard work required to solve difficult problems effectively.",
    },
    {
      icon: FaRunning,
      title: "Why Not Faster?",
      description:
        "We operate with agility and clear intent, making swift two-way-door decisions that enable rapid learning, quick adaptation, and ultimately greater progress and impact.",
    },
    {
      icon: Trophy,
      title: "Results Speak Loudest",
      description:
        "We define goals with precision and evaluate outcomes objectively. At the end of the day, we hold ourselves accountable to the results we deliver.",
    },
    {
      icon: Star,
      title: "Quality is Fractal",
      description:
        "Excellence appears at every level of the system — from the smallest detail to the broadest strategy. We believe quality compounds and scales through precision, care, and deliberate intention.",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Page Heading - Left Aligned */}
        <div className="mb-16 md:mb-24">
          <h2
            style={{ fontFamily: "'Gabarito', sans-serif" }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white uppercase"
          >
            Our Core{" "}
            <span className="bg-gradient-to-r from-purple-500 to-violet-600 bg-clip-text text-transparent">
              Principles
            </span>
          </h2>
        </div>
 
        {/* 2-column grid layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 lg:gap-x-20 gap-y-16 lg:gap-y-24">
          {values.map((value, index) => (
            <div key={index} className="flex flex-col items-start text-left">
              {/* 1. Icon */}
              <div className="mb-6">
                <value.icon
                  className="w-10 h-10 md:w-12 md:h-12 text-gray-300 drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]"
                  strokeWidth={1.5}
                />
              </div>

              {/* 2. Heading */}
              <h3
                style={{ fontFamily: "'Gabarito', sans-serif" }}
                className="text-2xl md:text-4xl font-bold text-gray-300 tracking-tight mb-4"
              >
                {value.title}
              </h3>

              {/* 3. Paragraph */}
              <p
                style={{ fontFamily: "'Outfit', sans-serif" }}
                className="text-gray-400 text-lg md:text-xl leading-relaxed font-normal"
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
