import {
  TableRow,
  TableHeader,
  TableHead,
  Table,
  TableBody,
  TableCell,
} from "../../components/ui/table";
import CustomSkeleton from "../CustomSkeleton";

const TableSkeleton = ({ headersLength, rowsLength }) => {
  const headersArray = Array(headersLength).fill("");
  const rowsArray = Array(rowsLength).fill("");

  return (
    <Table>
      <TableHeader>
        <TableRow>
          {headersArray.map((el, i) => (
            <TableHead key={i}>
              <CustomSkeleton type={"headCell"} />
            </TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {rowsArray.map((el, j) => (
          <TableRow key={j}>
            {headersArray.map((el, k) => (
              <TableCell key={k}>
                <CustomSkeleton type={"rowCell"} />
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default TableSkeleton;
