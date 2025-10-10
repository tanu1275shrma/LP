"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Pagination, Autoplay } from "swiper/modules";
import JoinButton from "./JoinButton";

const SuccessStories = () => {
  const awards = [
    {
      img: "/images/Test11.png",
      name: "Kirit Chauan",
      achievement: "Insurance Adviser",
    },
    {
      img: "/images/Test2.png",
      name: "Nilima Kirkire",
      achievement: "NLP and YOGA COACH",
    },
    {
      img: "/images/Test3.png",
      name: "Manoj Chaudhar",
      achievement: "Digital Direct Selling Coach",
    },
    {
      img: "/images/Test4.png",
      name: "Yogesh Rude",
      achievement: "Content Creator & Blogger",
    },
  ];

  const reviews = [
    {
      name: "Aarav Mehta",
      review:
        "This public speaking course by Nilkanth Rathod completely changed my confidence level. I used to be scared of even introducing myself on stage, and now I host college events with ease!",
      date: "May 14, 2025",
    },
    {
      name: "Priya Sharma",
      review:
        "Nilkanth Sir’s techniques are so practical! The breathing, voice modulation, and storytelling exercises helped me speak clearly and connect with my audience emotionally.",
      date: "June 03, 2025",
    },
    {
      name: "Rohit Verma",
      review:
        "Absolutely amazing! I loved how Nilkanth Sir simplified body language and stage control. After this course, I delivered my first corporate presentation confidently and received great feedback.",
      date: "July 10, 2025",
    },
    {
      name: "Sneha Patil",
      review:
        "This was more than just a speaking course — it felt like a personal transformation. Nilkanth Sir’s mentorship helped me overcome fear and start enjoying public speaking!",
      date: "August 22, 2025",
    },
    {
      name: "Vikram Deshmukh",
      review:
        "Nilkanth Rathod’s public speaking program is a must for anyone who wants to grow in life. I learned not just how to speak, but how to inspire people through my words.",
      date: "September 15, 2025",
    },
  ];

  return (
    <section className="bg-[#f4eded] py-10 text-center relative">
      <h2 className="text-4xl md:text-5xl font-bold mb-14 text-gray-950">
        Real Results, Real Stories
      </h2>

      <div className="relative p-14 mb-0 ">
        <Swiper
          spaceBetween={30}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            320: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          modules={[Pagination, Autoplay]}
          className="max-w-6xl px-8 mb-20 pb-16 "
        >
          {awards.map((award, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white rounded-3xl shadow-md w-80 mx-auto rounded-t-3xl overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="w-full h-86  overflow-hidden relative rounded-3xl bg-gray-100">
                  <img
                    src={award.img}
                    alt={award.name}
                    className="w-full h-94px rounded-3xl transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="p-2">
                  <h3 className="font-bold text-lg italic text-gray-900 mb-1">
                    {award.name}
                  </h3>
                  <div className="border border-gray-400 bg-gray-900 rounded-2xl py-1 px-3 flex items-center justify-center gap-2 text-white font-bold">
                    {award.achievement}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="border-t border-gray-300 w-3/4 mt-0 mx-auto my-10"></div>

      <h3 className="text-2xl md:text-3xl font-semibold mb-8 text-gray-900">
        Trained Over 1000+ People to Achieve Their Goals
      </h3>

      <div className="relative">
        <Swiper
          spaceBetween={30}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 6000,
            disableOnInteraction: false,
          }}
          modules={[Pagination, Autoplay]}
          className="max-w-6xl px-8 pb-12"
        >
          {reviews.map((review, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white rounded-3xl p-8 text-left shadow-lg max-w-3xl mx-auto">
                <h4 className="font-bold text-xl text-[#121212] mb-2">
                  {review.name}
                </h4>
                <p className="text-gray-700 leading-relaxed mb-4">
                  “{review.review}”
                </p>
                <p className="text-sm text-gray-500">
                  Date of experience: <strong>{review.date}</strong>
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="mt-12">
        <JoinButton />
        <p className="mt-3 italic text-sm text-red-600">
          Registrations End on <span className="font-bold">11 OCT</span>
        </p>
      </div>

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
