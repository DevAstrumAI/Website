import React from "react";

// Asset imports
import healthImg from "../../assets/Health & Wellbeing.webp";
import growthImg from "../../assets/Personal & Career Growth.webp";
import communityImg from "../../assets/Building Scale Community.webp";
import parentalImg from "../../assets/Parental Support.webp";

const benefits = [
  {
    title: "Health & Wellbeing",
    description:
      "Our holistic approach to supporting Scaliens includes comprehensive health coverage, dental and vision insurance, mental healthcare services, and more. PTO policies and accommodating schedules ensure you’ll get time off when you need it to relax and recharge. Note that our offerings may vary by region as we strive to respond to the unique needs of Scaliens around the glob.",
    image: healthImg,
  },
  {
    title: "Personal & Career Growth",
    description:
      "Continuously learn and grow through annual learning & development stipend, attending leadership breakfasts, manager training, speaker series, and joining an ERG.",
    image: growthImg,
  },
  {
    title: "Building Scale Community",
    description:
      "We welcome guests to our offices, and you can expect to see Scalien families and friends around. Join local happy hours, and accept invites to game nights, book clubs, and many other employee-led community events.",
    image: communityImg,
  },
  {
    title: "Parental Support",
    description:
      "Balancing work and family is essential, and Scale understands the importance of having adequate leave policies in place to promote a healthy home and work life.",
    image: parentalImg,
  },
];

export default function OurBenefits() {
  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16 md:mb-24">
          <h2
            style={{ fontFamily: "'Gabarito', sans-serif" }}
            className="text-4xl md:text-5xl lg:text-7xl font-semi-bold text-white mb-6 tracking-tight"
          >
            Supporting You To <br className="hidden md:block" /> Do Your Best
            Work
          </h2>
          <p
            style={{ fontFamily: "'Outfit', sans-serif" }}
            className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto"
          >
            At AstrumAI, we believe your talent and achievements deserve to be
            met with a supportive community and flexible environment.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16 md:gap-y-24">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex flex-col">
              <div className="relative aspect-[16/9] rounded-2xl overflow-hidden mb-8 shadow-2xl">
                <img
                  src={benefit.image}
                  alt={benefit.title}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
              <h3
                style={{ fontFamily: "'Gabarito', sans-serif" }}
                className="text-2xl md:text-3xl font-bold text-white mb-4 tracking-tight text-left"
              >
                {benefit.title}
              </h3>
              <p
                style={{ fontFamily: "'Outfit', sans-serif" }}
                className="text-gray-400 text-lg leading-relaxed text-left"
              >
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
