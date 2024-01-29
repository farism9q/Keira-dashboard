import { Navigation, Scrollbar, Keyboard } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";

// Customized scrollbar
import "../../styles/scrollbar.css";
import CarCard from "./CarCard";

const CarsSwipper = ({ cars }) => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Scrollbar, Keyboard]}
      slidesPerView={1}
      className="w-[35rem] h-80"
      navigation
      keyboard={{
        enabled: true,
      }}
      centeredSlides
      onSwiper={swiper => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
    >
      {cars.map(car => (
        <SwiperSlide
          className="flex justify-center items-center"
          key={car.carID}
        >
          <div className="px-10">
            <CarCard car={car} />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default CarsSwipper;
