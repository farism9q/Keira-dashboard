import { TableCell, TableRow } from "@/components/ui/table";
import Image from "../../ui/Image";

const CarRow = ({ car }) => {
  const { images, carName, carColor, carRating, address } = car;
  return (
    <TableRow>
      <TableCell>
        <Image src={images.at(0)} alt={carName} />
      </TableCell>
      <TableCell>{carName}</TableCell>
      <TableCell>{carColor}</TableCell>
      <TableCell>{carRating}</TableCell>
      <TableCell>{address}</TableCell>
    </TableRow>
  );
};

export default CarRow;
