import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

const JoinButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    whatsapp: "",
    email: "",
    profession: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const existing = JSON.parse(localStorage.getItem("registrations")) || [];
    existing.push(formData);
    localStorage.setItem("registrations", JSON.stringify(existing));

    // Save flag for thankyou page
    localStorage.setItem("showThankYou", "true");

    setFormData({
      name: "",
      whatsapp: "",
      email: "",
      profession: "",
    });

    setIsOpen(false);
    navigate("/thankyou");
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <motion.button
        onClick={() => setIsOpen(true)}
        className="bg-gradient-to-r from-yellow-400 to-orange-600 text-white font-semibold px-9 py-4 rounded-full shadow-lg hover:scale-105 transition-transform duration-300"
      >
        Book Now For FREE!
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-black/40 backdrop-blur-[2px] flex justify-center items-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white rounded-2xl p-8 w-[90%] max-w-md shadow-2xl relative text-gray-700"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
            >
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-3 right-4 text-gray-500 hover:text-gray-800 text-2xl"
              >
                ×
              </button>

              <h2 className="text-2xl font-bold text-center mb-6">
                Book Your Spot Now
              </h2>

              <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  type="text"
                  placeholder="Full Name"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2"
                  required
                />

                <input
                  name="whatsapp"
                  value={formData.whatsapp}
                  onChange={handleChange}
                  type="tel"
                  placeholder="WhatsApp Number"
                  maxLength="10"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2"
                  required
                />

                <input
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  type="email"
                  placeholder="Email"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2"
                  required
                />

                <input
                  name="profession"
                  value={formData.profession}
                  onChange={handleChange}
                  type="text"
                  placeholder="Profession"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2"
                />

                <button
                  type="submit"
                  className="bg-gradient-to-r from-yellow-400 to-orange-600 text-white font-semibold py-3 rounded-lg"
                >
                  Book Now
                </button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default JoinButton;
