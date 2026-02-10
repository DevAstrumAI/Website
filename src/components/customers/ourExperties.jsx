import React from "react";
import { Brain, Cloud, LineChart, MessageSquare, Database } from "lucide-react";

export default function OurExperties() {
  const expertise = [
    {
      icon: Brain,
      title: "Machine Learning",
      description:
        "Supervised, unsupervised, and deep learning for real-world business impact.",
    },
    {
      icon: Cloud,
      title: "Cloud AI",
      description: "Scalable AI deployments on AWS, Azure, and Google Cloud.",
    },
    {
      icon: LineChart,
      title: "Predictive Analytics",
      description:
        "Forecasting, anomaly detection, and data-driven decision support.",
    },
    {
      icon: MessageSquare,
      title: "NLP & Chatbots",
      description: "Conversational AI, text analysis, and language models.",
    },
    {
      icon: Database,
      title: "Data Engineering",
      description: "Pipelines, ETL, and data warehousing for AI readiness.",
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-transparent">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16 md:mb-20">
          <h2
            style={{ fontFamily: "'Gabarito', sans-serif" }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white"
          >
            Our{" "}
            <span className="bg-gradient-to-r from-purple-600 to-violet-600 bg-clip-text text-transparent">
              Expertise
            </span>
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
          {expertise.map((item, index) => (
            <div
              key={index}
              className="
                group relative bg-gray-900/60 backdrop-blur-md 
                border border-gray-800/50 rounded-2xl 
                p-8 md:p-10 overflow-hidden 
                transition-all duration-500 
                hover:border-purple-600/40 
                hover:shadow-xl hover:shadow-purple-900/30 
                hover:-translate-y-3
              "
            >
              {/* Icon */}
              <div className="mb-6 inline-flex items-center justify-center">
                <div
                  className="
                  p-4 rounded-xl 
                  bg-gradient-to-br from-gray-800 to-gray-900 
                  border border-gray-700/50 
                  group-hover:border-purple-500/40 
                  transition-colors duration-300
                "
                >
                  <item.icon
                    className="w-10 h-10 text-purple-400 group-hover:text-purple-300 transition-colors"
                    strokeWidth={1.5}
                  />
                </div>
              </div>

              {/* Title */}
              <h3
                style={{ fontFamily: "'Gabarito', sans-serif" }}
                className="text-2xl md:text-3xl font-bold text-white mb-4"
              >
                {item.title}
              </h3>

              {/* Description */}
              <p
                style={{ fontFamily: "'Outfit', sans-serif" }}
                className="text-gray-300 text-base md:text-lg leading-relaxed"
              >
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
