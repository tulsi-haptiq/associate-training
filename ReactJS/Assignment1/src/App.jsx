import "./App.css";
// import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import FeatureSection from "./components/FeatureSection";
import CategorySection from "./components/CategorySection";


function App() {
  return (
    <>
      <div className="bg-black w-full">
        <HeroSection />
        <FeatureSection />
        <CategorySection/>
      </div>
    </>
  );
}

export default App;
