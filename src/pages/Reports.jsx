import ReportsTable from "../features/reports/ReportsTable";
import Heading from "../ui/Heading";
import Row from "../ui/Row";
import SortBy from "../ui/SortBy";

const Reports = () => {
  return (
    <>
      <Row>
        <Heading header={"All reports"} />
        <SortBy
          options={[
            { value: "date-desc", label: "Newest first" },
            { value: "date-asc", label: "Oldest first" },
          ]}
        />
      </Row>
      <ReportsTable />
    </>
  );
};

export default Reports;
