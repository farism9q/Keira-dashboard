import ReportsTable from "../features/reports/ReportsTable";
import Filter from "../ui/Filter";
import Heading from "../ui/Heading";
import Row from "../ui/Row";
import SortBy from "../ui/SortBy";

const Reports = () => {
  return (
    <>
      <Row>
        <Heading header={"All reports"} />
        <Row className="gap-2">
          <Filter
            field={"isAnswered"}
            values={[
              { value: "all", label: "all" },
              { value: true, label: "answered" },
              { value: false, label: "not answered" },
            ]}
          />

          <SortBy
            options={[
              { value: "date-desc", label: "Newest first" },
              { value: "date-asc", label: "Oldest first" },
            ]}
          />
        </Row>
      </Row>
      <ReportsTable />
    </>
  );
};

export default Reports;
