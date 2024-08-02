import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import "./asset/css/index.scss";
import HeroSection from "./components/Home/hero";
import MadeByPap from "./components/Home/made-by";
import Mission from "./components/Home/mission";
import ValueSection from "./components/Home/value";
import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import Pricing from "./components/pricing/pricing";
import Home from "./components/Home/home";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <HeroSection />
              <ValueSection />
              <MadeByPap />
              <Mission />
            </>
          }
        />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
