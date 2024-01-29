import { formatCurrency, formateFBDate } from "../../utils/helper";
import { useCarContext } from "../../contexts/CarProvider";

import CustomSkeleton from "../../ui/CustomSkeleton";
import ObjectInfoItem from "../../ui/ObjectInfoItem";
import Heading from "../../ui/Heading";
import LocationMap from "../../ui/LocationMap";

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
    latitude: lat,
    longitude: lng,
    carCity,
    address,
  } = car;

  const hasDeliveryOption = deliveryOption !== "لا" || carDeliveryPrice !== "";

  const carFinalPrice = hasDeliveryOption
    ? formatCurrency(+carPrice)
    : formatCurrency(+carPrice + +carDeliveryPrice);

  return (
    <div className="flex flex-col divide-y divide-gray-300 dark:divide-gray-600 space-y-4">
      {/* PRICE */}
      <ObjectInfoItem header={"Car price"}>
        <>
          <span className="font-bold">{formatCurrency(carPrice)}</span> / day
          {hasDeliveryOption && (
            <p className="text-gray-600 dark:text-gray-300">
              <span className="font-bold">{carFinalPrice}</span> total price
              with delivery option
            </p>
          )}
        </>
      </ObjectInfoItem>

      {/* DATES (STARTS AND ENDS) */}
      <div>
        <ObjectInfoItem header={"Trip start"}>
          <p>{formateFBDate({ showTime: true, dates: [carDate_start] })[0]}</p>
        </ObjectInfoItem>

        <ObjectInfoItem header={"Trip end"}>
          <p>{formateFBDate({ showTime: true, dates: [carDate_end] })[0]}</p>
        </ObjectInfoItem>
      </div>

      <ObjectInfoItem header={"insurance type"}>
        <p>{carInsurace}</p>
      </ObjectInfoItem>

      {/* CAR LOCATION */}
      <ObjectInfoItem header={"location"}>
        <div className="mt-2">
          <LocationMap lat={lat} lng={lng} popupContent={"testing"} />
          <div className="grid grid-cols-2 py-2">
            <div className="flex flex-col gap-1">
              <Heading
                as="h3"
                header={"city"}
                color="text-blue-500 dark:text-blue-300"
              />
              <span>{carCity}</span>
            </div>

            <div className="flex flex-col gap-1">
              <Heading
                as="h3"
                header={"address"}
                color="text-blue-500 dark:text-blue-300"
              />
              <span>{address}</span>
            </div>
          </div>
        </div>
      </ObjectInfoItem>
    </div>
  );
};

export default CarBookingDetails;
