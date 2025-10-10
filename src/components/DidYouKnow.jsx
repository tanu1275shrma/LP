import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import JoinButton from "./JoinButton";

import "swiper/css";
import "swiper/css/pagination";

const DidYouKnow = () => {
  const courses = [
    { image: "/images/pic1.jpg" },
    { image: "/images/pic2.jpg" },
    { image: "/images/pic3.jpg" },
    { image: "/images/pic4.jpg" },
    { image: "/images/pic5.jpg" },
    { image: "/images/pic6.jpg" },
  ];

  return (
    <div className="bg-gradient-to-b from-[#020b38] to-[#000814] text-white py-12">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10">
        Did You Know?
      </h2>
      <h3 className="text-2xl sm:text-3xl font-bold text-center mb-8 px-4">
        In India 1000+ People Trained By Nilkanth Rathod
      </h3>

      <div className="max-w-6xl mx-auto px-4 sm:px-8">
        <Swiper
          slidesPerView={1} // ✅ show 1 full image on mobile
          spaceBetween={20}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          loop={true}
          breakpoints={{
            640: { slidesPerView: 2 }, // tablets
            1024: { slidesPerView: 4 }, // desktops
          }}
          modules={[Pagination, Autoplay]}
          className="mySwiper"
        >
          {courses.map((course, index) => (
            <SwiperSlide key={index}>
              <div className="rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-transform duration-300 hover:scale-105">
                <img
                  src={course.image}
                  alt={`Training ${index + 1}`}
                  className="w-full h-72 object-cover sm:h-64 md:h-60"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="flex justify-center mt-8">
        <JoinButton />
      </div>
    </div>
  );
};

export default DidYouKnow;
