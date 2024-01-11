import { Skeleton } from "../components/ui/skeleton";
const CustomSkeleton = ({ type }) => {
  const SkeletonType = {
    image: "h-10 w-10 rounded-full",
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
