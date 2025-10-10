"use client";
import React from "react";
import JoinButton from "./JoinButton";

const Bonus = () => {
  const bonuses = [
    {
      price: "Worth ₹3999",
      img: "/images/Bonus11.png",
    },
    {
      price: "Worth ₹1999",
      img: "/images/Bonus222.png",
    },
    {
      price: "Worth ₹999",
      img: "/images/Bonus33.png",
    },
  ];

  return (
    <section className="bg-gradient-to-b from-[#050b24] to-[#000000] text-white py-16 px-6 md:px-16">
      <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-12">
        Bonuses You Will Get
      </h2>

      {/* ✅ Centered grid for bonus cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center">
        {bonuses.map((item, index) => (
          <div
            key={index}
            className="relative bg-gray-900 text-white rounded-3xl w-72 sm:w-80 shadow-xl transition-transform transform hover:-translate-y-2 hover:shadow-2xl"
          >
            {/* Image container */}
            <div className="h-[310px] overflow-hidden rounded-t-3xl rounded-b-[30px] flex items-start justify-center bg-white">
              <img
                src={item.img}
                alt={`Bonus ${index + 1}`}
                className="w-[95%] h-full object-contain object-top -mt-2 scale-[1.05]"
              />
            </div>

            {/* Price label */}
            <div className="bg-red-800 px-6 py-2 rounded-b-2xl rounded-t-2xl text-center absolute -bottom-5 left-1/2 -translate-x-1/2">
              <span className="text-lg font-bold">{item.price}</span>
            </div>
          </div>
        ))}
      </div>

      {/* ✅ Centered Join button below the grid */}
      <div className="flex justify-center mt-16">
        <JoinButton />
      </div>
    </section>
  );
};

export default Bonus;
