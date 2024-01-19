import { HiOutlineInformationCircle } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";
import Box from "../../ui/Box";
import Status from "../../ui/Status";
import Tag from "../../ui/Tag";
import ReportDetailsItem from "./ReportDetailsItem";

const userTypeColors = {
  customer: {
    color: "text-blue-50",
    bgColor: "bg-blue-600",
  },
  carRental: {
    color: "text-green-50",
    bgColor: "bg-green-600",
  },
};

const ReportDetailsBox = ({ report }) => {
  const navigate = useNavigate();

  const {
    userID,
    carID,
    isAnswered,
    typeOfReport,
    date,
    reportComments,
    userType,
  } = report;

  const colors =
    userType === "عميل"
      ? {
          text: userTypeColors.customer.color,
          bgColor: userTypeColors.customer.bgColor,
        }
      : {
          text: userTypeColors.carRental.color,
          bgColor: userTypeColors.carRental.bgColor,
        };

  return (
    <Box>
      <div className="flex justify-center">
        <Status color={isAnswered ? "green" : "red"} />
        <Tag text={userType} bgColor={colors.bgColor} textColor={colors.text} />
      </div>

      <div className="flex flex-col justify-center space-y-3">
        <ReportDetailsItem
          field={"Reporter Id"}
          value={
            <div className="flex items-center justify-center gap-4 text-2xl">
              #{userID}
              <HiOutlineInformationCircle
                className="cursor-pointer"
                onClick={() => navigate(`/users/${userID}`)}
              />
            </div>
          }
        />

        <ReportDetailsItem
          field={"Car Id"}
          value={
            <div className="flex items-center justify-center gap-4 text-2xl">
              #{carID}
              <HiOutlineInformationCircle
                className="cursor-pointer"
                onClick={() => navigate(`/cars/${carID}`)}
              />
            </div>
          }
        />

        <ReportDetailsItem field={"Type"} value={typeOfReport} />

        <ReportDetailsItem field={"comment"} value={reportComments} />
      </div>

      <footer className="flex justify-end">
        <p>
          <span className="font-bold tracking-wider">Initiated on</span> {date}
        </p>
      </footer>
    </Box>
  );
};

export default ReportDetailsBox;
