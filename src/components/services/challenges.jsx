import React from "react";
import {
  Trophy,
  Share2,
  Scaling,
  MessageSquareText,
  BarChart3,
  ArrowRight,
} from "lucide-react";
import rocketImg from "../../assets/rocket-coming-out.png";

const ChallengeItem = ({ icon: Icon, title, description }) => (
  <div className="flex gap-5 group items-start">
    <div className="shrink-0 pt-1">
      <Icon className="w-8 h-8 text-gray-500 group-hover:text-cyan-400 transition-colors" />
    </div>
    <div className="space-y-2">
      <h4 className="text-lg font-semibold text-white leading-tight">
        {title}
      </h4>
      <p className="text-[15px] text-gray-400 leading-relaxed font-light max-w-[280px]">
        {description}
      </p>
    </div>
  </div>
);

const Challenges = () => {
  const challenges = [
    {
      icon: Trophy,
      title: "Limited Brand Visibility",
      description:
        "Without the right strategy, standing out in a crowded market is tough.",
    },
    {
      icon: Share2,
      title: "Unstructured Marketing Efforts",
      description:
        "Poorly planned campaigns waste resources and miss the mark.",
    },
    {
      icon: Scaling,
      title: "Scaling Roadblocks",
      description:
        "Growth requires streamlined operations and expert project management.",
    },
    {
      icon: MessageSquareText,
      title: "Inconsistent Content & Messaging",
      description:
        "A strong brand identity demands cohesive, high-impact content.",
    },
    {
      icon: BarChart3,
      title: "Lack of Data-Driven Decisions",
      description:
        "SEO and analytics-driven marketing help optimize every move.",
    },
  ];

  return (
    <section className="bg-black py-24 px-6 sm:px-12 relative overflow-hidden">
      {/* Decorative Rocket Image – kept subtle on dark bg */}
      <img
        src={rocketImg}
        alt="Rocket Animation"
        className="absolute -right-20 bottom-0 w-[500px] h-auto opacity-30 pointer-events-none grayscale-0 hidden lg:block"
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header – adjusted for dark theme */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-white mb-20 max-w-4xl">
          Startup{" "}
          <span className="bg-gradient-to-r from-[#914FFC] to-violet-600 bg-clip-text text-transparent">
            Challenges
          </span>{" "}
          We{" "}
          <span className="bg-gradient-to-r from-[#914FFC] to-violet-600 bg-clip-text text-transparent">
            Solve
          </span>
        </h2>

        {/* Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16 items-star text-left">
          {/* Challenges */}
          {challenges.map((item, index) => (
            <ChallengeItem key={index} {...item} />
          ))}

          {/* CTA Box */}
          <div className="lg:pt-4 flex items-center lg:justify-start">
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
              How we help
              <div className="w-6 h-6 rounded-full bg-white/15 flex items-center justify-center group-hover:bg-white/25 transition-colors">
                <ArrowRight className="w-4 h-4" />
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Challenges;
