import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const JoinButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col items-center gap-4">
      {/* Main CTA Button */}
      <motion.button
        onClick={() => setIsOpen(true)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="bg-gradient-to-r from-yellow-400 to-orange-600 text-white font-semibold px-10 py-4 rounded-full shadow-[0_4px_15px_rgba(0,0,0,0.2)] transition-all duration-300"
      >
        Book Now For FREE!
      </motion.button>

      {/* Popup Form */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm flex justify-center items-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="relative bg-white/90 backdrop-blur-lg rounded-3xl p-6 sm:p-8 w-[90%] max-w-lg shadow-2xl border border-white/40 overflow-hidden"
              initial={{ scale: 0.9, opacity: 0, y: 40 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 40 }}
              transition={{ type: "spring", stiffness: 120, damping: 15 }}
            >
              {/* Close Button */}
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-5 text-gray-600 hover:text-gray-900 text-3xl leading-none"
              >
                ×
              </button>

              {/* Header */}
              <div className="text-center mb-4">
                <h2 className="text-3xl font-extrabold bg-gradient-to-r from-orange-500 to-yellow-400 text-transparent bg-clip-text">
                  Reserve Your Free Spot
                </h2>
                <p className="text-gray-600 mt-2 text-sm">
                  Limited seats available — register now!
                </p>
              </div>

              {/* Embedded MyProFunnels Form */}
              <div className="w-full h-[550px] overflow-hidden rounded-2xl border border-gray-200 shadow-inner">
                <iframe
                  src="https://ns.myprofunnels.com/widget/form/dDQbNsT9bPJelKvn1Axp"
                  style={{
                    width: "100%",
                    height: "100%",
                    border: "none",
                    borderRadius: "8px",
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

              {/* Decorative Glow */}
              <div className="absolute inset-0 rounded-3xl pointer-events-none bg-gradient-to-r from-yellow-400/20 to-orange-500/20 blur-3xl"></div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default JoinButton;
