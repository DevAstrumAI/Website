import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  ChevronDown,
  Bot,
  Database,
  Smartphone,
  Zap,
  Tag,
  MessageSquare,
  Server,
  Code,
  Globe,
  Layers,
  Box,
  Terminal,
  Cloud,
} from "lucide-react";

const servicesData = {
  "Software Development": [
    {
      label: "AI Product Development",
      href: "#ai-product",
      description: "End-to-end AI application lifecycle mgmt.",
      icon: Bot,
    },
    {
      label: "Blockchain Product Development",
      href: "#blockchain",
      description: "Secure decentralized ledger solutions.",
      icon: Database,
    },
    {
      label: "Web & Mobile Development",
      href: "#web-mobile",
      description: "Cross-platform digital experiences.",
      icon: Smartphone,
    },
  ],
  Solutions: [
    {
      label: "AI Automation",
      href: "#ai-automation",
      description: "Streamline workflows with intelligent agents.",
      icon: Zap,
    },
    {
      label: "White Label AI",
      href: "#white-label",
      description: "Branded AI solutions for your business.",
      icon: Tag,
    },
    {
      label: "Custom Company GPT",
      href: "#custom-gpt",
      description: "Tailored LLMs for enterprise needs.",
      icon: MessageSquare,
    },
  ],
};

const technologiesData = {
  Backend: [
    { label: "Python", href: "#python", icon: Terminal },
    { label: "NodeJS", href: "#nodejs", icon: Server },
    { label: "Django", href: "#django", icon: Layers },
    { label: "LangChain", href: "#langchain", icon: Box },
    { label: "AWS", href: "#aws", icon: Cloud },
    { label: "Solidity", href: "#solidity", icon: Code },
  ],
  Frontend: [
    { label: "ReactJS", href: "#reactjs", icon: Code },
    { label: "Angular", href: "#angular", icon: Layers },
    { label: "VueJS", href: "#vuejs", icon: Globe },
  ],
  Mobile: [
    { label: "Flutter", href: "#flutter", icon: Smartphone },
    { label: "ReactNative", href: "#react-native", icon: Smartphone },
    { label: "PWA", href: "#pwa", icon: Globe },
    { label: "Kotlin", href: "#kotlin", icon: Code },
  ],
  AI: [
    { label: "OpenAI", href: "#openai", icon: Bot },
    { label: "AIConsole", href: "#aiconsole", icon: Terminal },
    { label: "SeaChat", href: "#seachat", icon: MessageSquare },
  ],
};

const NavDropdown = ({ label, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button className="flex items-center gap-1 px-3 py-2 text-base font-medium text-white transition-colors hover:text-purple-400 font-jakarta group">
        {label}
        <ChevronDown
          className={`h-4 w-4 transition-transform duration-200 ${isOpen ? "rotate-180" : ""} group-hover:text-purple-400`}
        />
        <span
          className={`absolute bottom-0 left-0 w-full h-0.5 bg-purple-500 transform origin-left transition-transform duration-300 ${isOpen ? "scale-x-100" : "scale-x-0"}`}
        ></span>
      </button>

      {isOpen && (
        <div className="absolute left-1/2 -translate-x-1/2 top-full pt-6 z-50">
          <div className="bg-[#0f0f12] rounded-xl p-8 border border-white/10 shadow-2xl animate-in fade-in zoom-in-95 duration-200 ring-1 ring-white/5">
            {children}
          </div>
        </div>
      )}
    </div>
  );
};

const NavItem = ({ href, children }) => {
  const isExternal = href.startsWith("http") || href.startsWith("mailto");
  const isAnchor = href.startsWith("#");

  if (isAnchor) {
    return (
      <a
        href={href}
        style={{ fontFamily: "'Outfit', sans-serif" }}
        className="px-3 py-2 text-[15px] sm:text-base md:text-lg font-medium text-white/90 transition-colors hover:text-purple-400 font-jakarta"
      >
        {children}
      </a>
    );
  }

  return (
    <Link
      to={href}
      style={{ fontFamily: "'Outfit', sans-serif" }}
      className="px-3 py-2 text-[15px] sm:text-base md:text-lg font-medium text-white/90 transition-colors hover:text-purple-400 font-jakarta"
    >
      {children}
    </Link>
  );
};

