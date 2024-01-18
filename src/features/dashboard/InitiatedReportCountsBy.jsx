import CustomSkeleton from "../../ui/CustomSkeleton";
import PieChart from "../../ui/PieChart";
import { useReportCountsBy } from "./useReportCountsBy";

const startData = [
  {
    type: "By individuals",
    count: 0,
    color: "#14b8a6",
  },

  {
    type: "By car rentals",
    count: 0,
    color: "#f97316",
  },
];

const InitiatedReportCountsChart = () => {
  const { initiatedReportCountsBy, isLoading } = useReportCountsBy();

  if (isLoading) return <CustomSkeleton rounded="lg" />;

  const data = startData.map((type, i) => {
    return {
      ...type,
      count: initiatedReportCountsBy[i].count,
    };
  });

  return <PieChart data={data} header={"Report Initiations"} />;
};

export default InitiatedReportCountsChart;
