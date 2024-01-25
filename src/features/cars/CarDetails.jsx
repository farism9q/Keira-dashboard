import { useCarContext } from "../../contexts/CarProvider";

import SwipperCarImages from "./SwipperCarImages";
import CarBookingDetails from "./CarBookingDetails";
import CarInfoDetails from "./CarInfoDetails";
import CustomSkeleton from "../../ui/CustomSkeleton";

const CarDetails = () => {
  const { car, isLoading } = useCarContext();
  if (isLoading) return <CustomSkeleton />;

  return (
    <div className="space-y-10">
      {/* CAR IMAGES */}
      <SwipperCarImages images={car.images} />
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
