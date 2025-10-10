import React from "react";
import JoinButton from "./JoinButton.jsx";

const ProfitSection = () => {
  const points = [
    "It builds strong self-confidence in expressing ideas and opinions clearly..",
    "It develops leadership qualities and the ability to influence others effectively..",
    "It improves body language, voice modulation, and stage presence.",
    "It boosts career growth by making you stand out in professional settings.",
    "It sharpens critical thinking and organization of thoughts before speaking.",
    "It strengthens your personal brand and public image.",
  ];

  return (
    <section className="bg-[#f8f3f3] text-center py-16 px-6 md:px-20">
      <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">
        Benefits of a{" "}
        <span className="text-gray-950">Public Speaking Program</span>
      </h2>
      <p className="text-gray-700 text-lg mb-10">
        Confidence Starts With Speaking Up — Start Today!
      </p>

      <div className="grid md:grid-cols-2 gap-5 max-w-5xl mx-auto mb-12">
        {points.map((point, index) => (
          <div
            key={index}
            className="flex items-center gap-3 border border-green-500 bg-green-50 rounded-xl p-4 text-left"
          >
            <span className="text-green-600 text-xl">💠</span>
            <p className="text-gray-800">{point}</p>
          </div>
        ))}
      </div>

      <p className="text-gray-900 font-medium text-lg mb-6">
        All you need is the will to improve — we’ll show you how.
      </p>

      <JoinButton />
    </section>
  );
};

export default ProfitSection;
