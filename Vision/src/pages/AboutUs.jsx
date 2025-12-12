import React, { useRef } from "react";
import AnimatedText from "../components/AnimatedText";

export default function AboutUs() {
  // Using key to force re-render for replay
  const [key, setKey] = React.useState(0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 py-12 px-4 sm:px-8">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
        {/* Image Section */}
        <div className="w-full flex flex-col items-center pt-8 space-y-4">
          <img
            src="/assets/images/steven.png"
            alt="Steven Rodriguez"
            className="w-64 h-64 sm:w-70 sm:h-80 object-cover rounded-full border-4 border-white shadow-lg"
          />
          <p className="text-center text-gray-600 italic font-medium max-w-xs px-4">
            Steven Rodriguez - Founder of Vision for Latino Vision
          </p>
        </div>

        {/* Content with Animation */}
        <div key={key} className="p-6 sm:p-8 text-gray-700">
          {/* Our Vision Section */}
          <div className="flex justify-center mb-8">
            <div className="border-b-2 border-blue-300 pb-2">
              <AnimatedText
                text="Our Vision"
                className="text-2xl sm:text-3xl font-bold text-gray-800 font-mori"
              />
            </div>
          </div>
          <AnimatedText
            text="The Vision for Latino Vision is a project dedicated to advancing equitable access to vision care for Latino communities in the United States. I know firsthand how blurry vision can quietly limit opportunities and how difficult it can be to navigate the healthcare system. That's why Vision for Latino Vision is passionate about breaking down those barriers so no one else has to wait years to see clearly, simply because they couldn't afford it or didn't know where to turn."
            className="mb-4 block"
            as="p"
          />
          <div className="font-medium text-gray-900 text-center">
            <AnimatedText text="Clear sight should not feel like a privilege but a basic need that allows individuals to thrive in school, work, and daily life." as="p" />
          </div>

          {/* About Me Section */}
          <div className="flex justify-center mt-12 mb-8">
            <div className="border-b-2 border-blue-300 pb-2">
              <AnimatedText
                text="About Me"
                className="text-2xl sm:text-3xl font-bold text-gray-800 font-mori"
              />
            </div>
          </div>
          <AnimatedText
            text="My name is Steven Rodriguez. I was born & raised in Colombia and migrated to the United States around 10 years ago. In my professional career, I've worked for 2 of the biggest names on Wall Street, Goldman Sachs and Morgan Stanley. I currently lead Morgan Stanley's Research department's first line of defense surveillance team and facilitate the development of governance structures and strategic alignment for AI tools across the Investment Securities Group of the Firm. I also co-lead the professional development pillar of my local Morgan Stanley's Latino ERG and serve as the Finance chair of the professional chapter of Phi Iota Alpha Fraternity Incorporated."
            className="mb-4 block"
            as="p"
          />

          {/* My Commitment Section */}
          <div className="flex justify-center mt-12 mb-8">
            <div className="border-b-2 border-blue-300 pb-2">
              <AnimatedText
                text="My Commitment"
                className="text-2xl sm:text-3xl font-bold text-gray-800 font-mori"
              />
            </div>
          </div>
          <AnimatedText
            text="My commitment to this work is rooted in personal experience. It wasn't until I turned 20 that I learned I had astigmatism and myopia and that I had needed glasses for years.Despite most of my family needing glasses, we, like many other Latino families, went years without visiting an eye doctor to update our prescriptions. Not because we didn't care about our health, but because eye exams felt out of reach. The cost was too high, the system too complex, and language barriers made it even more intimidating to seek help. My family would wait for a trip to Colombia to get our medical checkups (which I understand is not a luxury we all have), and a visual exam was always an afterthought"
            className="mb-4 block"
            as="p"
          />
          <div className="font-medium text-gray-900 text-center">
            <AnimatedText text="I believe that access to vision care should never be a luxury! However, for many Latino families in the United States, it still is." as="p" />
          </div>
        </div>

        {/* Replay button */}
        <div className="flex justify-center py-8 mt-8 sticky bottom-0 bg-white/80 backdrop-blur-sm">
          <button
            className="px-8 py-4 bg-blue-600 text-black rounded-full font-bold hover:bg-blue-700 transition-all 
                      shadow-xl hover:shadow-2xl text-lg transform hover:scale-105"
            onClick={() => setKey(prev => prev + 1)}
          >
            Replay Animation
          </button>
        </div>
      </div>
    </div>
  );
}
