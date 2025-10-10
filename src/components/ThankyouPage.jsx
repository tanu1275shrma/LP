import React, { useEffect, useRef } from "react";
import { CheckCircle2, CalendarDays } from "lucide-react";

const ThankYouPage = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.muted = false;
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          setTimeout(() => video.play(), 500);
        });
      }
    }
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0a23] flex items-center justify-center px-5 py-10">
      <div className="flex flex-col md:flex-row items-center justify-center gap-10 p-10 rounded-3xl border-[3px] border-yellow-500 shadow-[0_0_25px_rgba(255,200,0,0.6)] max-w-6xl w-full bg-[#0a0a23] transition-all duration-700 ease-in-out">
        <div className="w-full md:w-[45%] bg-black rounded-2xl overflow-hidden shadow-xl border border-gray-700 flex items-center justify-center">
          <video
            ref={videoRef}
            src="/images/video.mp4"
            controls
            autoPlay
            playsInline
            className="
              w-auto
              h-[480px] md:h-[520px]
              object-cover object-center
              scale-[1.18]
              translate-y-[-8px]
              rounded-2xl
              transition-all duration-500 ease-in-out
            "
          >
            Your browser doesn’t support videos.
          </video>
        </div>

        {/* TEXT CARD */}
        <div className="w-full md:w-[45%] text-white rounded-2xl p-8 md:p-10">
          <h1 className="text-3xl font-extrabold text-yellow-500 flex items-center mb-5 whitespace-nowrap">
            <span className="ml-2">ThankYou for Registering!</span>
          </h1>

          <p className="text-gray-200 text-lg leading-relaxed mb-6">
            We're thrilled to have you onboard! Please watch the short video to
            know what’s coming next — and how you can get the most out of your
            experience.
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
            className="mt-8 ml-8 inline-block bg-white hover:bg-yellow-500 text-black font-semibold px-8 py-3 rounded-full shadow-lg transition-transform hover:scale-105 text-center"
          >
            Back to Home
          </a>
        </div>
      </div>
    </div>
  );
};

export default ThankYouPage;
