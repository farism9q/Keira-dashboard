import { HiOutlineShieldCheck } from "react-icons/hi2";

import { useCarContext } from "../../contexts/CarProvider";

import GridTextIcon from "../../ui/GridTextIcon";
import InfoSection from "../../ui/InfoSection";
import CustomSkeleton from "../../ui/CustomSkeleton";

const CarDescFeatureSection = () => {
  const { car, isLoading } = useCarContext();

  if (isLoading) return <CustomSkeleton type="row" />;

  const { carDescription } = car;
  return (
    <InfoSection header={"Description & feature"}>
      <p>{carDescription}</p>
      <GridTextIcon
        data={[
          {
            icon: <HiOutlineShieldCheck />,
            text: "cheap",
          },
          {
            icon: <HiOutlineShieldCheck />,
            text: "fast",
          },
          {
            icon: <HiOutlineShieldCheck />,
            text: "quick response",
          },
          {
            icon: <HiOutlineShieldCheck />,
            text: "& more",
          },
        ]}
      />
    </InfoSection>
  );
};

export default CarDescFeatureSection;
