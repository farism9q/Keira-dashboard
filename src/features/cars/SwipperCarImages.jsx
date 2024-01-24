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
      {images.map(image => (
        <SwiperSlide
          className="flex justify-center items-center"
          key={image.alt}
        >
          <img src={image.src} alt={image.alt} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SwipperCarImages;
