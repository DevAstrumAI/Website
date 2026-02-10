import React from "react";

export default function Mission() {
  return (
    <section className=" py-16 md:py-20 overflow-hidden">
      {/* Subtle dark gradient overlay */}

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        {/* WHY + Mission Heading – tighter spacing */}
        <div className="text-center mb-10 md:mb-12 space-y-3">
          <p
            style={{ fontFamily: "'Gabarito', sans-serif" }}
            className="text-xs sm:text-sm font-bold tracking-[0.35em] text-gray-500 uppercase "
          >
            WHY
          </p>

          <h2
            style={{ fontFamily: "'Gabarito', sans-serif" }}
            className="text-4xl sm:text-5xl md:text-6xl font-semi-bold tracking-tight text-white leading-tight"
          >
            Our Mission
          </h2>
        </div>

        {/* Two-column paragraphs – reduced font & gap */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed max-w-6xl mx-auto">
          {/* Left column */}
          <div className="space-y-6 md:space-y-8 text-left">
            {/* Special paragraph – bigger & bolder */}
            <p
              style={{ fontFamily: "'Gabarito', sans-serif" }}
              className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-white leading-tight mb-6"
            >
              At AstrumAI, our mission is to develop reliable AI systems for the
              world’s most important decisions.
            </p>

            {/* Regular paragraph – normal size */}
            <p style={{ fontFamily: "'outfit', sans-serif" }}>
              Every industry across the private and public sectors is bringing
              AI to the center of operations. Yet despite this explosion of
              investment, there’s still no clear blueprint for organizations to
              move from pilot to profit.
            </p>
          </div>

          {/* Right column – unchanged */}
          <div className="space-y-6 md:space-y-8 text-left">
            <p style={{ fontFamily: "'outfit', sans-serif" }}>
              Our products for RLHF, image annotation, semantic segmentation, 3D
              point cloud annotation, and LiDAR & RADAR annotation are trusted
              by industry leaders and deliver world-class accuracy.
            </p>

            <p style={{ fontFamily: "'outfit', sans-serif" }}>
              Our proprietary{" "}
              <span className="bg-gradient-to-r from-[#914FFC] via-violet-500 to-purple-600 bg-clip-text text-transparent font-medium">
                Data Engine
              </span>{" "}
              powers the most advanced LLMs, generative models, and computer
              vision models with high-quality data. We then apply our experience
              partnering with leading AI companies building these models to help
              more organizations customize and{" "}
              <span className="bg-gradient-to-r from-[#914FFC] via-violet-500 to-purple-600 bg-clip-text text-transparent font-medium">
                Apply AI
              </span>{" "}
              in their organizations.
            </p>

            <p style={{ fontFamily: "'outfit', sans-serif" }}>
              And we encode our tradecraft into the{" "}
              <span className="bg-gradient-to-r from-[#914FFC] via-violet-500 to-purple-600 bg-clip-text text-transparent font-medium">
                AstrumAI GenerativeAI Platform
              </span>{" "}
              to help organizations successfully apply AI to their most critical
              business and government decisions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
