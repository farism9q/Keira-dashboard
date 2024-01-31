import { useCarContext } from "../../contexts/CarProvider";

import CarDescFeatureSection from "./CarDescFeatureSection";
import CarHighLevelInfo from "./CarHighLevelInfo";
import CarOwnerInfoSection from "./CarOwnerInfoSection";

const CarInfoDetails = () => {
  const { car } = useCarContext();

  return (
    <div className="flex flex-col gap-20">
      {/* CAR HIGH-LEVEL INFO */}
      <CarHighLevelInfo />

      {/* CAR OWNER */}
      <CarOwnerInfoSection userId={car.userID} />

      {/* CAR DESCRIPTION & FEATURE */}
      <CarDescFeatureSection />
    </div>
  );
};

export default CarInfoDetails;
