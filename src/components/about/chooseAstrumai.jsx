import React from "react";
import {
  TrendingUp,
  Users,
  Globe,
  Rocket,
  HeartHandshake,
  Cpu,
} from "lucide-react";

export default function ChooseAstrumai() {
  const reasons = [
    {
      icon: TrendingUp,
      title: "Proven Track Record",
      color: "text-purple-400",
      description:
        "Trusted by over 150+ clients across diverse industries worldwide. Successfully delivered 500+ projects, ranging from startups to enterprise-scale solutions. With a 95% client retention rate, our results speak for long-term value and reliability.",
    },
    {
      icon: Users,
      title: "Top-Tier Talent",
      color: "text-indigo-400",
      description:
        "A world-class team of engineers, designers, and strategists with deep industry expertise We combine technical excellence with creative thinking to build reliable, high-impact solutions. Every project is handled by specialists who understand both technology and business goals.",
    },
    {
      icon: Globe,
      title: "Global Reach",
      color: "text-violet-400",
      description:
        "Serving clients worldwide from our London, UK HQ and global development hubs. Our distributed teams allow us to work across time zones with speed and efficiency. This global presence helps us deliver consistent quality and round-the-clock collaboration.",
    },
    {
      icon: Rocket,
      title: "Agile & Scalable",
      color: "text-purple-500",
      description:
        "Solutions designed to adapt as your business grows and evolves. We follow agile methodologies to ensure faster delivery and continuous improvement. Whether you're a startup or an enterprise, our systems scale seamlessly with demand.",
    },
    {
      icon: HeartHandshake,
      title: "Long-Term Partnerships",
      color: "text-pink-400",
      description:
        "We believe in building relationships, not just delivering software. Our team stays invested beyond launch, offering continuous support and optimization. Your long-term success is the measure of our own.",
    },
    {
      icon: Cpu,
      title: "Cutting-Edge Technology",
      color: "text-cyan-400",
      description:
        "Always working with the latest tools, frameworks, and architectures. We future-proof your products by adopting proven, modern technologies. Innovation is built into everything we design and develop.",
    },
  ];

  return (
    <section className="py-8 md:py-12 bg-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Page Heading - Left Aligned */}
        <div className="mb-12 md:mb-16 text-left">
          <h2
            style={{ fontFamily: "'Gabarito', sans-serif" }}
            className="text-4xl sm:text-5xl md:text-6xl font-light tracking-tight text-white uppercase"
          >
            Why Choose{" "}
            <span className="bg-gradient-to-r from-[#914FFC] via-purple-400 to-indigo-400 bg-clip-text text-transparent font-bold">
              AstrumAI?
            </span>
          </h2>
        </div>

        {/* 2-column grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 lg:gap-x-20 gap-y-16 lg:gap-y-24">
          {reasons.map((item, index) => (
            <div key={index} className="flex flex-col items-start group">
              {/* 1. Icon */}
              <div className="mb-6">
                <item.icon
                  className="w-10 h-10 md:w-12 md:h-12 text-gray-300 drop-shadow-[0_0_8px_rgba(255,255,255,0.3)] transition-transform duration-300 group-hover:scale-110"
                  strokeWidth={1.5}
                />
              </div>

              {/* 2. Heading */}
              <h3
                style={{ fontFamily: "'Gabarito', sans-serif" }}
                className="text-2xl md:text-4xl font-bold text-white tracking-tight mb-4"
              >
                {item.title}
              </h3>

              {/* 3. Content */}
              {item.items ? (
                <div
                  style={{ fontFamily: "'Outfit', sans-serif" }}
                  className="flex flex-col gap-3 text-lg text-gray-400 font-normal text-left"
                >
                  {item.items.map((point, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-purple-500/60" />
                      {point}
                    </div>
                  ))}
                </div>
              ) : (
                <p
                  style={{ fontFamily: "'Outfit', sans-serif" }}
                  className="text-gray-400 text-lg md:text-xl leading-relaxed font-normal text-left"
                >
                  {item.description}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
