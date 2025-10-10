import React from "react";
import JoinButton from "./JoinButton";

const Mentor = () => {
  return (
    <section className="bg-gradient-to-b from-[#020826] to-[#080707] text-white py-20 px-6 md:px-16">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
        Meet Your <span className="text-yellow-300">Speaking Coach</span>
      </h2>

      <div className="flex flex-col md:flex-row items-center justify-center gap-10 max-w-6xl mx-auto">
        <div className="relative rounded-3xl overflow-hidden shadow-lg md:w-1/2 w-full">
          <img
            src="/images/NK.png"
            alt="Nilkanth Rathod"
            className="w-full h-full object-cover rounded-3xl "
          />
          <div className="absolute top-0 left-0 w-full h-full bg-black/20"></div>
        </div>

        <div className="md:w-1/2 text-center md:text-left space-y-6">
          <h3 className="text-2xl md:text-3xl font-bold text-green-500 text-center">
            Nilkanth Rathod
          </h3>
          <p className="text-lg font-semibold text-gray-100 text-center">
            The{" "}
            <span className="text-white font-bold">Public Speaking Expert</span>
          </p>

          {/* Divider Line */}
          <div className="h-1 w-40 bg-green-500 mx-auto my-3 rounded transition-all duration-700 ease-in-out hover:w-48"></div>

          <p className="text-gray-300 leading-relaxed text-[17px] text-center max-w-lg">
            Hi, I’m{" "}
            <span className="font-semibold text-white">Nilkanth Rathod</span> an
            Electrical Engineer turned{" "}
            <span className="font-semibold text-white">
              Public Speaking Coach
            </span>{" "}
            empowers individuals to speak with clarity, confidence, and
            charisma. With a passion for leadership and belief transformation,
            he has trained over{" "}
            <span className="font-semibold text-yellow-400">6000+</span>{" "}
            speakers to conquer stage fear and express with impact. His powerful
            frameworks and personalized coaching help learners not only
            communicate effectively but also monetize their voice through
            courses, books, and keynote speeches.{" "}
            <span className="font-semibold text-white">
              Nilkanth’s mission:
            </span>{" "}
            transform hesitant speakers into inspiring, influential leaders.
          </p>
          <JoinButton />
        </div>
      </div>
    </section>
  );
};

export default Mentor;
