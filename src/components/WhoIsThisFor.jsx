import React from "react";
import JoinButton from "./JoinButton";

const WhoIsThisFor = () => {
  const audience = [
    "Students who want to improve their communication & presentation skills.",
    "Working professionals aiming to boost confidence in meetings and public settings.",
    "Entrepreneurs who need to pitch ideas and influence clients effectively.",
    "Aspiring speakers and trainers who want to develop a powerful stage presence.",
    "Leaders & managers who wish to inspire, motivate, and engage their teams.",
    "Anyone who wants to overcome stage fear and express ideas with clarity.",
  ];

  return (
    <section className="bg-[rgb(244,237,237)]  text-gray-900 py-16 px-6 md:px-12 lg:px-24">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-extrabold text-black">
          Who’s This <span className="text-red-700">Webinar For?</span>
        </h2>
        <p className="mt-3 text-gray-950 text-lg">
          Designed for individuals from all walks of life who are ready to grow
          and communicate with confidence!
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
        {audience.map((point, index) => (
          <div
            key={index}
            className="flex items-start gap-3 p-5 bg-green-50 border border-green-400 rounded-2xl hover:shadow-lg transition-all"
          >
            <span className="text-blue-500 text-xl">💎</span>
            <p className="text-gray-800 leading-relaxed">{point}</p>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-8">
        <JoinButton />
      </div>
    </section>
  );
};

export default WhoIsThisFor;
