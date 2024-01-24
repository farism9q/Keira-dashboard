import SwipperCarImages from "./SwipperCarImages";
import CarBookingDetails from "./CarBookingDetails";
import CarInfoDetails from "./CarInfoDetails";

const CarDetails = () => {
  return (
    <div className="space-y-10">
      {/* CAR IMAGES */}
      <SwipperCarImages
        images={[
          { src: "/car_1.png", alt: "car1" },
          { src: "/car_1.png", alt: "car2" },
          { src: "/car_1.png", alt: "car3" },
          { src: "/car_1.png", alt: "car4" },
        ]}
      />
      <div className="grid grid-cols-[2fr_1fr] mt-5">
        {/* FIRST COLUMN (CAR & USER INFO ) */}
        <CarInfoDetails />

        {/* SECOND COLUMN (BOOKING INFO) */}
        <CarBookingDetails />
      </div>
    </div>
  );
};

export default CarDetails;
