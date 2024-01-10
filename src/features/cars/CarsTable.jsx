import CarRow from "./CarRow";
import {
  TableHead,
  TableHeader,
  TableRow,
  Table,
  TableBody,
} from "@/components/ui/table";
import { useCars } from "./useCars";
import CustomSkeleton from "../../ui/CustomSkeleton";
import TableSkeleton from "../../ui/skeleton/TableSkeleton";

const CarsTable = () => {
  const { cars, isLoading } = useCars();

  if (isLoading) return <TableSkeleton headersLength={5} rowsLength={4} />;

  return (
    <Table>
      <TableHeader>
        <TableRow>
          {["Image", "Name", "Color", "Rating", "Address"].map((header, i) => (
            <TableHead className={`${i === 0 && "text-left"}`} key={header}>
              {header}
            </TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {cars.map(car => (
          <CarRow car={car} key={car.id} />
        ))}
      </TableBody>
    </Table>
  );
};

export default CarsTable;
