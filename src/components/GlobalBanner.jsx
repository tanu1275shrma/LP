import React, { useState } from "react";
import JoinButton from "./JoinButton";

export default function GlobalBanner() {
  const [visible] = useState(true);

  if (!visible) return null;

  return (
    <>
      <style>{`
        /* Glowing animation for "Only 4 Seats Left" */
        @keyframes glow {
          0%, 100% {
            text-shadow: 0 0 10px #ff4dd2, 0 0 20px #ff66cc, 0 0 30px #ff80d5;
            opacity: 1;
          }
          50% {
            text-shadow: 0 0 25px #ff99dd, 0 0 45px #ff33aa, 0 0 60px #ff66cc;
            opacity: 0.7;
          }
        }
        .glow-text {
          animation: glow 1.3s ease-in-out infinite alternate;
        }

        @keyframes pop {
          0%, 100% {
            transform: scale(1);
            box-shadow: 0 0 0px rgba(0,0,0,0);
          }
          50% {
            transform: scale(1.08);
            box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
          }
        }
        .pop-btn {
          animation: pop 1.6s ease-in-out infinite;
        }
      `}</style>

      <div className="fixed bottom-0 left-0 w-full h-10px rounded-3xl bg-white text-center border-t-4 border-gray-600 shadow-[0_-4px_10px_rgba(0,0,0,0.15)] z-50">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center px-6 py-2 text-center sm:py-4 gap-3">
          <div className="flex flex-col sm:flex-row h-20px sm:items-center gap-3  sm:text-left text-center">
            <p className="text-2xl sm:text-3xl font-bold text-green-600">
              Filling Fast{" "}
              <span className="text-red-600 font-bold glow-text">
                Only 4 Seats Left
              </span>
              <span className="italic text-base sm:text-lg text-black font-semibold">
                Registrations End on{" "}
                <span className="text-red-600 font-bold not-italic">
                  11 OCT
                </span>
              </span>
            </p>
          </div>
          <JoinButton />
        </div>
      </div>
    </>
  );
}
