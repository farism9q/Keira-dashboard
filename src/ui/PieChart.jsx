import Box from "./Box";
import {
  PieChart as PieChartLib,
  Cell,
  Legend,
  Pie,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

const PieChart = ({ data, header }) => {
  return (
    <Box header={header}>
      <ResponsiveContainer height={250} width={"100%"}>
        <PieChartLib>
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
            {data.map(entry => (
              <Cell fill={entry.color} stroke={entry.color} key={entry.type} />
            ))}
          </Pie>
          <Tooltip />
          <Legend
            wrapperStyle={{ fontSize: "28px" }}
            verticalAlign="middle"
            align="right"
            width="35%"
            layout="vertical"
          />
        </PieChartLib>
      </ResponsiveContainer>
    </Box>
  );
};

export default PieChart;
