import { TableCell, TableRow } from "@/components/ui/table";

import { useDarkMode } from "../../contexts/DarkModeProvider";

import Image from "../../ui/Image";
import Tag from "../../ui/Tag";

const UserRow = ({ user }) => {
  const { darkMode } = useDarkMode();

  const { fName, lName, profileImage, averageRating, type, memberSince } = user;
  const fullName = fName + " " + lName;

  const tagColors = darkMode
    ? {
        bgColor: type === "فرد" ? "bg-green-500" : "bg-blue-500",
        color: type === "فرد" ? "text-green-50" : "text-blue-50",
      }
    : {
        bgColor: type === "فرد" ? "bg-blue-600" : "bg-amber-500",
        color: type === "فرد" ? "text-blue-50" : "text-amber-50",
      };

  return (
    <TableRow>
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
      <TableCell></TableCell>
    </TableRow>
  );
};

export default UserRow;
