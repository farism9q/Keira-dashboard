import { useNavigate } from "react-router-dom";

import { formatCurrency } from "../../utils/helper";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "../../components/ui/card";
import { HiMiniStar } from "react-icons/hi2";

import Heading from "../../ui/Heading";

const CarCard = ({ car }) => {
  const navigate = useNavigate();

  return (
    <Card role="button" onClick={() => navigate(`/cars/${car.id}`)}>
      <CardHeader className="p-0">
        <img src={car.images[0]} alt={car.name} className="h-48" />
      </CardHeader>
      <div className="bg-gray-200 dark:bg-gray-700 pt-2">
        <CardContent>
          <Heading as="h4" header={`${car.carBrand}, ${car.carName}`} />
          <span className="flex items-center gap-2">
            {car.carRating}
            <HiMiniStar />
          </span>
        </CardContent>

        <CardFooter className="flex justify-end align-bottom">
          <p className="font-bold text-2xl">
            {formatCurrency(car.carPrice)} / day
          </p>
        </CardFooter>
      </div>
    </Card>
  );
};

export default CarCard;
