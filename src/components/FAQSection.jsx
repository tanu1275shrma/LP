import React, { useState } from "react";
import { PlusCircleIcon, MinusCircleIcon } from "@heroicons/react/24/solid";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What makes a great public speaker?",
      answer:
        "A great speaker connects emotionally, communicates clearly, and inspires the audience with authenticity.",
    },
    {
      question: "How can I overcome nervousness and stage fright?",
      answer:
        "Practice regularly, focus on your message—not yourself—and start with small audiences to build confidence.",
    },
    {
      question: "How do I structure a compelling speech?",
      answer:
        "Use a clear structure: strong opening, powerful body with key points, and a memorable conclusion.",
    },
    {
      question: "What are some effective ways to engage my audience?",
      answer:
        "Ask questions, use stories, maintain eye contact, and involve the audience through interaction.",
    },
    {
      question:
        "How do I handle difficult audience members during a presentation?",
      answer:
        "Stay calm, acknowledge respectfully, and steer the conversation back to your main topic.",
    },
    {
      question: "How can I improve my vocal delivery and tone?",
      answer:
        "Practice voice modulation, proper breathing, and variation in pitch, pace, and pauses.",
    },
    {
      question: "What are some common mistakes to avoid in public speaking?",
      answer:
        "Avoid reading word-for-word, speaking too fast, ignoring the audience, and lacking preparation.",
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-gradient-to-b from-[#030b30] to-[#000000] text-white py-16 px-4 sm:px-8 md:px-16">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center mb-10">
        Frequently Asked Questions!
      </h2>

      <div className="max-w-4xl mx-auto flex flex-col gap-4 sm:gap-6">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`rounded-2xl overflow-hidden shadow-md transition-all duration-300 ${
              activeIndex === index
                ? "bg-yellow-400 text-black"
                : "bg-white text-gray-950"
            }`}
          >
            <button
              onClick={() => toggleFAQ(index)}
              className={`flex justify-between items-center w-full text-left px-4 sm:px-6 py-4 sm:py-5 font-semibold text-base sm:text-lg ${
                activeIndex === index
                  ? "bg-yellow-400"
                  : "bg-[rgb(244,237,237)]"
              }`}
            >
              <span className="leading-snug">{faq.question}</span>

              {/* ✅ Responsive, balanced icon sizes */}
              {activeIndex === index ? (
                <MinusCircleIcon className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7 text-black flex-shrink-0 transition-all duration-200" />
              ) : (
                <PlusCircleIcon className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7 text-black flex-shrink-0 transition-all duration-200" />
              )}
            </button>

            <div
              className={`transition-all duration-300 ease-in-out overflow-hidden ${
                activeIndex === index
                  ? "max-h-64 sm:max-h-96 bg-white"
                  : "max-h-0"
              }`}
            >
              <p className="px-4 sm:px-6 py-3 sm:py-5 text-sm sm:text-base text-gray-800 leading-relaxed">
                {faq.answer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
