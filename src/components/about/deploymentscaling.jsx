import React from "react";
import { RiCustomSize } from "react-icons/ri";
import { MdDeveloperMode } from "react-icons/md";
import { BsDatabaseCheck } from "react-icons/bs";
import { CiCloudOn } from "react-icons/ci";
import { SiCssdesignawards } from "react-icons/si";
import { TbTransformFilled } from "react-icons/tb";

export default function DeploymentScaling() {
  const services = [
    {
      title: "Custom Software Development",
      description:
        "Scalable and robust applications tailored to business needs.",
      icon: RiCustomSize,
    },
    {
      title: "Web & Mobile App Development",
      description: "Seamless digital experiences across platforms.",
      icon: MdDeveloperMode,
    },
    {
      title: "AI & Data Engineering",
      description:
        "Intelligent solutions powered by machine learning and analytics.",
      icon: BsDatabaseCheck,
    },
    {
      title: "Cloud & DevOps",
      description:
        "Future-ready infrastructure for performance and scalability.",
      icon: CiCloudOn,
    },
    {
      title: "UI/UX Design",
      description:
        "User-centric designs that enhance engagement and satisfaction.",
      icon: SiCssdesignawards,
    },
    {
      title: "Digital Transformation & Advisory",
      description: "Strategy-driven tech solutions for business growth.",
      icon: TbTransformFilled,
    },
  ];

  return (
    <section className="relative pt-8 pb-24 md:pt-12 md:pb-32 bg-black overflow-hidden">
      {/* Optional subtle background pattern or glow */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(145,79,252,0.12)_0%,transparent_60%)]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8 ">
        {/* Intro text - Centered */}
        <div className="max-w-6xl lg:max-w-7xl mx-auto mb-24 md:mb-32 text-left">
          <h2
            style={{ fontFamily: "'Gabarito', sans-serif" }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-white leading-tight "
          >
            We offer{" "}
            <span className="bg-gradient-to-r from-[#914FFC] to-purple-400 bg-clip-text text-transparent font-bold">
              full-cycle software
            </span>{" "}
            development,
            <br className="sm:hidden" /> from discovery and design to{" "}
            <span className="bg-gradient-to-r from-[#914FFC] to-purple-400 bg-clip-text text-transparent font-bold">
              deployment
            </span>{" "}
            and{" "}
            <span className="bg-gradient-to-r from-[#914FFC] to-purple-400 bg-clip-text text-transparent font-bold">
              scaling
            </span>
          </h2>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-x-16 md:gap-y-20">
          {services.map((service, index) => (
            <div key={index} className="flex items-start gap-5 md:gap-6 group">
              <div className="shrink-0 pt-1.5">
                <service.icon className="w-10 h-10 md:w-12 md:h-12 text-gray-200 drop-shadow-[0_0_8px_rgba(255,255,255,0.3)] transition-all duration-500 group-hover:scale-110 group-hover:text-white" />
              </div>
              <div className="flex flex-col items-start text-left">
                <h3
                  style={{ fontFamily: "'Gabarito', sans-serif" }}
                  className="text-xl md:text-2xl font-bold text-white tracking-tight leading-tight"
                >
                  {service.title}
                </h3>
                <p
                  style={{ fontFamily: "'Outfit', sans-serif" }}
                  className="text-gray-400 text-sm md:text-base leading-relaxed font-light mt-2"
                >
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button - centered below cards */}
        <div className="mt-16 md:mt-20 text-center">
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
    </section>
  );
}
