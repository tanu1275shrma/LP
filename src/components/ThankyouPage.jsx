// src/components/ThankYou.jsx
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";

const ThankYou = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const show = localStorage.getItem("showThankYou");
    if (!show) {
      // If opened directly without registration, go home
      navigate("/");
    }
  }, [navigate]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white">
      <Helmet>
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
            fbq('track', 'PageView');
          `}
        </script>

        <noscript>{`
          <img height="1" width="1" style="display:none"
          src="https://www.facebook.com/tr?id=2259159114243836&ev=PageView&noscript=1"/>
        `}</noscript>
      </Helmet>

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
