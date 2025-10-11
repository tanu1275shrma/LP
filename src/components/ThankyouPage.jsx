"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { Helmet } from "react-helmet";

/**
 * ✅ Thank You Page (with Facebook Pixel)
 * - Shows only after registration
 * - Plays a thank-you video
 * - Redirects home if accessed directly
 * - Facebook Pixel integrated (PageView tracking)
 * - Works perfectly on refresh / Vercel deployment
 */

export const dynamic = "force-dynamic";
export const revalidate = 0;
export const runtime = "nodejs";

export default function ThankYou() {
  const router = useRouter();

  useEffect(() => {
    const show = localStorage.getItem("showThankYou");
    if (!show) {
      // 🚫 Prevent direct access — redirect to home
      router.push("/");
    }
  }, [router]);

  return (
    <>
      {/* 🧠 Facebook Pixel Integration */}
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

        {/* ✅ FIX: noscript must be plain string, not JSX */}
        <noscript>{`
          <img height="1" width="1" style="display:none"
          src="https://www.facebook.com/tr?id=2259159114243836&ev=PageView&noscript=1"/>
        `}</noscript>
      </Helmet>

      {/* 🎬 Thank You Page UI */}
      <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white px-4">
        {/* 🎥 Video Section */}
        <video
          src="/thankyou-video.mp4" // place your file inside /public folder
          autoPlay
          loop
          muted
          playsInline
          className="w-full max-w-3xl rounded-lg shadow-lg"
        />

        {/* 🎉 Message */}
        <h1 className="text-3xl font-bold mt-6 text-center">
          Thank You for Registering!
        </h1>

        {/* 🔁 Back to Home */}
        <button
          onClick={() => {
            localStorage.removeItem("showThankYou");
            router.push("/");
          }}
          className="mt-6 bg-yellow-500 text-black px-6 py-3 rounded-lg hover:bg-yellow-600 transition"
        >
          Back to Home
        </button>
      </div>
    </>
  );
}
