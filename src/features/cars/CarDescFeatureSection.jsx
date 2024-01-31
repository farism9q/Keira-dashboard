import { useCarContext } from "../../contexts/CarProvider";

import InfoSection from "../../ui/InfoSection";

const CarDescFeatureSection = () => {
  const { car } = useCarContext();

  const { carDescription } = car;
  return (
    <InfoSection header={"Description & feature"}>
      <p>{carDescription}</p>
    </InfoSection>
  );
};

export default CarDescFeatureSection;
