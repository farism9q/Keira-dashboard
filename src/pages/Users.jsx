import UsersTable from "../features/users/UsersTable";
import Filter from "../ui/Filter";
import Heading from "../ui/Heading";
import Row from "../ui/Row";
import SortBy from "../ui/SortBy";

const Users = () => {
  return (
    <>
      <Row>
        <Heading header={"All users"} />

        <Row className="flex gap-2">
          <Filter
            field={"type"}
            values={[
              { value: "all", label: "All" },
              { value: "individuals", label: "Individuals" },
              {
                value: "car_rentals",
                label: "Car rentals",
              },
            ]}
          />
          <SortBy
            options={[
              {
                label: "Oldest users (Oldest First)",
                value: "createdAt-asc",
              },
              {
                label: "Newest users (Newest First)",
                value: "createdAt-desc",
              },
              {
                label: "Worst rate (Worst First)",
                value: "averageRating-asc",
              },
              {
                label: "Best rate (Best First)",
                value: "averageRating-desc",
              },
            ]}
          />
        </Row>
      </Row>
      <UsersTable />
    </>
  );
};

export default Users;
