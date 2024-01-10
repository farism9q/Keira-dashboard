import UsersTable from "../features/users/UsersTable";
import Heading from "../ui/Heading";
import Row from "../ui/Row";
import SortBy from "../ui/SortBy";

const Users = () => {
  return (
    <>
      <Row>
        <Heading header={"All users"} />
        <SortBy
          options={[
            {
              label: "Oldest users (Oldest First)",
              value: "memberSince-asc",
            },
            {
              label: "Newest users (Newest First)",
              value: "memberSince-desc",
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
      <UsersTable />
    </>
  );
};

export default Users;
