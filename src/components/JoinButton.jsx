import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const JoinButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col items-center gap-4">
      {/* Main Call-To-Action Button */}
      <motion.button
        onClick={() => setIsOpen(true)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="bg-gradient-to-r from-yellow-400 to-orange-600 text-white font-semibold px-8 sm:px-10 py-3 sm:py-4 rounded-full shadow-[0_4px_15px_rgba(0,0,0,0.2)] text-base sm:text-lg transition-all duration-300"
      >
        Book Now For FREE!
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
              className="relative bg-white/90 backdrop-blur-xl rounded-3xl p-5 sm:p-8 w-full max-w-[95%] sm:max-w-lg md:max-w-2xl shadow-2xl border border-white/40 overflow-hidden"
              initial={{ scale: 0.9, opacity: 0, y: 40 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 40 }}
              transition={{ type: "spring", stiffness: 120, damping: 15 }}
            >
              {/* Close Button */}
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-3 right-4 text-gray-600 hover:text-gray-900 text-3xl leading-none"
              >
                ×
              </button>

              {/* Heading */}
              <div className="text-center mb-4">
                <h2 className="text-2xl sm:text-3xl font-extrabold bg-gradient-to-r from-orange-500 to-yellow-400 text-transparent bg-clip-text">
                  Reserve Your Free Spot
                </h2>
                <p className="text-black mt-2 text-2xl sm:text-sm">
                  Limited seats available — register now!
                </p>
              </div>

              {/* Responsive Iframe Container */}
              <div className="w-full h-[480px] sm:h-[550px] md:h-[600px] overflow-hidden rounded-2xl border border-gray-200 shadow-inner bg-white">
                <iframe
                  src="https://ns.myprofunnels.com/widget/form/dDQbNsT9bPJelKvn1Axp"
                  style={{
                    width: "100%",
                    height: "100%",
                    border: "none",
                    borderRadius: "12px",
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
                  data-height="undefined"
                  data-layout-iframe-id="inline-dDQbNsT9bPJelKvn1Axp"
                  data-form-id="dDQbNsT9bPJelKvn1Axp"
                  title="Free Webinar Lead"
                ></iframe>
              </div>

              {/* External Script */}
              <script src="https://ns.myprofunnels.com/js/form_embed.js"></script>

              {/* Soft Glow Effect */}
              <div className="absolute inset-0 rounded-3xl pointer-events-none bg-gradient-to-r from-yellow-400/20 to-orange-500/20 blur-3xl"></div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default JoinButton;
