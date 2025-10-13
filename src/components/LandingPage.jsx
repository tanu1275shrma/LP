"use client";

import React, { useEffect, useRef } from "react";
import JoinButton from "./JoinButton";

const LandingPage = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const videoElement = videoRef.current;
    if (!videoElement) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) videoElement.play();
          else videoElement.pause();
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(videoElement);
    return () => observer.disconnect();
  }, []);

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
              ref={videoRef}
              src="/images/Intro.mp4"
              controls
              muted
              loop
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
        <div className="flex flex-col items-center text-center lg:text-left">
          <div className="grid grid-cols-2 gap-5 w-full max-w-md sm:max-w-lg md:max-w-xl">
            {[
              { icon: "📅", label: "Date", value: "16 October" },
              { icon: "⏰", label: "Time", value: "07:00 PM" },
              { icon: "🎥", label: "Venue", value: "Zoom" },
              { icon: "🌐", label: "Language", value: "English | Hindi" },
            ].map((item, index) => (
              <div
                key={index}
                className="
                  bg-[#11192e] border border-gray-700 
                  rounded-2xl flex flex-col justify-center items-center 
                  py-8 px-4 transition hover:border-yellow-500 
                  min-h-[150px] w-full
                  
                
                  lg:flex-row lg:justify-start lg:items-center lg:gap-4 lg:min-h-[100px] lg:px-6
                "
              >
                <div className="bg-yellow-500 text-black p-3 rounded-full text-2xl flex items-center justify-center w-12 h-12 shrink-0">
                  {item.icon}
                </div>

                <div className="lg:text-left text-center mt-2 lg:mt-0">
                  <p className="text-gray-300 text-sm">{item.label}</p>
                  <p className="font-bold text-white text-lg mt-1 lg:mt-0">
                    {item.value}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-8">
            <JoinButton />
          </div>

          <p className="mt-3 text-sm italic text-gray-300 text-center lg:text-left">
            Registrations End on{" "}
            <span className="text-red-500 font-bold">15 OCT</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default LandingPage;
