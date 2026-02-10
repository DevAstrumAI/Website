import React, { useState } from "react";
import {
  Brain,
  Cloud,
  LineChart,
  MessageSquare,
  Database,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

export default function OurExperties() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    [
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
    ],
    [
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
    ],
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="py-20 md:py-28 bg-gray-950">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2
            style={{ fontFamily: "'Gabarito', sans-serif" }}
            className="text-4xl sm:text-5xl md:text-6xl text-white"
          >
            Our{" "}
            <span className="bg-gradient-to-r from-purple-600 to-violet-600 bg-clip-text text-transparent">
              Expertise
            </span>
          </h2>
        </div>

        {/* Slider */}
        <div className="relative overflow-hidden">
          {/* Slides */}
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {slides.map((slide, index) => (
              <div
                key={index}
                className="min-w-full grid grid-cols-1 md:grid-cols-3 gap-10"
              >
                {slide.map((item, idx) => (
                  <ExpertiseCard key={idx} item={item} />
                ))}
              </div>
            ))}
          </div>

          {/* Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 p-3 rounded-full border border-white/20 hover:bg-white/10 transition"
          >
            <ChevronLeft className="w-5 h-5 text-white" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 p-3 rounded-full border border-white/20 hover:bg-white/10 transition"
          >
            <ChevronRight className="w-5 h-5 text-white" />
          </button>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center mt-10 gap-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-2 rounded-full transition-all ${
                currentSlide === index
                  ? "w-10 bg-purple-500"
                  : "w-4 bg-gray-600"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

/* Card */
function ExpertiseCard({ item }) {
  return (
    <div className="flex flex-col items-start">
      <item.icon className="w-12 h-12 text-gray-300 mb-6" strokeWidth={1.5} />
      <h3
        style={{ fontFamily: "'Gabarito', sans-serif" }}
        className="text-2xl font-bold text-white mb-4"
      >
        {item.title}
      </h3>
      <p
        style={{ fontFamily: "'Outfit', sans-serif" }}
        className="text-gray-300 text-base leading-relaxed"
      >
        {item.description}
      </p>
    </div>
  );
}
