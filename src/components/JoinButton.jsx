import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

const JoinButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
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

    setFormData({ name: "", mobile: "", email: "" });

    setIsOpen(false);
    navigate("/thankyou");
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <motion.button
        onClick={() => setIsOpen(true)}
        className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-semibold px-9 py-4 rounded-full shadow-lg hover:scale-105 transition-transform duration-300"
      >
        Join Now For FREE!
      </motion.button>

      {/* MODAL */}
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
              {/* CLOSE BUTTON */}
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-3 right-4 text-gray-500 hover:text-gray-800 text-2xl"
              >
                ×
              </button>

              {/* HEADING */}
              <h2 className="text-2xl font-bold text-center mb-6">
                Register Now For Free
              </h2>

              {/* FORM */}
              <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                {/* NAME */}
                <div>
                  <label className="text-sm font-medium text-gray-700">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    type="text"
                    placeholder="Enter your full name"
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                    required
                  />
                </div>

                {/* MOBILE */}
                <div>
                  <label className="text-sm font-medium text-gray-700">
                    Mobile Number (10 Digits Only){" "}
                    <span className="text-red-500">*</span>
                  </label>
                  <input
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleChange}
                    type="tel"
                    maxLength="10"
                    placeholder="Prefer WhatsApp Number"
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                    required
                  />
                </div>

                {/* EMAIL */}
                <div>
                  <label className="text-sm font-medium text-gray-700">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    type="email"
                    placeholder="Enter your email ID"
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                    required
                  />
                </div>

                {/* SUBMIT BUTTON */}
                <button
                  type="submit"
                  className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-3 rounded-lg shadow-md transition-transform hover:scale-105"
                >
                  Register Now
                </button>
              </form>

              {/* FOOTER NOTE */}
              <p className="text-center mt-4 text-sm italic">
                <span className="text-gray-700">Registrations End on</span>{" "}
                <span className="text-red-600 font-semibold">09 OCT</span>
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default JoinButton;
