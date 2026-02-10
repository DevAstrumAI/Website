import React from "react";

const ShapingTomorrow = () => {
  return (
    <section className="w-full pb-16 pt-24 md:pb-24 md:pt-32 bg-black">
      <div className="mx-auto w-full max-w-6xl px-5">
        <div className="text-center">
          <div className="relative isolate mx-auto w-fit">
            <h1
              style={{ fontFamily: "'Josefin Sans', sans-serif" }}
              className="relative z-0 text-[150px] font-light tracking-tight text-white sm:text-6xl md:text-[200px]"
            >
              About Us
            </h1>
            <div
              aria-hidden="true"
              className="about-orb pointer-events-none absolute left-1/2 top-1/2 z-10 h-[220px] w-[220px] -translate-x-1/2 -translate-y-1/2 sm:h-[240px] sm:w-[240px] md:h-[320px] md:w-[320px]"
            />
          </div>

          <h2
            style={{ fontFamily: "'Gabarito', sans-serif" }}
            className="mt-10 text-3xl font-semibold tracking-tight leading-snug text-white sm:text-4xl md:text-5xl"
          >
            Shaping Tomorrow with <br />
            Intelligent Innovation by
            <span className="bg-gradient-to-r from-[#914FFC] to-purple-400 bg-clip-text text-transparent">
              {" "}
              AstrumAI
            </span>
          </h2>

          <p
            style={{ fontFamily: "'Outfit', sans-serif" }}
            className="mx-auto mt-6 max-w-4xl text-base leading-relaxed text-white/80 sm:text-lg md:text-[30px]"
          >
            We empower ambitious brands to unlock new possibilities, accelerate
            growth, and solve real-world challenges through cutting-edge AI and
            digital transformation. Experience the future—built by{" "}
            <span className="bg-gradient-to-r from-[#914FFC] to-purple-400 bg-clip-text font-bold text-transparent">
              {" "}
              AstrumAI
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default ShapingTomorrow;
