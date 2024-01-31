import { Skeleton } from "../components/ui/skeleton";
const CustomSkeleton = ({
  type = "square",
  height = "300px",
  width = "100%",
  rounded = "lg",
}) => {
  const SkeletonType = {
    square: `h-[${height}] w-[${width}] rounded-${rounded}`,
    row: "w-full h-[3rem] rounded-md",
    smRow: "w-full h-[1rem] rounded-md",
    mdRow: "w-full h-[2rem] rounded-md",
    image: "h-full w-full rounded-full",
    headCell: "w-[6rem] h-[3rem] rounded-md",
    rowCell: "w-[6rem] h-[2rem] rounded-full",
    areaChart: "w-full h-[300px] rounded-md",
    pieChart: "w-[350px] h-[350px] rounded-full",
  };

  return (
    <Skeleton
      className={`bg-gray-500 dark:bg-gray-600 ${SkeletonType[type]} `}
    />
  );
};

export default CustomSkeleton;
