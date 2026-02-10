import React from "react";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  MessageCircle,
} from "lucide-react";

export default function Footer() {
  const footerLinks = [
    "About",
    "Services",
    "Blog",
    "FAQ",
    "Contact",
    "Privacy Policy",
  ];

  const socialIcons = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
  ];

  return (
    <footer className="bg-black text-gray-400 py-12 md:py-16 border-t border-gray-800/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10 md:gap-6">
          {/* Left: Brand & Copyright */}
          <div className="flex flex-col items-center md:items-start space-y-2">
            <h2
              style={{ fontFamily: "'Gabarito', sans-serif" }}
              className="text-2xl md:text-3xl font-bold tracking-tighter text-white uppercase"
            >
              AstrumAI
            </h2>
            <p
              style={{ fontFamily: "'Outfit', sans-serif" }}
              className="text-sm md:text-base text-gray-500"
            >
              © 2026 AstrumAI. All rights reserved.
            </p>
          </div>

          {/* Center: Links */}
          <nav
            style={{ fontFamily: "'Outfit', sans-serif" }}
            className="flex flex-wrap justify-center gap-x-6 md:gap-x-8 gap-y-3 text-sm md:text-base font-medium text-white/90"
          >
            {footerLinks.map((link) => (
              <a
                key={link}
                href="#"
                className="hover:text-[#914FFC] transition-colors duration-300"
              >
                {link}
              </a>
            ))}
          </nav>

          {/* Right: Social & Chat Icon */}
          <div className="flex items-center gap-6 md:gap-8">
            <div className="flex items-center gap-4">
              {socialIcons.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-[#914FFC] transition-colors duration-300"
                  aria-label={label}
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
