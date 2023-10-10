import Navbar from "./components/navbar/Navbar";
import About from './components/about/About';
import Carousel, { CarouselItem } from "./components/carousel/Carousel";
import Footer from "./components/footer/Footer"
import './App.css'


const App = () => {

  return (
    <div className="MainApp">
      <Navbar/>
      <About/>
      <Carousel/>
      <Footer/>
    </div>
  );
};

export default App;
