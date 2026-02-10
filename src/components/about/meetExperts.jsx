import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Your image imports
import atif from "../../assets/atif.png";
import bilal from "../../assets/bilal.png";
import afifa from "../../assets/afifa.png";
import julien from "../../assets/julien.png";
import anna from "../../assets/anna.png";

const experts = [
  {
    name: "Atif Mehmood",
    title: "CEO, AstrumAI",
    image: atif,
    bio: "As the visionary founder and CEO of AstrumAI, Atif Mehmood leads the company's mission to revolutionize businesses through artificial intelligence. With a background in industry leadership and a passion for innovation, Atif has guided AstrumAI from a bold idea to a global force in AI-driven digital transformation. His commitment to excellence, client success, and ethical AI sets the standard for the entire team.",
  },
  {
    name: "Bilal Ahmed",
    title: "CTO, AstrumAI",
    image: bilal,
    bio: "As CTO, Bilal Ahmed architects AstrumAI's most advanced solutions, blending deep technical expertise with strategic vision. Bilal's experience spans AI, cloud, and enterprise software, enabling AstrumAI to deliver scalable, intelligent products for clients worldwide. He is dedicated to building high-performing teams and driving continuous innovation at every level.",
  },
  {
    name: "Afifa Javed",
    title: "COO & Co-Founder, AstrumAI",
    image: afifa,
    bio: "As the COO and Co-Founder of Astrum AI, Afifa leads the company's mission to ethically harness AI for human progress. With over a decade of research experience at the intersection of education, socio-economic development, and comparative practices across the Global South and North, she brings a deep understanding of how technology can drive equitable change. As COO, she combines strategic vision with operational rigor, ensuring Astrum AI's solutions are both innovative and responsibly designed to serve diverse communities. Her leadership is rooted in the belief that AI must be inclusive, accountable, and human-centric thus, bridging cutting-edge innovation with ethical responsibility.",
  },
  {
    name: "Julien Chassot, CFA",
    title: "CFO, AstrumAI",
    image: julien,
    bio: "As the CFO of AstrumAI, Julien Chassot leads the company's financial strategy with a focus on capital efficiency, risk discipline, and scalable growth. With a strong background in institutional finance, quantitative analytics, and treasury management, Julien brings rigor and strategic clarity to AstrumAI's financial decision-making. His experience across global financial institutions and corporate treasury environments enables him to align advanced technology initiatives with sound financial governance, supporting AstrumAI's long-term vision and sustainable expansion.",
  },
  {
    name: "Dr. Anna Losa",
    title: "Head of Sustainability, AstrumAI",
    image: anna,
    bio: "As Head of Sustainability at AstrumAI, Anna Losa combines extensive experience in ESG with a passion for leveraging advanced AI technologies for sustainable development. With in-depth knowledge of ESG reporting and practical expertise in integrating artificial intelligence with sustainability objectives, Anna leads the company's social and environmental responsibility strategy. Her deep understanding of ESG challenges and opportunities, paired with hands-on experience deploying AI, enables her to deliver innovative solutions and measurable value to clients in the context of sustainable growth.",
  },
];

export default function MeetExperts() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? experts.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === experts.length - 1 ? 0 : prev + 1));
  };

  const expert = experts[currentIndex];

  return (
    <section className="py-8 md:py-12 bg-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header Section - Left Aligned */}
        <div className="max-w-4xl mb-16 text-left">
          <h2
            style={{ fontFamily: "'Gabarito', sans-serif" }}
            className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-6 tracking-tight"
          >
            Talk to{" "}
            <span className="bg-gradient-to-r from-[#914FFC] via-purple-400 to-indigo-400 bg-clip-text text-transparent font-bold">
              Our Experts
            </span>
          </h2>
          <p
            style={{ fontFamily: "'Outfit', sans-serif" }}
            className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-3xl"
          >
            Turn your vision into a functional prototype with our MVP & PoC
            Development services. We help you build, test, and refine your
            product efficiently, minimizing risk and maximizing market
            potential.
          </p>
        </div>

        {/* Carousel Section */}
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
            {/* Expert Image */}
            <div className="md:col-span-5 lg:col-span-4">
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl group">
                <img
                  src={expert.image}
                  alt={expert.name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 hover:scale-105"
                />
              </div>
            </div>

            {/* Expert Bio */}
            <div className="md:col-span-7 lg:col-span-8 space-y-8 text-left">
              <div>
                <h3
                  style={{ fontFamily: "'Gabarito', sans-serif" }}
                  className="text-4xl md:text-5xl lg:text-7xl font-light text-white mb-4 tracking-tight"
                >
                  {expert.name}
                </h3>
                <p
                  style={{ fontFamily: "'Outfit', sans-serif" }}
                  className="text-xl md:text-2xl text-purple-400/80 font-medium"
                >
                  {expert.title}
                </p>
              </div>

              <p
                style={{ fontFamily: "'Outfit', sans-serif" }}
                className="text-gray-300 text-lg md:text-xl leading-relaxed max-w-3xl"
              >
                {expert.bio}
              </p>

              {/* In-Bio CTA */}
              <div className="pt-6">
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
                  Get free consultation
                </button>
              </div>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center gap-6 mt-16 overflow-hidden">
            <button
              onClick={prevSlide}
              className="w-12 h-12 flex items-center justify-center rounded-full border border-white/10 text-white hover:bg-white/10 transition-all duration-300"
              aria-label="Previous expert"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={nextSlide}
              className="w-12 h-12 flex items-center justify-center rounded-full border border-white/10 text-white hover:bg-white/10 transition-all duration-300"
              aria-label="Next expert"
            >
              <ChevronRight size={24} />
            </button>

            {/* Progress Dots */}
            <div className="flex gap-2 ml-4">
              {experts.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-1 rounded-full transition-all duration-300 ${
                    idx === currentIndex
                      ? "w-12 bg-[#914FFC]"
                      : "w-3 bg-gray-800"
                  }`}
                  aria-label={`Go to expert ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
