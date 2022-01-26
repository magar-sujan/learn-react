import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import slide1 from "../assets/images/slide1.jpg";
import slide2 from "../assets/images/slide2.jpg";
import slide3 from "../assets/images/slide3.jpg";
import "../styles/slider.css";

export function Slider() {
  return (
    <Carousel autoPlay={true} infiniteLoop={true}>
      <SlideItem imageUrl={slide1} quote="our product"/>
      <SlideItem imageUrl={slide2} quote="dashain offer" />
      <SlideItem imageUrl={slide3} quote="special item"/>
    </Carousel>
  );
}
//use of props
function SlideItem({ imageUrl, quote }) {
  return (
    <div className="slider-item">
      <img src={imageUrl} alt="slide" />
      <div className="slider-quote">{quote}</div>
    </div>
  );
}
