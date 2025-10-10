import React from "react";

const students = [
  {
    name: "Secret 1",
    title: "Four Quadrant Framework",
    img: "/images/Quadrant1.jpeg",
    earned:
      "Master the art of structuring your speech with four keys - content, delivery, mindset, and audience connection for maximum impact.",
  },
  {
    name: "Secret 2",
    title: "Burger Technique",
    img: "/images/Burger.png",
    earned:
      "Learn to frame your speech like a burger — strong opening (top bun), rich content (filling), and powerful closing (bottom bun).",
  },
  {
    name: "Secret 3",
    title: "RRR Framework",
    img: "/images/RRRNEW.png",
    earned:
      "Discover the RRR method—Reflect, Rehearse, and Refine—to enhance clarity, confidence, and consistency in every public speaking performance.",
  },
];

const Secrets = () => {
  return (
    <section className="bg-[#f8f0ee] py-16 sm:py-20 px-4 sm:px-8">
      <h2 className="text-2xl sm:text-4xl font-bold text-center mb-16 sm:mb-24 text-gray-800">
        What You Will Learn in 90 Minutes
      </h2>

      <div className="grid gap-12 sm:gap-16 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {students.map((student, index) => (
          <div
            key={index}
            className="relative bg-[#0e1526] text-white rounded-2xl pt-20 sm:pt-24 pb-6 sm:pb-10 px-4 sm:px-6 shadow-lg text-center transition-all duration-300 hover:scale-[1.02]"
          >
            {/* Image box */}
            <div className="absolute -top-10 sm:-top-14 left-1/2 -translate-x-1/2 w-28 h-28 sm:w-40 sm:h-40 rounded-xl overflow-hidden shadow-lg bg-pink-200">
              <img
                src={student.img}
                alt={student.name}
                className="w-full h-full object-cover bg-pink-200"
              />
            </div>

            {/* Title */}
            <h3 className="text-lg sm:text-xl font-semibold mt-4 sm:mt-6">
              {student.name}
            </h3>
            <div className="w-10 h-[2px] bg-white/30 mx-auto my-2 sm:my-3"></div>
            <p className="text-base sm:text-lg mb-4 sm:mb-5 text-gray-200">
              {student.title}
            </p>

            {/* Description */}
            <div className="border border-gray-500 rounded-xl py-3 sm:py-4 px-4 sm:px-5">
              <p className="text-white text-sm sm:text-base leading-relaxed">
                {student.earned}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Secrets;
