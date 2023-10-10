import Navbar from "./components/navbar/Navbar";
import About from './components/about/About';
import Carousel, { CarouselItem } from "./components/carousel/Carousel";
import Footer from "./components/footer/Footer"
import Landing from "./components/landing/Landing"
import './App.css'


const App = () => {

  return (
    <div className="MainApp">
      <Navbar/>
      <Landing/>
      <About/>
      <Carousel/>
      <Footer/>
    </div>
  );
};

export default App;
