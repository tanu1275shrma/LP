import React, { useEffect, useRef } from "react";
import { Helmet } from "react-helmet";
import { useNavigate, useLocation } from "react-router-dom";
import { CheckCircle2, CalendarDays } from "lucide-react";

const ThankYouPage = () => {
  const videoRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();

  // ✅ Redirect only when user refreshes manually
  useEffect(() => {
    const navigation = performance.getEntriesByType("navigation")[0];
    const isReload = navigation && navigation.type === "reload";

    if (isReload) {
      // If page is refreshed manually, redirect to home
      navigate("/", { replace: true });
    }
  }, [navigate]);

  // ✅ Autoplay video (safe across browsers)
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const tryPlay = async () => {
      try {
        video.muted = false;
        await video.play();
      } catch (error) {
        try {
          video.muted = true;
          await video.play();
          setTimeout(() => (video.muted = false), 1000);
        } catch (innerError) {
          console.error("Autoplay failed:", innerError);
        }
      }
    };

    tryPlay();

    // Pause when not visible
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) video.play().catch(() => {});
        else video.pause();
      },
      { threshold: 0.5 }
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* ✅ Facebook Meta Pixel */}
      <Helmet>
        <script>
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '2259159114243836');
            fbq('track', 'CompleteRegistration');
          `}
        </script>

        <noscript>{`
          <img height="1" width="1" style="display:none"
          src="https://www.facebook.com/tr?id=2259159114243836&ev=PageView&noscript=1"/>
        `}</noscript>
      </Helmet>

      {/* ✅ Thank You Page Layout */}
      <div className="min-h-screen bg-[#0a0a23] flex items-center justify-center px-4 py-10">
        <div className="flex flex-col md:flex-row items-center justify-center gap-10 p-6 md:p-10 rounded-3xl border-[3px] border-yellow-500 shadow-[0_0_25px_rgba(255,200,0,0.6)] max-w-6xl w-full bg-[#0a0a23] transition-all duration-700 ease-in-out">
          {/* 🎥 VIDEO SECTION */}
          <div className="w-full md:w-1/2 flex items-center justify-center">
            <div className="relative w-full bg-black rounded-xl overflow-hidden shadow-2xl border border-gray-700">
              <video
                ref={videoRef}
                src="/images/video.mp4"
                controls
                playsInline
                preload="metadata"
                className="w-full h-auto max-h-[70vh] object-contain bg-black rounded-xl"
              >
                Your browser does not support the video tag.
              </video>
            </div>
          </div>

          {/* 📋 TEXT SECTION */}
          <div className="w-full md:w-1/2 text-white rounded-2xl p-6 md:p-8">
            <h1 className="text-3xl font-extrabold text-yellow-500 mb-5">
              Thank You for Registering!
            </h1>

            <p className="text-gray-200 text-lg leading-relaxed mb-6">
              We're thrilled to have you onboard! Watch this short video to
              learn what’s next — and how you can make the most of your
              experience.
            </p>

            <hr className="border-gray-700 mb-6" />

            <ul className="space-y-3 text-gray-300 italic">
              <li className="flex items-center gap-3">
                <CheckCircle2 className="text-green-500 w-5 h-5" />
                <span>Your registration was successful.</span>
              </li>
              <li className="flex items-center gap-3">
                <CalendarDays className="text-blue-500 w-5 h-5" />
                <span>Stay tuned — we’ll reach out to you soon!</span>
              </li>
            </ul>

            <a
              href="/"
              className="mt-8 inline-block bg-white hover:bg-yellow-500 text-black font-semibold px-8 py-3 rounded-full shadow-lg transition-transform hover:scale-105 text-center"
            >
              Back to Home
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default ThankYouPage;