const Navbar = () => {
  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-6xl">
      <div className="flex items-center justify-between rounded-lg bg-[#1a1a1e]/90 backdrop-blur-xl px-6 py-3 shadow-[0_0_20px_rgba(145,79,252,0.15)] border border-purple-500/30">
        <a href="/" className="flex items-center gap-2">
          <img
            src="/logo.jpg"
            alt="AstrumAI Logo"
            className="h-12 w-auto object-cover rounded-xl"
          />
          <span
            style={{ fontFamily: "'Rubik', sans-serif" }}
            className="text-2xl font-bold text-white"
          >
            AstrumAI
          </span>
        </a>

        <div className="flex items-center gap-1">
          <NavItem href="/">Home</NavItem>
          <NavItem href="/about">About</NavItem>

          <NavDropdown
            label={
              <span
                style={{ fontFamily: "'Outfit', sans-serif" }}
                className="text-[15px] sm:text-base md:text-lg font-medium"
              >
                Services
              </span>
            }
          >
            <div className="flex gap-12 w-[800px]">
              {Object.entries(servicesData).map(([category, items], index) => (
                <div key={category} className="flex-1">
                  <h3
                    style={{ fontFamily: "'Gabarito', sans-serif" }}
                    className="text-m font-bold text-gray-400 uppercase tracking-wider mb-6"
                  >
                    {category}
                  </h3>
                  <div className="space-y-6">
                    {items.map((item) => (
                      <DropdownCard key={item.label} {...item} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </NavDropdown>

          <NavDropdown
            label={
              <span
                style={{ fontFamily: "'Outfit', sans-serif" }}
                className="text-[15px] sm:text-base md:text-lg font-medium"
              >
                Technologies
              </span>
            }
          >
            <div className="grid grid-cols-4 gap-12 w-[1000px]">
              {Object.entries(technologiesData).map(([category, items]) => (
                <div key={category}>
                  <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-6">
                    {category}
                  </h3>
                  <div className="space-y-4">
                    {items.map((item) => (
                      <a
                        key={item.label}
                        href={item.href}
                        className="flex items-center gap-3 group"
                      >
                        <div className="p-2 rounded-lg bg-purple-500/10 text-purple-400 group-hover:bg-purple-500/20 group-hover:text-purple-300 transition-colors">
                          <item.icon className="w-4 h-4" />
                        </div>
                        <span className="text-gray-300 font-medium group-hover:text-purple-400 transition-colors text-sm">
                          {item.label}
                        </span>
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </NavDropdown>

          <NavItem href="/customers">Portfolio</NavItem>
          <NavItem href="#blog">Blog/TechTalk</NavItem>
          <NavItem href="#careers">Careers</NavItem>

          <a
            href="#contact"
            className="ml-4 rounded-lg border-2 border-purple-600 px-6 py-2.5 font-bold text-white/90 transition-all duration-300 hover:bg-violet-600 hover:text-white hover:border-violet-600 hover:shadow-lg hover:shadow-violet-600/50 font-jakarta"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

const DropdownCard = ({ href, label, description, icon: Icon }) => (
  <a
    href={href}
    className="group flex items-start gap-4 hover:bg-purple-500/10 p-3 -mx-3 rounded-xl transition-colors"
  >
    <div className="mt-1 p-2 rounded-lg bg-[#1a1a1e] border border-white/5 text-purple-400 group-hover:border-purple-500/30 group-hover:bg-purple-500/10 transition-all shadow-sm">
      <Icon className="w-5 h-5" />
    </div>
    <div>
      <div className="font-semibold text-white group-hover:text-purple-400 transition-colors">
        {label}
      </div>
      <p className="text-xs text-gray-400 group-hover:text-purple-300/80 mt-1 leading-relaxed">
        {description}
      </p>
    </div>
  </a>
);

export default Navbar;
