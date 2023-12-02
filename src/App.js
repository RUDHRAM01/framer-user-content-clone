import Landing from "./components/landing/Landing"
import './App.css'
import WebImage from "./components/web/WebImage";
import Feature from "./components/features/Feature";
import MoreFeature from "./components/moreFeature/MoreFeature";
import QA from "./components/q&a/QA";
import Plan from "./components/plan/Plan";
import Testimonials from "./components/testimonials/Testimonials";

function App() {
  return (
    <div className="App">
      <Landing />
      <WebImage />
      <Feature />
      <MoreFeature />
      <QA />
      <Plan />
      <Testimonials />
    </div>
  );
}

export default App;
