import React, { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import JoinButton from "./JoinButton";

const SuccessStories = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [userInteracted, setUserInteracted] = useState(false);
  const swiperRef = useRef(null);
  const videoRefs = useRef([]);

  const awards = [
    { video: "/images/Yogesh.mp4" },
    { video: "/images/Nilma.mp4" },
    { video: "/images/Manoj.mp4" },
    { video: "/images/Rajendra.mp4" },
  ];

  // ✅ Detect mobile view
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // ✅ Handle user interaction for sound unlock
  useEffect(() => {
    const enableSound = () => {
      setUserInteracted(true);
      document.querySelectorAll("video").forEach((v) => {
        v.muted = false;
        v.volume = 1;
      });
      document.removeEventListener("click", enableSound);
      document.removeEventListener("touchstart", enableSound);
    };

    document.addEventListener("click", enableSound);
    document.addEventListener("touchstart", enableSound);

    return () => {
      document.removeEventListener("click", enableSound);
      document.removeEventListener("touchstart", enableSound);
    };
  }, []);

  // ✅ Stop all videos
  const stopAllVideos = () => {
    videoRefs.current.forEach((v) => {
      if (v) {
        v.pause();
        v.currentTime = 0;
        v.muted = true;
      }
    });
  };

  // ✅ Play video safely
  const playVideo = (index) => {
    stopAllVideos();
    const video = videoRefs.current[index];
    if (video) {
      video.currentTime = 0;
      video.muted = !userInteracted; // unmute only after click
      video.volume = userInteracted ? 1 : 0;
      video.play().catch(() => {});
      // Stop after 30 seconds
      setTimeout(() => {
        if (!video.paused) video.pause();
      }, 30000);
    }
  };

  // ✅ When slider changes
  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;
    playVideo(currentIndex);
  };

  // ✅ Start first video on mount
  useEffect(() => {
    playVideo(0);
  }, []);

  return (
    <section className="bg-[#f4eded] py-12 text-center relative">
      <h2 className="text-4xl md:text-5xl font-bold mb-14 text-gray-950">
        Real Results, Real Stories
      </h2>

      <div className="relative px-4 md:px-12">
        <Swiper
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          onSlideChange={handleSlideChange}
          spaceBetween={30}
          pagination={{ clickable: true }}
          loop={false}
          allowTouchMove={true}
          speed={800}
          breakpoints={{
            320: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
          }}
          modules={[Pagination]}
          className="max-w-7xl mx-auto"
        >
          {awards.map((award, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 mx-auto cursor-pointer">
                <div className="relative w-full aspect-[16/9] overflow-hidden rounded-3xl bg-black">
                  <video
                    ref={(el) => (videoRefs.current[index] = el)}
                    src={award.video}
                    playsInline
                    preload="metadata"
                    className="absolute inset-0 w-full h-full object-cover rounded-3xl"
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
