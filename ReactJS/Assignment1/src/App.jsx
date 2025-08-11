import "./App.css";
// import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import FeatureSection from "./components/FeatureSection";
import CategorySection from "./components/CategorySection";
import GlobalError from "./components/GlobalError";

function App() {
  return (
    <div className="bg-black w-full ">
      <GlobalError />
      <HeroSection />
      <FeatureSection />
      <CategorySection />
    </div>
  );
}

export default App;
