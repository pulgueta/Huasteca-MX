import { Carousel } from "react-responsive-carousel";

import Nani from "../static/nani.jpg";
import Nani2 from "../static/nani2.jpg";
import Nani3 from "../static/nani3.jpg";
import Nani4 from "../static/nani4.jpg";

import "react-responsive-carousel/lib/styles/carousel.min.css";

export const Landing = () => {
  return (
    <div className="bg-neutral-600 h-full">
      <Carousel autoPlay={true} emulateTouch={true} infiniteLoop={true}>
        <div>
          <img src={Nani} className="w-20" alt="Nanisita" />
        </div>
        <div>
          <img src={Nani2} alt="Nanisita" />
        </div>
        <div>
          <img src={Nani3} alt="Nanisita" />
        </div>
        <div>
          <img src={Nani4} alt="Nanisita" />
        </div>
      </Carousel>
    </div>
  );
};
