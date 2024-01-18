import { useUsersType } from "./useUsersType";
import CustomSkeleton from "../../ui/CustomSkeleton";
import PieChart from "../../ui/PieChart";

const startData = [
  {
    type: "Individuals",
    count: 0,
    color: "#14b8a6",
  },

  {
    type: "Car rentals",
    count: 0,
    color: "#f97316",
  },
];

const UsersTypeChart = () => {
  const { usersType, isLoading } = useUsersType();

  if (isLoading) return <CustomSkeleton rounded="lg" />;

  const data = startData.map((type, i) => {
    return {
      ...type,
      count: usersType[i].count,
    };
  });

  return <PieChart data={data} header={"User Types"} />;
};

export default UsersTypeChart;
