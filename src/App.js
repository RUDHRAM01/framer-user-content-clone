import Landing from "./components/landing/Landing"
import './App.css'
import WebImage from "./components/web/WebImage";
import Feature from "./components/features/Feature";
import MoreFeature from "./components/moreFeature/MoreFeature";
import QA from "./components/q&a/QA";
import Plan from "./components/plan/Plan";
import Testimonials from "./components/testimonials/Testimonials";
import Join from "./components/joinCard/Join";
import Bottom from "./components/bottom/Bottom";
import { useState, useEffect } from "react";

function App() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const checkMobileWidth = () => {
      const mobileWidthThreshold = 800;
      setIsMobile(window.innerWidth < mobileWidthThreshold);
    };
    window.addEventListener('resize', checkMobileWidth);
    checkMobileWidth();
    return () => {
      window.removeEventListener('resize', checkMobileWidth);
    };
  }, []);
  return (
    <div className="App">
      <Landing isMobile={isMobile}/>
      <WebImage />
      <Feature isMobile={isMobile}/>
      <MoreFeature isMobile={isMobile}/>
      <QA />
      <Plan />
      <Testimonials />
      <Join />
      <Bottom />
    </div>
  );
}

export default App;
