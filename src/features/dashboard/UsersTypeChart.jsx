import { useUsersType } from "./useUsersType";
import CustomSkeleton from "../../ui/CustomSkeleton";
import {
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import Box from "../../ui/Box";

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

  if (isLoading) return <CustomSkeleton type={"pieChart"} />;

  const data = startData.map((type, i) => {
    return {
      ...type,
      count: usersType[i].count,
    };
  });

  return (
    <Box header={"Users type"}>
      <ResponsiveContainer height={250} width={"100%"}>
        <PieChart>
          <Pie
            legendType="square"
            data={data}
            nameKey={"type"}
            dataKey={"count"}
            innerRadius={85}
            outerRadius={110}
            cx={"40%"}
            cy={"50%"}
            paddingAngle={3}
          >
            {startData.map(entry => (
              <Cell
                fill={entry.color}
                stroke={entry.color}
                key={entry.duration}
              />
            ))}
          </Pie>
          <Tooltip />
          <Legend
            wrapperStyle={{ fontSize: "28px" }}
            verticalAlign="middle"
            align="right"
            width="30%"
            layout="vertical"
          />
        </PieChart>
      </ResponsiveContainer>
    </Box>
  );
};

export default UsersTypeChart;
