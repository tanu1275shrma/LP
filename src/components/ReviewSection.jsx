import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import JoinButton from "./JoinButton";

const reviews = [
  {
    id: 1,
    name: "Deshant Chahuan",
    initials: "DS",
    color: "bg-green-700",
    title: "Nilkanth Rathod is Genuine Coach…",
    review:
      "Sir, earlier I used to hide behind the camera, but after your Public Speaking Course, I now can feel confident to Speak in front of the camera too. Your sessions🔥 helped me alot. Thankyou so Much🙏",
    date: "May 28, 2025",
  },
  {
    id: 2,
    name: "Mr. Krishna Soni",
    initials: "KS",
    color: "bg-yellow-500",
    title: "It’s more than I expected !",
    review:
      "Sir,this webinar has changed my life, now i'm not fear of stage and mic🎙️anymore..now i enjoy to connect, Thankyou Nilkanth sir😍",
    date: "June 09, 2025",
  },
  {
    id: 3,
    name: "Pawan Bornare",
    initials: "P",
    color: "bg-blue-700",
    title: "Life-changing workshop!",
    review:
      "The workshop opened my eyes to practical growth steps. I never thought I’d learn so much in such little time. Truely life changing experience🔥🙏",
    date: "July 26, 2025",
  },
  {
    id: 4,
    name: "Deelip Patil",
    initials: "D",
    color: "bg-blue-700",
    title: "Really a game changer🚀",
    review:
      "Initialy i feel so nervous and anxious while expressing and talking even with my closeones, But after joing your Course I've become so much confident and exelled in communication. Nilkanth Ji you are really a life transforming coach.",
    date: "August 02, 2025",
  },
  {
    id: 5,
    name: "Samadhan",
    initials: "S",
    color: "bg-blue-700",
    title: "People actually listen and respond now...",
    review:
      "Sir, on prior basis i've faced so much hesitation in official meetings and Public events but now i can speak and keep my point of views confidently.The art of body language and tone you make me master in is really impactful, Thankyou so much sir for making me confident.",
    date: "Sept 14, 2025",
  },
];

const ReviewSection = () => {
  const [current, setCurrent] = useState(0);

  // Auto slide every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % reviews.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="bg-[#f6efef] py-16 text-center px-4 sm:px-8 lg:px-16 overflow-hidden">
      <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-10">
        Trained over <span className="text-yellow-400">3000 </span> Public
        Speakers with <span className="text-yellow-400">70+ live sessions</span>
      </h2>

      <div className="relative w-full flex justify-center items-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={reviews[current].id}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl shadow-lg p-8 max-w-xl w-full text-left"
          >
            <div className="flex items-center mb-4">
              <div
                className={`${reviews[current].color} text-white rounded-full w-12 h-12 flex items-center justify-center font-semibold mr-3`}
              >
                {reviews[current].initials}
              </div>
              <div>
                <p className="font-semibold text-gray-800">
                  {reviews[current].name}
                </p>
                <p className="text-sm text-gray-500">1 review • IN</p>
              </div>
            </div>
            <p className="font-bold text-lg mb-2">{reviews[current].title}</p>
            <p className="text-gray-700 mb-4">{reviews[current].review}</p>
            <p className="text-sm text-gray-500">
              Date of experience: {reviews[current].date}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Slider dots */}
      <div className="flex justify-center gap-2 mt-6">
        {reviews.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === current ? "bg-blue-700 w-2" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
      <div className="flex justify-center mt-8">
        <JoinButton />
      </div>
    </section>
  );
};

export default ReviewSection;
