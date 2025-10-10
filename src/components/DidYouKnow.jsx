import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import JoinButton from "./JoinButton";

import "swiper/css";
import "swiper/css/pagination";

const DidYouKnow = () => {
  const courses = [
    {
      image: "/images/pic1.jpg",
    },
    {
      image: "/images/pic2.jpg",
    },
    {
      image: "/images/pic3.jpg",
    },
    {
      image: "/images/pic4.jpg",
    },
    {
      image: "/images/pic5.jpg",
    },
    {
      image: "/images/pic6.jpg",
    },
  ];

  return (
    <div className="bg-gradient-to-b from-[#020b38] to-[#000814] text-white py-12">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10">
        Did You Know ?
      </h2>
      <h3 className="text-3xl sm:text-4xl font-bold text-center mb-15">
        In India 1000+ People Trained By Nilkanth Rathod{" "}
      </h3>

      <div className="max-w-8xl mx-auto px-18">
        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          loop={true}
          breakpoints={{
            240: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
          modules={[Pagination, Autoplay]}
          className="mySwiper"
        >
          {courses.map((course, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white text-black rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-transform hover:scale-102 duration-300">
                <img src={course.image} className="h-54 w-full object-cover" />
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
