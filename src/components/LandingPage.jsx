import React from "react";
import JoinButton from "./JoinButton";

const LandingPage = () => {
  return (
    <section className="bg-gradient-to-b from-[#0a1333] to-black text-white py-12 px-4 md:px-8 lg:px-16">
      <div className="text-center max-w-4xl mx-auto">
        <div className="inline-block px-7 py-2 border border-gray-600 rounded-full text-sm mb-5">
          Join 90-Minute FREE Workshop
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold leading-snug">
          Master the{" "}
          <span className="text-yellow-400">Art of Public Speaking:</span>{" "}
          Master Your Life
        </h1>

        <p className="mt-3 text-white font-extrabold ">
          Unlock your potential & transform your normal Personality into
          Confident personality
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 items-center mt-12">
        {/* ✅ LEFT SIDE: Video instead of Image */}
        <div className="flex flex-col items-center">
          <div className="relative w-full max-w-md rounded-2xl overflow-hidden border-8 border-yellow-400">
            <video
              src="/images/Intro.mp4"
              controls
              autoPlay
              loop
              muted
              className="w-full h-[320px] md:h-[380px] object-cover"
            ></video>
          </div>

          <div className="bg-[#11192e] mt-6 p-6 rounded-xl text-center max-w-md">
            <h3 className="font-bold text-lg">
              Meet the voice behind your confidence{" "}
            </h3>
            <p className="text-gray-100 text-sm mt-2">
              Trained over{" "}
              <span className="font-bold text-yellow-500">
                3000 Public Speakers
              </span>{" "}
              & helped
              <span className="font-bold text-yellow-500"> 170+ people</span> to
              achieve their goals
            </p>
          </div>
        </div>

        <div className="text-center lg:text-left">
          {" "}
          <div className="grid sm:grid-cols-2 gap-6">
            {" "}
            <div className="bg-[#11192e] border border-gray-700 px-6 py-4 rounded-xl flex items-center gap-3">
              {" "}
              <span className="text-yellow-400 text-2xl">📅</span>{" "}
              <div>
                {" "}
                <p className="text-yellow-400 text-sm">Date</p>{" "}
                <p className="font-bold">11th October</p>{" "}
              </div>{" "}
            </div>{" "}
            <div className="bg-[#11192e] border border-gray-700 px-6 py-4 rounded-xl flex items-center gap-3">
              {" "}
              <span className="text-yellow-400 text-2xl">⏰</span>{" "}
              <div>
                {" "}
                <p className="text-yellow-400 text-sm">Time</p>{" "}
                <p className="font-bold">11:30 AM</p>{" "}
              </div>{" "}
            </div>{" "}
            <div className="bg-[#11192e] border border-gray-700 px-6 py-4 rounded-xl flex items-center gap-3">
              {" "}
              <span className="text-yellow-400 text-2xl">🎥</span>{" "}
              <div>
                {" "}
                <p className="text-yellow-400 text-sm">Venue</p>{" "}
                <p className="font-bold">Zoom</p>{" "}
              </div>{" "}
            </div>{" "}
            <div className="bg-[#11192e] border border-gray-700 px-6 py-4 rounded-xl flex items-center gap-3">
              {" "}
              <span className="text-yellow-400 text-2xl">🌐</span>{" "}
              <div>
                {" "}
                <p className="text-yellow-400 text-sm">Language</p>{" "}
                <p className="font-bold">English | Hindi</p>{" "}
              </div>{" "}
            </div>{" "}
          </div>
          <div className="mt-8">
            <JoinButton />
          </div>
          <p className="mt-3 text-sm italic text-gray-300 text-center">
            Registrations End on{" "}
            <span className="text-red-500 font-bold">11 OCT</span>
          </p>
        </div>
      </div>

      <div className="mt-12 flex flex-wrap justify-center gap-8 text-center border-t border-gray-700 pt-8">
        <div>
          <p className="font-bold text-lg">Rated 4.9</p>
          <p className="text-gray-400 text-sm">out of 2,949 Reviews</p>
        </div>
        <div>
          <p className="font-bold text-lg">6,170+</p>
          <p className="text-gray-400 text-sm">Achievers</p>
        </div>
        <div>
          <p className="font-bold text-lg">45+</p>
          <p className="text-gray-400 text-sm">Live Sessions</p>
        </div>
      </div>
    </section>
  );
};

export default LandingPage;
