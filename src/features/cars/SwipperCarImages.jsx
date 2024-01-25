import { Navigation, Scrollbar, Keyboard } from "swiper/modules";
import { Swiper as Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";

// Customized scrollbar
import "../../styles/scrollbar.css";

const SwipperCarImages = ({ images }) => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Scrollbar, Keyboard]}
      slidesPerView={1}
      className="w-full h-80"
      navigation
      keyboard={{
        enabled: true,
      }}
      centeredSlides
      scrollbar={{ draggable: true }}
      onSwiper={swiper => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
    >
      {images.map((image, idx) => (
        <SwiperSlide className="flex justify-center items-center" key={image}>
          <img src={image} alt={`Car ${idx}`} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SwipperCarImages;
