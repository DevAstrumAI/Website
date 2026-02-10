import React from "react";
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
      features: [
        "HTML Code Generation",
        "Customization and Styling",
        "User-friendly Interface",
        "Editable Figma Components",
        "Dynamic Component Adjustment",
        "Live Preview",
      ],
      tech: "Tech Stack: React, TypeScript, Figma Plugin API, NLP Models",
      impact: "Impact: Reduced UI prototyping time by up to 70%.",
    },
    {
      icon: Mail,
      title: "MailGenius",
      subtitle:
        "AI-powered assistant for Outlook to streamline email composition and enhance communication.",
      description: "Fast, professional Outlook email generation.",
      features: [
        "Start Email Composition",
        "Intelligent Feedback",
        "Contextual Analysis",
        "Tone Adjustment",
        "Professional Refinement",
        "New Email Generation",
      ],
      tech: "Tech Stack: Django REST, React, Redux, Custom NLP Models",
      impact: "Impact: Increased user productivity by 50%.",
    },
    {
      icon: GraduationCap,
      title: "GradeWise (Webapp)",
      subtitle: "AI-Empowered Grading Assistant for Education",
      description: "Automated grading and feedback for educators.",
      features: [
        "Auto-Assessment",
        "Intelligent Feedback",
        "Question-Answering",
        "Sentiment Analysis",
      ],
      tech: "Tech Stack: React, Node.js, ML Models",
      impact: "Impact: Reduced grading time by 80%.",
    },
    {
      icon: Mic,
      title: "Deep-fake Audio Generation",
      subtitle:
        "LSTM and SV2TTS Models for Machine Learning-Based Synthesizers",
      description: "AI-powered text-to-speech and voice cloning.",
      features: [
        "LSTM-Based Sequence Model",
        "SV2TTS Vocoder",
        "Custom Voice Cloning",
      ],
      tech: "Tech Stack: TensorFlow, PyTorch, Librosa",
      impact: "Impact: MOS scores exceeding 4.0 in blind listening tests.",
    },
    {
      icon: Briefcase,
      title: "HR Automation Platform",
      subtitle: "Real-Time Voice Communication and Automated Assessment",
      description: "Automated evaluation for hiring.",
      features: [
        "Voice Call Integration",
        "Resume Scoring",
        "Interview Scoring",
        "Skill Assessment",
      ],
      tech: "Tech Stack: Node.js, WebSocket, Vue.js, Regression/Classification Models",
      impact: "Impact: Automated evaluation and real-time scoring for hiring.",
    },
    {
      icon: Linkedin,
      title: "Personalized LinkedIn Sales Navigator Automation",
      subtitle: "AI-Driven Lead Extraction and Engagement",
      description: "Automated LinkedIn lead extraction and outreach.",
      features: [
        "Automated Lead Extraction",
        "AI-Powered Lead Scoring",
        "Analytics Dashboard",
        "One-Click Messaging",
      ],
      tech: "Tech Stack: React, Node.js, ML Models",
      impact: "Impact: Automated lead engagement and campaign analytics.",
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-gray-950">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Title */}
        <h2
          style={{ fontFamily: "'Gabarito', sans-serif" }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-white text-center mb-16 md:mb-20 tracking-tight"
        >
          Our Solutions
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="
                group bg-gray-900/70 backdrop-blur-sm 
                border border-gray-800/50 rounded-2xl 
                p-6 md:p-8 overflow-hidden 
                transition-all duration-500 
                hover:border-purple-600/40 
                hover:shadow-xl hover:shadow-purple-900/20 
                hover:-translate-y-2
              "
            >
              {/* Icon */}
              <div className="mb-6">
                <div
                  className="
                  inline-flex items-center justify-center 
                  w-14 h-14 rounded-xl 
                  bg-gray-800/80 border border-gray-700 
                  group-hover:border-purple-500/50 
                  transition-colors duration-300
                "
                >
                  <solution.icon
                    className="w-7 h-7 text-purple-400 group-hover:text-purple-300 transition-colors"
                    strokeWidth={1.6}
                  />
                </div>
              </div>

              {/* Title */}
              <h3
                style={{ fontFamily: "'Gabarito', sans-serif" }}
                className="text-2xl md:text-3xl font-bold text-white mb-3"
              >
                {solution.title}
              </h3>

              {/* Subtitle */}
              <p
                style={{ fontFamily: "'Outfit', sans-serif" }}
                className="text-gray-400 text-base md:text-lg font-medium mb-4 leading-snug"
              >
                {solution.subtitle}
              </p>

              {/* Description */}
              <p
                style={{ fontFamily: "'Outfit', sans-serif" }}
                className="text-gray-300 text-sm md:text-base leading-relaxed mb-5"
              >
                {solution.description}
              </p>

              {/* Features */}
              <ul
                style={{ fontFamily: "'Outfit', sans-serif" }}
                className="space-y-2 text-gray-400 text-sm md:text-base mb-5"
              >
                {solution.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-purple-500 mr-2 mt-1">•</span>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Tech & Impact */}
              <div className="text-sm mt-auto">
                <p
                  style={{ fontFamily: "'Rubik', sans-serif" }}
                  className="font-medium bg-gradient-to-r from-purple-400 via-violet-400 to-purple-400 bg-clip-text text-transparent"
                >
                  {solution.tech}
                </p>

                <p
                  style={{ fontFamily: "'Outfit', sans-serif" }}
                  className="mt-1 text-violet-300/90 font-medium"
                >
                  {solution.impact}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
