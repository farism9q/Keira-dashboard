import { Skeleton } from "../components/ui/skeleton";
const CustomSkeleton = ({ type }) => {
  const SkeletonType = {
    image: "h-10 w-10 rounded-full",
    headCell: "w-[6rem] h-[3rem] rounded-md",
    rowCell: "w-[6rem] h-[2rem] rounded-full",
  };

  return (
    <Skeleton
      className={`bg-gray-500 dark:bg-gray-600 ${SkeletonType[type]} `}
    />
  );
};

// <div className="bg-red-500">

//   <Skeleton className={SkeletonType["image"]} />
//   <Skeleton className={SkeletonType["rowCell"]} />
// </div>

export default CustomSkeleton;
