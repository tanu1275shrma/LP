"use client";

import React from "react";
import JoinButton from "./JoinButton";

const LandingPage = () => {
  return (
    <section className="bg-gradient-to-b from-[#0a1333] to-black text-white py-12 px-4 md:px-8 lg:px-16">
      {/* ===== HERO HEADING ===== */}
      <div className="text-center max-w-4xl mx-auto">
        <div className="inline-block px-7 py-2 border border-gray-600 rounded-full text-sm mb-5">
          Join 90-Minute FREE Workshop
        </div>

        <h1 className="text-4xl md:text-5xl font-extrabold leading-snug">
          Master the{" "}
          <span className="text-yellow-400">Art of Public Speaking:</span>{" "}
          Master Your Life
        </h1>

        <p className="mt-3 text-white font-extrabold">
          Unlock your potential & transform your normal personality into a
          confident personality.
        </p>
      </div>

      {/* ===== CONTENT GRID ===== */}
      <div className="grid lg:grid-cols-2 gap-12 items-center mt-12">
        {/* 🎥 LEFT SIDE: VIDEO SECTION */}
        <div className="flex flex-col items-center w-full">
          <div className="relative w-full aspect-video rounded-2xl overflow-hidden border-8 border-yellow-400">
            <video
              src="/images/Intro.mp4"
              controls
              autoPlay
              loop
              muted
              className="w-full h-full object-cover"
            ></video>
          </div>

          <div className="bg-[#11192e] mt-6 p-6 rounded-xl text-center max-w-2xl w-full">
            <h3 className="font-bold text-lg">
              Meet the voice behind your confidence
            </h3>
            <p className="text-gray-100 text-sm mt-2">
              Trained over{" "}
              <span className="font-bold text-yellow-500">
                3000 Public Speakers
              </span>{" "}
              & helped
              <span className="font-bold text-yellow-500"> 170+ people</span> to
              achieve their goals.
            </p>
          </div>
        </div>

        {/* 📅 RIGHT SIDE: WORKSHOP DETAILS */}
        <div className="text-center lg:text-left">
          <div className="grid sm:grid-cols-1 gap-6 max-w-md mx-auto">
            {/* Date & Time */}
            <div className="bg-[#11192e] border border-gray-700 px-6 py-4 rounded-xl flex items-center gap-3">
              <span className="text-yellow-400 text-2xl">📅</span>
              <div>
                <p className="text-yellow-400 text-sm">Date & Time</p>
                <p className="font-bold">11th October | 11:30 AM</p>
              </div>
            </div>

            {/* Venue & Language */}
            <div className="bg-[#11192e] border border-gray-700 px-6 py-4 rounded-xl flex items-center gap-3">
              <span className="text-yellow-400 text-2xl">🎥</span>
              <div>
                <p className="text-yellow-400 text-sm">Venue & Language</p>
                <p className="font-bold">Zoom | English & Hindi</p>
              </div>
            </div>
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

      {/* ===== STATS SECTION ===== */}
      <div className="mt-12 flex justify-center items-center text-center border-t border-gray-700 pt-8 space-x-6 sm:space-x-12 overflow-x-auto scrollbar-hide">
        <div className="min-w-[100px] sm:min-w-[120px]">
          <p className="font-bold text-base sm:text-lg">Rated 4.9</p>
          <p className="text-gray-400 text-xs sm:text-sm">
            out of 2,949 Reviews
          </p>
        </div>

        <div className="min-w-[100px] sm:min-w-[120px]">
          <p className="font-bold text-base sm:text-lg">6,170+</p>
          <p className="text-gray-400 text-xs sm:text-sm">Achievers</p>
        </div>

        <div className="min-w-[100px] sm:min-w-[120px]">
          <p className="font-bold text-base sm:text-lg">45+</p>
          <p className="text-gray-400 text-xs sm:text-sm">Live Sessions</p>
        </div>
      </div>

      {/* ===== SCROLLBAR HIDE STYLE ===== */}
      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};

export default LandingPage;
