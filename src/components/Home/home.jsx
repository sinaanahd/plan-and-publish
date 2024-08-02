import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import HeroSection from "./hero";
import ValueSection from "./value";
import MadeByPap from "./made-by";

import Mission from "./mission";
import FinalCTA from "./final-cta";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Plan and Publish | Home</title>
      </Helmet>
      <HeroSection />
      <ValueSection />
      <MadeByPap />
      <Mission />
      <FinalCTA />
    </>
  );
};

export default Home;
