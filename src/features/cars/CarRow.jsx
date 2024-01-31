import { useNavigate } from "react-router-dom";

import { TableCell, TableRow } from "../../components/ui/table";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../../components/ui/popover";
import { HiEllipsisVertical, HiOutlineTrash } from "react-icons/hi2";

import Image from "../../ui/Image";
import ConfirmModal from "../../ui/ConfirmModal";

const CarRow = ({ car }) => {
  const navigate = useNavigate();
  const { carID, images, carName, carColor, carRating, address } = car;
  return (
    <TableRow role="button" onClick={() => navigate(`${carID}`)}>
      <TableCell>
        <Image src={images.at(0)} alt={carName} />
      </TableCell>
      <TableCell>{carName}</TableCell>
      <TableCell>{carColor}</TableCell>
      <TableCell>{carRating}</TableCell>
      <TableCell>{address}</TableCell>
      <TableCell>
        {
          <Popover>
            <PopoverTrigger
              onClick={e => {
                e.stopPropagation();
              }}
            >
              <HiEllipsisVertical size={28} />
            </PopoverTrigger>

            <PopoverContent className="w-40">
              <ConfirmModal
                value={carID}
                onConfirm={() => {
                  console.log("deleted");
                }}
              >
                <div role="button" className="flex items-center gap-2">
                  <HiOutlineTrash />
                  Delete
                </div>
              </ConfirmModal>
            </PopoverContent>
          </Popover>
        }
      </TableCell>
    </TableRow>
  );
};

export default CarRow;
