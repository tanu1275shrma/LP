import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ThankYouPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user just registered
    const justRegistered = localStorage.getItem("justRegistered");

    if (!justRegistered) {
      // If not, redirect to home (prevents direct access or refresh)
      navigate("/", { replace: true });
    } else {
      // Clear flag so refresh will redirect next time
      localStorage.removeItem("justRegistered");
    }
  }, [navigate]);

  // OPTIONAL: Redirect to home after video ends
  const handleVideoEnd = () => {
    navigate("/", { replace: true });
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-black text-white">
      <video
        src="/thankyou-video.mp4" // put your video inside /public folder
        autoPlay
        controls={false}
        className="w-full max-w-3xl rounded-lg shadow-lg"
        onEnded={handleVideoEnd}
      ></video>

      <h1 className="text-3xl font-bold mt-6">Thank You for Registering!</h1>
      <p className="text-lg mt-2 text-gray-300">
        We’ve received your details. See you inside the session!
      </p>
    </div>
  );
};

export default ThankYouPage;
