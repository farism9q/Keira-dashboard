import { HiMiniStar, HiOutlineShieldCheck } from "react-icons/hi2";
import { AiOutlineBgColors } from "react-icons/ai";
import { GiCarDoor } from "react-icons/gi";
import { IoIosPeople } from "react-icons/io";
import { TbAutomaticGearbox } from "react-icons/tb";

import { useCarContext } from "../../contexts/CarProvider";

import Heading from "../../ui/Heading";
import GridTextIcon from "../../ui/GridTextIcon";
import CustomSkeleton from "../../ui/CustomSkeleton";

const CarHighLevelInfo = () => {
  const { car, isLoading } = useCarContext();

  if (isLoading) return <CustomSkeleton type="row" />;

  const {
    carRating,
    carName,
    carBrand,
    carModel,
    carType,
    carDoor,
    carGearBox,
    carColor,
    carPeople,
  } = car;

  return (
    <div className="space-y-2">
      <div>
        <Heading
          header={carName + " " + carBrand + " " + carModel + " - " + carType}
        />
        <span className="flex items-center gap-2 text-[21px] font-semibold">
          {carRating} <HiMiniStar className="text-blue-400" />
        </span>
      </div>

      <GridTextIcon
        data={[
          {
            icon: <GiCarDoor />,
            text: `${carDoor} doors`,
          },
          {
            icon: <IoIosPeople />,
            text: `${carPeople} people`,
          },
          {
            icon: <AiOutlineBgColors />,
            text: carColor,
          },
          {
            icon: <TbAutomaticGearbox />,
            text: carGearBox,
          },
        ]}
      />
    </div>
  );
};

export default CarHighLevelInfo;
