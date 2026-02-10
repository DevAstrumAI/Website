// pages/Contact.tsx
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export default function Contact() {
  return (
    <div className="min-h-screen bg-black text-gray-100 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16 md:mb-20">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
            Contact{" "}
            <span className="bg-gradient-to-r from-purple-500 to-violet-600 bg-clip-text text-transparent">
              Us
            </span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
            We'd love to hear from you. Reach out with any questions,
            partnership ideas or just to say hello.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-12">
          {/* Top Cards – Call & Email */}
          <div className="grid sm:grid-cols-2 gap-6">
            {/* Call Us */}
            <div className="bg-gray-900/40 backdrop-blur-sm border border-gray-800/50 rounded-2xl p-6 hover:border-purple-500/40 transition-all group">
              <div className="w-14 h-14 rounded-xl bg-purple-900/20 flex items-center justify-center mb-5">
                <Phone className="w-7 h-7 text-purple-400 group-hover:text-purple-300 transition-colors" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Call Us</h3>
              <p className="text-gray-400">+44 7884 051872</p>
            </div>

            {/* Email Us */}
            <div className="bg-gray-900/40 backdrop-blur-sm border border-gray-800/50 rounded-2xl p-6 hover:border-purple-500/40 transition-all group">
              <div className="w-14 h-14 rounded-xl bg-purple-900/20 flex items-center justify-center mb-5">
                <Mail className="w-7 h-7 text-purple-400 group-hover:text-purple-300 transition-colors" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Email Us
              </h3>
              <p className="text-gray-400 break-all">info@astrumai.tech</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-900/40 backdrop-blur-sm border border-gray-800/50 rounded-2xl p-8 lg:p-10">
            <h3 className="text-2xl font-semibold text-white mb-8 text-center">
              Send Us a Message
            </h3>

            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm text-gray-400 mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="
                      w-full px-4 py-3 bg-gray-800/50 border border-gray-700 
                      rounded-lg focus:outline-none focus:border-purple-500/50 
                      text-white placeholder-gray-500 transition-colors
                    "
                    placeholder="Your name"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm text-gray-400 mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="
                      w-full px-4 py-3 bg-gray-800/50 border border-gray-700 
                      rounded-lg focus:outline-none focus:border-purple-500/50 
                      text-white placeholder-gray-500 transition-colors
                    "
                    placeholder="your@email.com"
                    required
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm text-gray-400 mb-2"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="
                    w-full px-4 py-3 bg-gray-800/50 border border-gray-700 
                    rounded-lg focus:outline-none focus:border-purple-500/50 
                    text-white placeholder-gray-500 transition-colors
                  "
                  placeholder="How can we help?"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm text-gray-400 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="
                    w-full px-4 py-3 bg-gray-800/50 border border-gray-700 
                    rounded-lg focus:outline-none focus:border-purple-500/50 
                    text-white placeholder-gray-500 resize-none transition-colors
                  "
                  placeholder="Your message here..."
                  required
                />
              </div>

              <button
                type="submit"
                className="
                  w-full py-4 bg-gradient-to-r from-purple-600 to-violet-600 
                  hover:from-violet-600 hover:to-purple-600 
                  text-white font-semibold rounded-xl 
                  transition-all duration-300 shadow-lg shadow-purple-900/30 
                  hover:shadow-xl hover:shadow-purple-700/50 hover:-translate-y-0.5
                "
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Bottom Cards – Office & Hours */}
          <div className="grid sm:grid-cols-2 gap-6">
            {/* Head Office */}
            <div className="bg-gray-900/40 backdrop-blur-sm border border-gray-800/50 rounded-2xl p-6 hover:border-purple-500/40 transition-all group">
              <div className="w-14 h-14 rounded-xl bg-purple-900/20 flex items-center justify-center mb-5">
                <MapPin className="w-7 h-7 text-purple-400 group-hover:text-purple-300 transition-colors" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Head Office
              </h3>
              <p className="text-gray-400">London, United Kingdom</p>
            </div>

            {/* Opening Hours */}
            <div className="bg-gray-900/40 backdrop-blur-sm border border-gray-800/50 rounded-2xl p-6 hover:border-purple-500/40 transition-all group">
              <div className="w-14 h-14 rounded-xl bg-purple-900/20 flex items-center justify-center mb-5">
                <Clock className="w-7 h-7 text-purple-400 group-hover:text-purple-300 transition-colors" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Opening Hours
              </h3>
              <p className="text-gray-400">
                Mon – Sat: 9:00 AM – 6:00 PM
                <br />
                <span className="text-gray-500 text-sm">(UK Time)</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
