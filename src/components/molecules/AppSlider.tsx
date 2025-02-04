import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import PopularProductCard from "../organisms/PopularProductCard";
import { popularProductDetails } from "../../data";
import ArrowLeft from "../atoms/arrowLeft";
import ArrowRight from "../atoms/arrowRight";

interface ArrowProps {
  onClick?: () => void;
}

const NextArrow = ({ onClick }: ArrowProps) => {
  return (
    <div className="" onClick={onClick}>
      <ArrowRight />
    </div>
  );
};

const PrevArrow = ({ onClick }: ArrowProps) => {
  return (
    <div className="" onClick={onClick}>
      <ArrowLeft />
    </div>
  );
};

export default function AppSlider() {
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    swipeToSlide: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  return (
    <div className="">
      <Slider {...settings}>
        {popularProductDetails.map((product, index) => (
          <PopularProductCard key={index} {...product} />
        ))}
      </Slider>
    </div>
  );
}
