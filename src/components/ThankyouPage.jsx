"use client";

import React, { useEffect, useRef } from "react";
import { CheckCircle2, CalendarDays } from "lucide-react";

const ThankYouPage = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const tryPlay = async () => {
      try {
        video.muted = false;
        await video.play();
      } catch (error) {
        try {
          video.muted = true;
          await video.play();
          setTimeout(() => {
            video.muted = false;
          }, 1000);
        } catch (innerError) {
          console.warn("Autoplay blocked by browser:", innerError);
        }
      }
    };

    tryPlay();

    // Auto pause/play when scrolling
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0a23] flex items-center justify-center px-4 py-10">
      <div className="flex flex-col md:flex-row items-center justify-center gap-10 p-6 md:p-10 rounded-3xl border-[3px] border-yellow-500 shadow-[0_0_25px_rgba(255,200,0,0.6)] max-w-6xl w-full bg-[#0a0a23] transition-all duration-700 ease-in-out">
        {/* 🎥 VIDEO SECTION */}
        <div className="w-full md:w-1/2 flex items-center justify-center">
          <div className="relative w-full bg-black rounded-xl overflow-hidden shadow-2xl border border-gray-700">
            <video
              ref={videoRef}
              src="/images/video.mp4"
              controls
              playsInline
              className="w-full h-auto max-h-[70vh] object-contain bg-black rounded-xl"
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </div>

        {/* 📋 TEXT SECTION */}
        <div className="w-full md:w-1/2 text-white rounded-2xl p-6 md:p-8">
          <h1 className="text-3xl font-extrabold text-yellow-500 mb-5">
            Thank You for Registering!
          </h1>

          <p className="text-gray-200 text-lg leading-relaxed mb-6">
            We're thrilled to have you onboard! Watch this short video to learn
            what’s next — and how you can make the most of your experience.
          </p>

          <hr className="border-gray-700 mb-6" />

          <ul className="space-y-3 text-gray-300 italic">
            <li className="flex items-center gap-3">
              <CheckCircle2 className="text-green-500 w-5 h-5" />
              <span>Your registration was successful.</span>
            </li>
            <li className="flex items-center gap-3">
              <CalendarDays className="text-blue-500 w-5 h-5" />
              <span>Stay tuned — we’ll reach out to you soon!</span>
            </li>
          </ul>

          <a
            href="/"
            className="mt-8 inline-block bg-white hover:bg-yellow-500 text-black font-semibold px-8 py-3 rounded-full shadow-lg transition-transform hover:scale-105 text-center"
          >
            Back to Home
          </a>
        </div>
      </div>
    </div>
  );
};

export default ThankYouPage;
