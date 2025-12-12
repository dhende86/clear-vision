import React, { useRef } from "react";
import AnimatedText from "../components/AnimatedText";

export default function MoreInfo() {
  const containerRef = useRef(null);

  // Note: Since AnimatedText now handles the animation internally on mount,
  // we can just render the content using it.
  // Using a key prop to force re-render if we want a replay feature.
  const [key, setKey] = React.useState(0);

  return (
    <div ref={containerRef} className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 py-12 px-4 sm:px-8">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
        {/* Content with Animation */}
        <div key={key} className="p-6 sm:p-8 text-gray-700">
          <div className="mb-6 text-center">
            <AnimatedText
              text="Vision Care Disparities in Latino Communities"
              className="text-2xl sm:text-3xl font-bold text-gray-800 font-mori"
              as="h2"
            />
          </div>

          <AnimatedText
            text="About one-third of U.S. Latino adults with refractive error (like nearsightedness or farsightedness) do not have proper corrective prescriptions—meaning they could improve their vision with new glasses."
            className="mb-4 block"
            as="p"
          />

          <div className="mt-6 mb-4">
            <AnimatedText text="Research Findings:" className="text-xl font-bold text-gray-800" as="h3" />
          </div>

          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>
              <AnimatedText
                text="In the Proyecto VER study (Latinos aged 40+ in Arizona and similar communities), 64% had refractive error, and 35% of those (about one-in-three) had uncorrected refractive error (URE)—i.e., they were either not wearing glasses or had outdated prescriptions, and they'd benefit from updated ones."
                as="span"
              />
            </li>
            <li>
              <AnimatedText
                text="Another study in Los Angeles among Latinos 40 and older found a 15.1% overall prevalence of URE."
                as="span"
              />
            </li>
          </ul>

          <div className="mb-4 font-medium">
            <AnimatedText
              text="This means: in communities like the ones studied, 1 in 3 Latinos in need of vision correction aren't getting it. National extrapolation is challenging, but it suggests millions of Latinos live with suboptimal vision due to lack of access, insurance, translations, or culturally relevant services."
              as="p"
            />
          </div>

          <div className="mt-6 mb-4">
            <AnimatedText text="Why does this gap exist?" className="text-xl font-bold text-gray-800" as="h3" />
          </div>

          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>
              <AnimatedText text="Cost & Insurance: Lack of vision insurance or inability to afford exams and glasses increases the chance of going uncorrected." as="span" />
            </li>
            <li>
              <AnimatedText text="Language & Cultural Barriers: Lower-income, less-educated, and less-acculturated individuals are more likely to have uncorrected error." as="span" />
            </li>
            <li>
              <AnimatedText text="Access to Care: Visits to eye doctors are lower among Latinos—one study found only 36% of Latinos over 40 in Southern California had ever seen an eye care provider." as="span" />
            </li>
          </ul>

          <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-400">
            <div className="mb-3">
              <AnimatedText text="Key Takeaway" className="text-xl font-bold text-gray-800" as="h3" />
            </div>
            <AnimatedText
              text="Roughly 30–35% of Latino adults with a need for glasses aren't getting the right prescription."
              className="mb-2 block"
              as="p"
            />
            <AnimatedText
              text="That translates into millions potentially living daily life with suboptimal vision—impacting education, employment, safety, and quality of life."
              as="p"
            />
          </div>
        </div>

        <div className="flex justify-center py-8 mt-8 sticky bottom-0 bg-white/80 backdrop-blur-sm">
          <button
            className="px-8 py-4 bg-white text-black rounded-full font-bold hover:bg-gray-100 transition-all 
                      shadow-xl hover:shadow-2xl text-lg transform hover:scale-105 border border-gray-300"
            onClick={() => setKey(prev => prev + 1)}
          >
            Replay Animation
          </button>
        </div>
      </div>
    </div>
  );
}
