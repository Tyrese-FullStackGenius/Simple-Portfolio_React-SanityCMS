import React, {useContext} from "react";
import { Navbar } from "./components";
import {
  Home,
  About,
  Skills,
  Services,
  Work,
  Testimonials,
  Contact,
  Footer
} from "./container";
import { LightModeContext } from "./themeContext";

import "./App.scss";
import "./themeContext.scss";

function App() {
  const {lightMode} = useContext(LightModeContext);

  return (
    <div id="theme" className={lightMode? "light-theme" : ""}>
      <Navbar />

      <div className="main">
        <Home/>
        <About/>
        <Skills/>
        <Services/>
        <Work/>
        <Testimonials/>
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
