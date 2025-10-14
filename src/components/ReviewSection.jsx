import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import JoinButton from "./JoinButton";

const reviews = [
  { id: 1, image: "/images/review1.jpeg" },
  { id: 2, image: "/images/review2.jpeg" },
  { id: 3, image: "/images/review3.jpeg" },
  { id: 4, image: "/images/review4.jpeg" },
  { id: 5, image: "/images/review5.jpeg" },
];

const ReviewSection = () => {
  return (
    <section className="bg-[#f6efef] py-12 text-center px-2 sm:px-4 overflow-hidden">
      {/* Heading */}
      <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-10">
        Trained over <span className="text-red-700">3000</span> Public Speakers
        with <span className="text-red-700">70+ live sessions</span>
      </h2>

      {/* ✅ Swiper Slider */}
      <Swiper
        spaceBetween={2} // very small space between slides
        pagination={{ clickable: true }}
        autoplay={{
          delay: 2800,
          disableOnInteraction: false,
        }}
        loop={true}
        modules={[Pagination, Autoplay]}
        breakpoints={{
          320: { slidesPerView: 1.05 }, // small overlap for mobile
          640: { slidesPerView: 1.6 },
          768: { slidesPerView: 2.1 },
          1024: { slidesPerView: 4 },
        }}
        className="max-w-[1200px] mx-auto"
      >
        {reviews.map((review) => (
          <SwiperSlide key={review.id}>
            <div className="flex justify-center items-center w-full h-[420px] sm:h-[440px] md:h-[460px]">
              <img
                src={review.image}
                alt={`Review ${review.id}`}
                className="w-auto h-full object-contain rounded-xl border border-gray-300 bg-white shadow-sm"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* CTA Button */}
      <div className="flex justify-center mt-10">
        <JoinButton />
      </div>

      {/* Pagination Dots Styling */}
      <style>{`
        .swiper-pagination {
          position: relative !important;
          margin-top: 1.5rem !important;
        }
        .swiper-pagination-bullet {
          background-color: #bbb !important;
          opacity: 1 !important;
          width: 8px !important;
          height: 8px !important;
          margin: 0 4px !important;
        }
        .swiper-pagination-bullet-active {
          background-color: #dc2626 !important; /* red accent */
        }
      `}</style>
    </section>
  );
};

export default ReviewSection;
