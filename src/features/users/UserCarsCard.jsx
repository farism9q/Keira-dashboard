import Heading from "../../ui/Heading";
import CarCard from "./CarCard";
import CarsSwipper from "./CarsSwipper";

// The max number that should be displayed without the swipper
// MAX is 2 which means if the total cars is 2, then it will be displayed above each other
// more than that, it will be shown as one car and the rest will be shown by swipper
const MAX_CARS_DISPLAY = 2;

const UserCarsCard = ({ cars, userName }) => {
  if (!cars.length)
    return <Heading as="h3" header={`${userName} has no cars`} />;

  return (
    <div className="grid grid-rows-1 items-center mx-4">
      <div className="flex flex-col gap-5">
        <CarCard car={cars[0]} key={cars[0].carID} />

        {cars.length == MAX_CARS_DISPLAY && (
          <CarCard car={cars[1]} key={cars[1].carID} />
        )}

        {cars.length > MAX_CARS_DISPLAY && (
          <>
            <Heading
              as="h4"
              header={`Addional cars`}
              color="text-blue-500 dark:text-blue-300"
            />
            <CarsSwipper cars={cars.slice(MAX_CARS_DISPLAY - 1)} />
          </>
        )}
      </div>
    </div>
  );
};

export default UserCarsCard;
