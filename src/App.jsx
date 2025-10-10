import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import LandingPage from "./components/LandingPage.jsx";
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
    <Router>
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

        {/* 🎥 Thank You Page Route */}
        <Route path="/thankyou" element={<ThankYouPage />} />
      </Routes>
    </Router>
  );
}

export default App;
