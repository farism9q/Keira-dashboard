import { useNavigate } from "react-router-dom";

import { HiEllipsisVertical, HiOutlineTrash } from "react-icons/hi2";
import { TableCell, TableRow } from "../../components/ui/table";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "../../components/ui/popover";

import Image from "../../ui/Image";
import Tag from "../../ui/Tag";
import ConfirmModal from "../../ui/ConfirmModal";
import { useDeleteUser } from "./useDeleteUser";
import { formateFBDate } from "../../utils/helper";

const UserRow = ({ user }) => {
  const navigate = useNavigate();
  const { deleteUser } = useDeleteUser();

  const { id, fName, lName, profileImage, averageRating, type, createdAt } =
    user;
  const fullName = fName + " " + lName;

  const tagColors = {
    bgColor: type === "فرد" ? "bg-blue-400" : "bg-amber-600",
    color: type === "فرد" ? "text-blue-50" : "text-green-50",
  };

  return (
    <TableRow role="button" onClick={() => navigate(`${id}`)}>
      <TableCell>
        <Image src={profileImage} alt={fullName} />
      </TableCell>
      <TableCell>{fullName}</TableCell>
      <TableCell>
        <Tag
          text={type}
          textColor={tagColors.color}
          bgColor={tagColors.bgColor}
        />
      </TableCell>

      <TableCell>{averageRating}</TableCell>
      <TableCell>{formateFBDate({ dates: [createdAt] })[0]}</TableCell>
      <TableCell>
        <Popover>
          <PopoverTrigger
            onClick={e => {
              e.stopPropagation();
            }}
          >
            <HiEllipsisVertical size={28} />
          </PopoverTrigger>

          <PopoverContent className="w-40">
            <ConfirmModal value={id} onConfirm={() => deleteUser(id)}>
              <div role="button" className="flex items-center gap-2">
                <HiOutlineTrash />
                Delete
              </div>
            </ConfirmModal>
          </PopoverContent>
        </Popover>
      </TableCell>
    </TableRow>
  );
};

export default UserRow;
