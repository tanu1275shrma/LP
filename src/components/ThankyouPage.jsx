import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";

const ThankYou = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const show = localStorage.getItem("showThankYou");
    if (!show) {
      localStorage.setItem("showThankYou", "true");
    }
  }, []);

  const handleBackHome = () => {
    localStorage.removeItem("showThankYou");
    navigate("/");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-black text-white p-4 md:p-8">
      <Helmet>
        {/* Facebook Pixel */}
        <script>
          {`
            !function(f,b,e,v,n,t,s)
            {if(!f._fbq)f._fbq=n;
              n.callMethod? n.callMethod.apply(n,arguments):n.queue.push(arguments);
              if(!f._fbq)f._fbq=n;
              n.push=n;
              n.loaded=!0;n.version='2.0';
              n.queue=[];
              t=b.createElement(e);t.async=!0;
              t.src=v;
              s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}
            (window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '2259159114243836');
            fbq('track', 'RegistrationComplete');
          `}
        </script>

        <noscript>{`
          <img height="1" width="1" style="display:none"
          src="https://www.facebook.com/tr?id=2259159114243836&ev=PageView&noscript=1"/>
        `}</noscript>
      </Helmet>

      {/* 🌟 Glowing Container */}
      <div className="flex flex-col md:flex-row items-center justify-between bg-gradient-to-b from-gray-900 via-black to-gray-900 rounded-3xl border border-yellow-400 shadow-[0_0_30px_rgba(255,255,0,0.6)] p-6 md:p-10 max-w-6xl w-full">
        {/* 🎥 Left Side - Video */}
        <div className="flex-1 flex justify-center mb-8 md:mb-0">
          <video
            src="/images/video.mp4"
            controls
            autoPlay
            loop
            className="w-full max-w-md rounded-2xl shadow-lg border border-yellow-300"
          />
        </div>

        {/* 💬 Right Side - Text */}
        <div className="flex-1 text-center md:text-left md:pl-10">
          <h1 className="text-3xl md:text-5xl font-extrabold text-yellow-400 mb-4">
            ThankYou for Registering!
          </h1>
          <p className="text-base md:text-lg text-gray-300 mb-6 leading-relaxed">
            There’s so much more to explore and learn ahead. Through this course
            and our upcoming webinars, we’ll grow, learn, and achieve together.
            <br />
          </p>
          <button
            onClick={handleBackHome}
            className="bg-yellow-500 text-black font-semibold px-6 py-3 rounded-lg hover:bg-yellow-600 transition-all"
          >
            Back to Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;
