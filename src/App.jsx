import React from "react";
import LandingPage from "./components/LandingPage.jsx";
import Secrets from "./components/Secrets.jsx";
import DidYouKnow from "./components/DidYouKnow.jsx";
import Benefits from "./components/Benefits.jsx";
import Bonus from "./components/Bonuses.jsx";
import SuccessStories from "./components/SucessStories.jsx";
import Mentor from "./components/Mentor.jsx";
import FAQ from "./components/FAQSection.jsx";
import GlobalBanner from "./components/GlobalBanner.jsx";
import Footer from "./components/Footer.jsx";
import JoinButton from "./components/JoinButton.jsx";

function App() {
  return (
    <>
      <GlobalBanner />
      <LandingPage />
      <Secrets />
      <DidYouKnow />
      <Benefits />
      <Bonus />
      <SuccessStories />
      <Mentor />
      <FAQ />
      <Footer />
    </>
  );
}

export default App;
