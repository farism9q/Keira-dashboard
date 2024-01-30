import { TOTAL_RESULTS } from "../../utils/constants";

import { useSearchParams } from "react-router-dom";

import { useCars } from "./useCars";

import {
  TableHead,
  TableHeader,
  TableRow,
  Table,
  TableBody,
} from "@/components/ui/table";
import { TableCaption } from "../../components/ui/table";
import TablePagination from "../../ui/TablePagination";
import TableSkeleton from "../../ui/skeleton/TableSkeleton";
import CarRow from "./CarRow";

const CarsTable = () => {
  const { cars, isLoading } = useCars();
  const [searchParams] = useSearchParams();

  if (isLoading) return <TableSkeleton headersLength={5} rowsLength={4} />;

  const totalPages = Math.ceil(cars.length / TOTAL_RESULTS);
  const currentPage = +searchParams.get("page") || 1;

  const paginatedCars = cars.slice(
    currentPage * TOTAL_RESULTS - TOTAL_RESULTS,
    currentPage * TOTAL_RESULTS
  );

  return (
    <Table>
      <TableHeader>
        <TableRow>
          {["Image", "Name", "Color", "Rating", "Address", ""].map(
            (header, i) => (
              <TableHead className={`${i === 0 && "text-left"}`} key={header}>
                {header}
              </TableHead>
            )
          )}
        </TableRow>
      </TableHeader>
      <TableBody>
        {paginatedCars.map(car => (
          <CarRow car={car} key={car.id} />
        ))}
      </TableBody>
      <TableCaption>
        <TablePagination
          currentPage={currentPage}
          next={currentPage < totalPages}
          previous={currentPage > 1}
        />
      </TableCaption>
    </Table>
  );
};

export default CarsTable;
