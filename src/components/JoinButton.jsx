import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const JoinButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  // Redirect to Thank You Page when Book Now is clicked
  const handleBookNow = () => {
    window.location.href = "/thankyou";
  };

  // Load external script for form
  useEffect(() => {
    if (isOpen) {
      const script = document.createElement("script");
      script.src = "https://ns.myprofunnels.com/js/form_embed.js";
      script.async = true;
      document.body.appendChild(script);
      return () => {
        document.body.removeChild(script);
      };
    }
  }, [isOpen]);

  return (
    <div className="flex flex-col items-center gap-4">
      {/* Main Button */}
      <motion.button
        onClick={handleOpen}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="bg-gradient-to-r from-yellow-400 to-orange-600 text-white font-semibold px-8 sm:px-10 py-3 sm:py-4 rounded-full shadow-lg text-base sm:text-lg transition-all duration-300"
      >
        Join Now
      </motion.button>

      {/* Popup Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm flex justify-center items-center z-50 px-3 sm:px-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="relative bg-white rounded-3xl p-5 sm:p-8 w-full max-w-[95%] sm:max-w-lg md:max-w-2xl shadow-2xl overflow-hidden"
              initial={{ scale: 0.9, opacity: 0, y: 40 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 40 }}
              transition={{ type: "spring", stiffness: 120, damping: 15 }}
            >
              {/* Close Button */}
              <button
                onClick={handleClose}
                className="absolute top-3 right-4 text-gray-600 hover:text-gray-900 text-2xl"
              >
                ×
              </button>

              {/* Embedded Form */}
              <div className="w-full h-[480px] sm:h-[520px] md:h-[580px] overflow-hidden rounded-xl border border-gray-200 bg-white">
                <iframe
                  src="https://ns.myprofunnels.com/widget/form/dDQbNsT9bPJelKvn1Axp"
                  style={{
                    width: "100%",
                    height: "100%",
                    border: "none",
                    borderRadius: "3px",
                  }}
                  id="inline-dDQbNsT9bPJelKvn1Axp"
                  data-layout="{'id':'INLINE'}"
                  data-trigger-type="alwaysShow"
                  data-trigger-value=""
                  data-activation-type="alwaysActivated"
                  data-activation-value=""
                  data-deactivation-type="neverDeactivate"
                  data-deactivation-value=""
                  data-form-name="Free Webinar Lead"
                  data-height="482"
                  data-layout-iframe-id="inline-dDQbNsT9bPJelKvn1Axp"
                  data-form-id="dDQbNsT9bPJelKvn1Axp"
                  title="Free Webinar Lead"
                ></iframe>
              </div>

              {/* Book Now Button */}
              <div className="flex justify-center mt-5">
                <motion.button
                  onClick={handleBookNow}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                  className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold px-8 py-3 rounded-full shadow-md transition-all duration-300"
                >
                  Book Now
                </motion.button>
              </div>

              {/* Glow Effect */}
              <div className="absolute inset-0 rounded-3xl pointer-events-none bg-gradient-to-r from-yellow-400/20 to-orange-500/20 blur-3xl"></div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default JoinButton;
