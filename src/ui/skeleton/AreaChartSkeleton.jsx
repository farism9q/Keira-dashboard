import CustomSkeleton from "../CustomSkeleton";

const AreaChartSkeleton = () => {
  return (
    <div className="space-y-3">
      <CustomSkeleton type={"rowCell"} />
      <CustomSkeleton type={"areaChart"} />
    </div>
  );
};

export default AreaChartSkeleton;
