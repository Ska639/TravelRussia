import Footer from "./components/Footer.jsx";
import Hero from "./components/Hero.jsx";
import ImageSlider from "./components/ImageSlider.jsx";
import NavBar from "./components/NavBar.jsx";
import Offers from "./components/Offers.jsx";
import Plan from "./components/Plan.jsx";
import Nature from "./components/RusNature.jsx";

function App() {
  return (
    <div>
      <NavBar />
      <Hero />
      <Offers />
      <Plan />
      <Nature />
      <ImageSlider />
      <Footer />
    </div>
  );
}

export default App;
