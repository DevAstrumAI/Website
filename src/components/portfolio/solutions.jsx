import React from "react";
import { Link } from "react-router-dom";
import {
  Rocket,
  Mail,
  GraduationCap,
  Mic,
  Briefcase,
  Linkedin,
} from "lucide-react";

export default function Solutions() {
  const solutions = [
    {
      icon: Rocket,
      title: "VisionCraft",
      subtitle: "Transform Text to Vision: Dive Deep with Explore VisionCraft",
      description: "Generate HTML UI from text in Figma using AI.",
      features:
        "VisionCraft generates clean HTML from text-based prompts, enabling rapid UI creation from Figma designs. It supports easy customization, editable components, and live previews to speed up prototyping.",
      tech: "Tech Stack: React, TypeScript, Figma Plugin API, NLP Models",
      impact: "Impact: Reduced UI prototyping time by up to 70%.",
    },
    {
      icon: Mail,
      title: "MailGenius",
      subtitle:
        "AI-powered assistant for Outlook to streamline email composition and enhance communication.",
      description: "Fast, professional Outlook email generation.",
      features:
        "MailGenius is an AI-powered assistant designed to enhance email composition within Microsoft Outlook. It offers features such as context-aware email generation, tone and style customization, and intelligent suggestions for subject lines and content. With MailGenius, users can create professional emails quickly, ensuring effective communication while saving time.",
      tech: "Tech Stack: Django REST, React, Redux, Custom NLP Models",
      impact: "Impact: Increased user productivity by 50%.",
    },
    {
      icon: GraduationCap,
      title: "GradeWise (Webapp)",
      subtitle: "AI-Empowered Grading Assistant for Education",
      description: "Automated grading and feedback for educators.",
      features:
        "GradeWise automates academic evaluation through auto-assessment and delivers intelligent feedback tailored to student responses. It supports question-answering and sentiment analysis to better understand student intent and engagement. With built-in performance analytics and plagiarism detection, educators gain deeper insights while ensuring academic integrity.",
      tech: "Tech Stack: React, Node.js, ML Models",
      impact: "Impact: Reduced grading time by 80%.",
    },
    {
      icon: Mic,
      title: "Deep-fake Audio Generation",
      subtitle:
        "LSTM and SV2TTS Models for Machine Learning-Based Synthesizers",
      description: "AI-powered text-to-speech and voice cloning.",
      features:
        "This solution leverages an LSTM-based sequence model combined with an SV2TTS vocoder to generate highly realistic speech. It enables custom voice cloning with fine-grained emotion and tone control, producing expressive and natural audio. Support for multiple languages allows scalable voice synthesis across global applications.",
      tech: "Tech Stack: TensorFlow, PyTorch, Librosa",
      impact: "Impact: MOS scores exceeding 4.0 in blind listening tests.",
    },
    {
      icon: Briefcase,
      title: "HR Automation Platform",
      subtitle: "Real-Time Voice Communication and Automated Assessment",
      description: "Automated evaluation for hiring.",
      features:
        "The HR Automation Platform integrates real-time voice calls with intelligent resume and interview scoring to streamline hiring. It evaluates candidates through structured skill assessments and generates AI-driven rankings based on role fit. A bias-aware evaluation framework ensures fair, data-driven decision-making throughout the recruitment process.",
      tech: "Tech Stack: Node.js, WebSocket, Vue.js, Regression/Classification Models",
      impact: "Impact: Automated evaluation and real-time scoring for hiring.",
    },
    {
      icon: Linkedin,
      title: "Personalized LinkedIn Sales Navigator Automation",
      subtitle: "AI-Driven Lead Extraction and Engagement",
      description: "Automated LinkedIn lead extraction and outreach.",
      features:
        "This platform automates lead extraction directly from LinkedIn and applies AI-powered lead scoring to prioritize high-value prospects. Users can manage campaigns using a centralized analytics dashboard and engage prospects efficiently through one-click personalized messaging, maximizing outreach efficiency.",
      tech: "Tech Stack: React, Node.js, ML Models",
      impact: "Impact: Automated lead engagement and campaign analytics.",
    },
  ];

  const projectsData = [
    {
      name: "VisionCraft",
      slug: "visioncraft",
    },
    {
      name: "MailGenius",
      slug: "mailgenius",
    },
    {
      name: "GradeWise",
      slug: "gradewise",
    },
    {
      name: "Deep-fake Audio Generation",
      slug: "deepfake-audio-generation",
    },
    {
      name: "HR Automation Platform",
      slug: "hr-automation-platform",
    },
    {
      name: "Personalized LinkedIn Sales Navigator Automation",
      slug: "personalized-linkedin-sales-navigator-automation",
    },
  ];

  return (
    <section className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Title */}
        <h2
          style={{ fontFamily: "'Gabarito', sans-serif" }}
          className="text-4xl sm:text-5xl md:text-6xl font-semi-bold text-white text-center mb-16 md:mb-20 tracking-tight"
        >
          Our{" "}
          <span className="bg-gradient-to-r from-purple-600 to-violet-600 bg-clip-text text-transparent">
            Solutions
          </span>
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 text-left">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="
            relative
            flex flex-col
            border border-gray-300
            rounded-lg
            p-6
            min-h-[420px] md:min-h-[460px] lg:min-h-[500px]
            transition-all duration-300
            hover:scale-105
            hover:shadow-lg
            hover:border-transparent
            hover:bg-gradient-to-r
            hover:from-purple-600
            hover:to-violet-600
            group
          "
            >
              {/* CONTENT WRAPPER */}
              <div className="flex-1 w-full">
                {/* Default View */}
                <div className="group-hover:hidden transition-opacity duration-300">
                  {/* Icon */}
                  <div className="mb-4">
                    <solution.icon
                      className="w-7 h-7 text-gray-300"
                      strokeWidth={1.6}
                    />
                  </div>

                  {/* Title */}
                  <h3
                    style={{ fontFamily: "'Gabarito', sans-serif" }}
                    className="text-2xl md:text-3xl font-bold text-white mb-2"
                  >
                    {solution.title}
                  </h3>

                  {/* Subtitle */}
                  <p
                    style={{ fontFamily: "'Outfit', sans-serif" }}
                    className="text-gray-400 text-base md:text-lg font-medium leading-snug"
                  >
                    {solution.subtitle}
                  </p>
                </div>

                {/* Hover View */}
                <div className="hidden group-hover:block transition-opacity duration-300">
                  {/* Icon */}
                  <div className="mb-3">
                    <solution.icon
                      className="w-6 h-6 text-white"
                      strokeWidth={1.6}
                    />
                  </div>

                  {/* Title */}
                  <h3
                    style={{ fontFamily: "'Gabarito', sans-serif" }}
                    className="text-xl md:text-2xl font-bold text-white mb-2"
                  >
                    {solution.title}
                  </h3>

                  {/* Description */}
                  <p
                    style={{ fontFamily: "'Outfit', sans-serif" }}
                    className="text-gray-100 text-sm md:text-base leading-relaxed mb-2"
                  >
                    {solution.description}
                  </p>

                  {/* Features */}
                  <p
                    style={{ fontFamily: "'Outfit', sans-serif" }}
                    className="text-gray-200 text-sm md:text-base leading-relaxed"
                  >
                    {solution.features}
                  </p>
                </div>
              </div>

              {/* BUTTON (always at bottom) */}
              <Link
                to={`/projects/${projectsData.find((project) => project.name === solution.title)?.slug}`}
                className="
              mt-6
              w-full
              rounded-md
              border border-white/30
              py-2
              text-sm font-semibold
              text-white
              text-center
              transition-all duration-300
              hover:bg-white hover:text-purple-700
              group-hover:bg-white group-hover:text-purple-700
            "
              >
                Click to View
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
