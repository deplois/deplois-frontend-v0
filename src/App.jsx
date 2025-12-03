import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";

import FooterDesktop from "./widgets/desktop/footer";
import HeaderDesktop from "./widgets/desktop/header";

function App() {
  /* 모바일 */
  const getScreenSize = () => {
    const width = window.innerWidth;
    if (width <= 480) return "mobile";
    return "desktop";
  };

  const [screenSize, setScreenSize] = useState(getScreenSize());

  useEffect(() => {
    const handleResize = () => setScreenSize(getScreenSize());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <div className="app-container">
            {screenSize === "mobile" ? <HeaderDesktop /> : <HeaderDesktop />}

            {screenSize === "mobile" ? <FooterDesktop /> : <FooterDesktop />}
          </div>
        }
      />
    </Routes>
  );
}

export default App;
