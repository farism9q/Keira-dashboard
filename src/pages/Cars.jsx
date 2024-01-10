import CarsTable from "../features/cars/CarsTable";
import Heading from "../ui/Heading";
import Row from "../ui/Row";
import SortBy from "../ui/SortBy";

const Cars = () => {
  return (
    <>
      <Row>
        <Heading header={"All cars"} />
        <SortBy
          options={[
            { value: "carRating-desc", label: "Rating (High First)" },
            { value: "carRating-asc", label: "Rating (Minimum First)" },
          ]}
        />
      </Row>
      <CarsTable />
    </>
  );
};

export default Cars;
