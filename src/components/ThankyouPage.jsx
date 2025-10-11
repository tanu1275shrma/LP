import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ThankYou = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const show = localStorage.getItem("showThankYou");
    if (!show) {
      // If someone visits directly without registering, redirect home
      navigate("/");
    }
  }, [navigate]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white">
      <video
        src="/thankyou-video.mp4"
        autoPlay
        loop
        muted
        className="w-full max-w-3xl rounded-lg shadow-lg"
      />
      <h1 className="text-3xl font-bold mt-6">Thank You for Registering!</h1>
      <button
        onClick={() => {
          localStorage.removeItem("showThankYou");
          navigate("/");
        }}
        className="mt-6 bg-yellow-500 text-black px-6 py-3 rounded-lg hover:bg-yellow-600 transition"
      >
        Back to Home
      </button>
    </div>
  );
};

export default ThankYou;
