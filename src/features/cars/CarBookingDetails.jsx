import { formatCurrency, formateFBDate } from "../../utils/helper";
import { useCarContext } from "../../contexts/CarProvider";

import CustomSkeleton from "../../ui/CustomSkeleton";
import CarBookingInfoItem from "./CarBookingInfoItem";

const CarBookingDetails = () => {
  const { car, isLoading } = useCarContext();

  if (isLoading) return <CustomSkeleton type="row" />;

  const {
    carDeliveryPrice,
    carPrice,
    carInsurace,
    carDate_start,
    carDate_end,
    deliveryOption,
  } = car;

  const carFinalPrice =
    deliveryOption === "لا" || carDeliveryPrice === ""
      ? formatCurrency(+carPrice)
      : formatCurrency(+carPrice + +carDeliveryPrice);

  return (
    <div className="flex flex-col divide-y divide-gray-300 dark:divide-gray-600 space-y-4">
      {/* PRICE */}
      <CarBookingInfoItem
        header={"Car price"}
        content={
          <>
            <span className="font-bold">{formatCurrency(carPrice)}</span> / day
            <p className="text-gray-600 dark:text-gray-300">
              <span className="font-bold">{carFinalPrice}</span> total price
              with delivery option
            </p>
          </>
        }
      />

      {/* DATES (STARTS AND ENDS) */}
      <div>
        <CarBookingInfoItem
          header={"Trip start"}
          content={formateFBDate({ showTime: true, dates: [carDate_start] })[0]}
        />
        <CarBookingInfoItem
          header={"Trip end"}
          content={formateFBDate({ showTime: true, dates: [carDate_end] })[0]}
        />
      </div>

      <CarBookingInfoItem header={"insurance type"} content={carInsurace} />
    </div>
  );
};

export default CarBookingDetails;
