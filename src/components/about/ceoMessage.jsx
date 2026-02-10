import React, { useRef, useState } from "react";
import { Play, Quote, Pause } from "lucide-react";
import CeoVideo from "../../assets/AI Solutions & Machine Learning Services - AstrumAI - Leading AI Development Company.mp4";

export default function CeoMessage() {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        {/* Top Section - Centered Header & Para */}
        <div className="text-center mb-16 space-y-4 text-left">
          <h2
            style={{ fontFamily: "'Gabarito', sans-serif" }}
            className="text-4xl md:text-5xl lg:text-6xl font-light text-white tracking-tight"
          >
            A Message from Our{" "}
            <span className="bg-gradient-to-r from-[#914FFC] to-purple-400 bg-clip-text text-transparent font-bold">
              CEO
            </span>
          </h2>
          <p
            style={{ fontFamily: "'Outfit', sans-serif" }}
            className="text-gray-400 text-lg md:text-xl lg:text-2xl leading-relaxed max-w-4xl text-left"
          >
            Hear directly from Atif Mehmood about our vision, mission, and
            commitment to transforming businesses through AI innovation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Video Card (Ratio Protected) */}
          <div className="relative w-full max-w-2xl mx-auto rounded-3xl overflow-hidden shadow-2xl bg-[#1a1528] border border-white/5 group">
            <video
              ref={videoRef}
              src={CeoVideo}
              className="w-full h-full object-cover aspect-video"
              controls={isPlaying}
              onPause={() => setIsPlaying(false)}
              onPlay={() => setIsPlaying(true)}
            />

            {!isPlaying && (
              <div
                className="absolute inset-0 bg-[#0f0a1e]/80 flex flex-col items-center justify-center cursor-pointer transition-opacity duration-300"
                onClick={togglePlay}
              >
                <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none select-none overflow-hidden">
                  <span className="text-[20rem] font-bold text-purple-500 blur-sm">
                    A
                  </span>
                </div>
                <div className="relative z-10 mb-6 group-hover:scale-110 transition-transform duration-300">
                  <div className="w-20 h-20 rounded-full bg-[#914FFC] flex items-center justify-center shadow-[0_0_30px_rgba(145,79,252,0.6)]">
                    <Play className="w-8 h-8 text-white fill-current ml-1" />
                  </div>
                </div>
                <div className="relative z-10 text-center">
                  <h3 className="text-2xl font-bold text-white font-jakarta">
                    Atif Mehmood
                  </h3>
                  <p className="text-purple-200 text-sm font-medium mt-1">
                    CEO & Founder, AstrumAI
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Right Column - Message/Quote */}
          <div className="relative pt-4 text-left">
            <div className="space-y-6">
              <blockquote className="text-xl md:text-2xl text-gray-300 italic font-medium leading-relaxed relative">
                <Quote className="absolute -top-6 -left-8 w-10 h-10 text-purple-500/10 rotate-180" />
                "At AstrumAI, we believe that artificial intelligence should be
                a force for good, empowering businesses to achieve what was once
                thought impossible. Our mission is to democratize AI technology
                and make it accessible to organizations of all sizes."
              </blockquote>
              <figcaption
                style={{ fontFamily: "'Gabarito', sans-serif" }}
                className="font-bold text-2xl md:text-3xl text-[#914FFC]"
              >
                — Atif Mehmood, CEO & Founder
              </figcaption>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
