import { useNavigate } from "react-router-dom";

import { useDarkMode } from "../../contexts/DarkModeProvider";
import { formateFBDate } from "../../utils/helper";

import { TableCell, TableRow } from "../../components/ui/table";

import Image from "../../ui/Image";
import Tag from "../../ui/Tag";

const DashboardUserRow = ({ user }) => {
  const { darkMode } = useDarkMode();
  const navigate = useNavigate();
  const { id, fName, lName, type, profileImage, createdAt } = user;

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
    <TableRow role="button" onClick={() => navigate(`${`/users/${id}`}`)}>
      <TableCell>
        <Image src={profileImage} alt={fName + " " + lName} />
      </TableCell>
      <TableCell>{fName + " " + lName}</TableCell>
      <TableCell>
        <Tag
          text={type}
          textColor={tagColors.color}
          bgColor={tagColors.bgColor}
        />
      </TableCell>

      <TableCell>
        {
          formateFBDate({
            dates: [createdAt],
          })[0]
        }
      </TableCell>
    </TableRow>
  );
};

export default DashboardUserRow;
