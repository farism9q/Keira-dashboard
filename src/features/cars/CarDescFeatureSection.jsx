import { useCarContext } from "../../contexts/CarProvider";

import InfoSection from "../../ui/InfoSection";
import CustomSkeleton from "../../ui/CustomSkeleton";

const CarDescFeatureSection = () => {
  const { car, isLoading } = useCarContext();

  if (isLoading) return <CustomSkeleton type="row" />;

  const { carDescription } = car;
  return (
    <InfoSection header={"Description & feature"}>
      <p>{carDescription}</p>
    </InfoSection>
  );
};

export default CarDescFeatureSection;
