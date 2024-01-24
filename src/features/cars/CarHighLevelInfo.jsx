import { HiMiniStar, HiOutlineShieldCheck } from "react-icons/hi2";

import { useCarContext } from "../../contexts/CarProvider";

import Heading from "../../ui/Heading";
import GridTextIcon from "../../ui/GridTextIcon";
import CustomSkeleton from "../../ui/CustomSkeleton";

const CarHighLevelInfo = () => {
  const { car, isLoading } = useCarContext();

  if (isLoading) return <CustomSkeleton type="row" />;

  const { carRating, carName, carBrand } = car;

  return (
    <div>
      <Heading header={carName + " " + carBrand} />
      <span className="flex items-center gap-2 text-[21px] font-semibold">
        {carRating} <HiMiniStar className="text-blue-400" />
      </span>

      <GridTextIcon
        data={[
          {
            icon: <HiOutlineShieldCheck />,
            text: "GEAR",
          },
          {
            icon: <HiOutlineShieldCheck />,
            text: "GAS",
          },
          {
            icon: <HiOutlineShieldCheck />,
            text: "PEOPLE",
          },
          {
            icon: <HiOutlineShieldCheck />,
            text: "MARK",
          },
        ]}
      />
    </div>
  );
};

export default CarHighLevelInfo;
