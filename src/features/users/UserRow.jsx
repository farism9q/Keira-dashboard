import { useNavigate } from "react-router-dom";

import { HiEllipsisVertical, HiOutlineTrash } from "react-icons/hi2";
import { TableCell, TableRow } from "../../components/ui/table";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "../../components/ui/popover";
import PopoverItem from "../../ui/PopoverItem";

import Image from "../../ui/Image";
import Tag from "../../ui/Tag";

const UserRow = ({ user }) => {
  const navigate = useNavigate();

  const { id, fName, lName, profileImage, averageRating, type, memberSince } =
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
      <TableCell>{memberSince}</TableCell>
      <TableCell>
        <Popover>
          <PopoverTrigger
            onClick={e => {
              e.stopPropagation();
            }}
          >
            <HiEllipsisVertical />
          </PopoverTrigger>

          <PopoverContent className="w-40">
            <PopoverItem confirmModal={true} onClick={() => {}}>
              <HiOutlineTrash />
              Delete
            </PopoverItem>
          </PopoverContent>
        </Popover>
      </TableCell>
    </TableRow>
  );
};

export default UserRow;
