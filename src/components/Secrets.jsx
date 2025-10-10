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
    <section className="bg-[#f8f0ee] py-20 px-18">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-24 text-gray-800">
        What You Will Learn in 90 Minutes
      </h2>

      <div className="grid gap-16 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {students.map((student, index) => (
          <div
            key={index}
            className="relative bg-[#0e1526] text-white rounded-2xl pt-24 pb-10 px-6 shadow-lg text-center"
          >
            <div className="absolute -top-14 left-1/2 -translate-x-1/2 w-40 h-40 rounded-xl overflow-hidden shadow-lg bg-pink-200">
              <img
                src={student.img}
                alt={student.name}
                className="w-full h-full object-cover bg-pink-200"
              />
            </div>

            <h3 className="text-xl font-semibold mt-6">{student.name}</h3>
            <div className="w-10 h-[2px] bg-white/30 mx-auto my-3"></div>
            <p className="text-lg mb-5 text-gray-00">{student.title}</p>

            <div className="border border-gray-500 rounded-xl py-4 px-5">
              <p className="text-white text-base leading-relaxed">
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
