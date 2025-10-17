import React from "react";
import { Routes, Route } from "react-router-dom";
import { Helmet } from "react-helmet";

import LandingPage from "./components/LandingPage.jsx";
import Webinar from "./components/Webinar.jsx";
import ThankYouPage from "./components/ThankyouPage.jsx";
import Secrets from "./components/Secrets.jsx";
import DidYouKnow from "./components/DidYouKnow.jsx";
import Benefits from "./components/Benefits.jsx";
import Bonus from "./components/Bonuses.jsx";
import SuccessStories from "./components/SucessStories.jsx";
import Mentor from "./components/Mentor.jsx";
import FAQ from "./components/FAQSection.jsx";
import GlobalBanner from "./components/GlobalBanner.jsx";
import Footer from "./components/Footer.jsx";
import WhoIsThisFor from "./components/WhoIsThisFor.jsx";
import ReviewSection from "./components/ReviewSection.jsx";

function App() {
  return (
    <>
      {/* ✅ Facebook Meta Pixel Code */}
      <Helmet>
        {`<script>
!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '2259159114243836');
fbq('track', 'PageView');
</script>`}
        <noscript>{`<img height="1" width="1" style="display:none"
src="https://www.facebook.com/tr?id=2259159114243836&ev=PageView&noscript=1"
/>`}</noscript>
      </Helmet>
      {/* ✅ End Meta Pixel Code */}

      <Routes>
        <Route
          path="/"
          element={
            <>
              <GlobalBanner />
              <LandingPage />
              <Secrets />
              <DidYouKnow />
              <Benefits />
              <Bonus />
              <WhoIsThisFor />
              <Mentor />
              <SuccessStories />
              <ReviewSection />
              <FAQ />
              <Footer />
            </>
          }
        />
        <Route path="/thankyou" element={<ThankYouPage />} />
      </Routes>
    </>
  );
}

export default App;
