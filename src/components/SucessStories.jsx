import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Pagination, Autoplay } from "swiper/modules";
import JoinButton from "./JoinButton";

const SuccessStories = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const [userInteracted, setUserInteracted] = useState(false);

  // 🧠 Wait for user interaction once
  useEffect(() => {
    const enableSound = () => {
      setUserInteracted(true);
      console.log("🔊 ");

      // Unmute all existing videos
      document.querySelectorAll("video").forEach((v) => {
        v.muted = false;
        v.volume = 1;
      });

      // Remove listeners (only need to trigger once)
      document.removeEventListener("click", enableSound);
      document.removeEventListener("keydown", enableSound);
    };

    document.addEventListener("click", enableSound);
    document.addEventListener("keydown", enableSound);

    return () => {
      document.removeEventListener("click", enableSound);
      document.removeEventListener("keydown", enableSound);
    };
  }, []);

  const awards = [
    { video: "/images/Yogesh.mp4" },
    { video: "/images/Nilma.mp4" },
    { video: "/images/Manoj.mp4" },
    { video: "/images/Rajendra.mp4" },
  ];

  // 🎬 Play video with sound when hovered
  const handleMouseEnter = async (index) => {
    setHoveredIndex(index);
    const video = document.getElementById(`video-${index}`);
    if (!video) return;

    try {
      video.currentTime = 0;
      video.preload = "auto";
      video.loop = true;

      if (userInteracted) {
        video.muted = false;
        video.volume = 1;
      } else {
        video.muted = true; // autoplay-safe before first click
      }

      await video.play();
    } catch (err) {
      console.warn("🎧 Playback issue:", err);
    }
  };

  // 🛑 Pause video when hover ends
  const handleMouseLeave = (index) => {
    setHoveredIndex(null);
    const video = document.getElementById(`video-${index}`);
    if (video) {
      video.pause();
      video.currentTime = 0;
      video.muted = true;
    }
  };

  return (
    <section className="bg-[#f4eded] py-12 text-center relative">
      <h2 className="text-4xl md:text-5xl font-bold mb-14 text-gray-950">
        Real Results, Real Stories
      </h2>

      <div className="relative px-4 md:px-12">
        <Swiper
          spaceBetween={30}
          pagination={{ clickable: true }}
          autoplay={{ delay: 7000, disableOnInteraction: false }}
          speed={1000}
          loop={true}
          breakpoints={{
            320: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
          }}
          modules={[Pagination, Autoplay]}
          className="max-w-7xl mx-auto"
        >
          {awards.map((award, index) => (
            <SwiperSlide key={index}>
              <div
                className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 mx-auto cursor-pointer"
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={() => handleMouseLeave(index)}
              >
                <div className="relative w-full aspect-[16/9] overflow-hidden rounded-3xl bg-black">
                  <video
                    id={`video-${index}`}
                    src={award.video}
                    playsInline
                    preload="auto"
                    muted
                    className="absolute inset-0 w-full h-full object-cover rounded-3xl transition-transform duration-500 hover:scale-105"
                  />
                  {!userInteracted && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/40 text-white text-sm sm:text-lg">
                      🔈 Click anywhere to enable sound
                    </div>
                  )}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* CTA Section */}
      <div className="mt-12">
        <JoinButton />
        <p className="mt-3 italic text-sm text-red-600">
          Registrations End on <span className="font-bold">11 OCT</span>
        </p>
      </div>

      {/* Swiper pagination styling */}
      <style jsx global>{`
        .swiper-pagination {
          position: relative !important;
          margin-top: 2rem !important;
        }
        .swiper-pagination-bullet {
          background-color: #ccc !important;
          opacity: 1 !important;
          width: 8px !important;
          height: 8px !important;
          margin: 0 6px !important;
        }
        .swiper-pagination-bullet-active {
          background-color: #2563eb !important;
        }
      `}</style>
    </section>
  );
};

export default SuccessStories;
