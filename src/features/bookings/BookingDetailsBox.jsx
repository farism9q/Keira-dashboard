import { differenceInDays } from "date-fns";
import { format } from "date-fns";

import { formatCurrency } from "../../utils/helper";
import { BOOKING_CHARGE } from "../../utils/constants";

import {
  HiOutlineCheckCircle,
  HiOutlineCurrencyDollar,
  HiOutlineInformationCircle,
  HiOutlineUserCircle,
} from "react-icons/hi2";

import Heading from "../../ui/Heading";
import Tag from "../../ui/Tag";

const BookingDetailsBox = ({
  booking: {
    bookingTimeSD,
    bookingTimeED,
    carID,
    userID,
    deliveryOption,
    deliveryPrice,
    carPrice,
    bookingDate,
  },
}) => {
  const feesPrice = BOOKING_CHARGE * carPrice;
  const totalPrice =
    Number(carPrice) +
    (deliveryPrice !== "لايوجد" ? +deliveryPrice : 0) +
    feesPrice;

  const headerText = `Booked for ${differenceInDays(
    bookingTimeED.split(" ")[0],
    bookingTimeSD.split(" ")[0]
  ).toString()} days only`;

  return (
    <div className="rounded-md bg-white dark:bg-gray-600/50">
      <div className="flex items-center justify-between rounded-t-md bg-blue-600 py-8 px-10 text-white font-semibold">
        <Heading as="h2" header={headerText} />

        <p className="text-slate-300 text-2xl">
          {bookingTimeSD} &mdash; {bookingTimeED}
        </p>
      </div>
      <div className="flex flex-col p-6 space-y-10 text-[28px] text-black dark:text-white">
        <div className="flex items-center gap-4">
          <div className="flex items-center justify-center gap-2">
            <HiOutlineInformationCircle className="cursor-pointer text-blue-600 dark:text-blue-400" />
            <p>
              Car ID{" "}
              <span className="text-gray-500 dark:text-muted-foreground">
                {" "}
                #{carID}
              </span>
            </p>
          </div>
          <div className="flex items-center justify-center gap-2">
            <HiOutlineUserCircle className="cursor-pointer text-blue-600 dark:text-blue-400" />
            <p>
              User ID
              <span className="text-gray-500 dark:text-muted-foreground">
                {" "}
                #{userID}{" "}
              </span>
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <HiOutlineCheckCircle className="text-blue-600 dark:text-blue-400" />
          Delievery Option:{" "}
          <Tag
            bgColor={"bg-blue-300 dark:bg-blue-500/80"}
            textColor={"text-blue-900 dark:text-slate-50"}
            text={deliveryOption}
          />
        </div>

        <div className="flex justify-between items-center bg-green-300/60 text-green-900 dark:bg-green-600/60 dark:text-green-200 rounded-lg py-8 px-10">
          <p className="flex gap-6">
            <span className="font-semibold flex items-center gap-2">
              <HiOutlineCurrencyDollar size={34} />
              Total Price
            </span>{" "}
            {formatCurrency(totalPrice)}
            {deliveryPrice !== "لايوجد" &&
              ` ( ${carPrice} Car Price + ${deliveryPrice} Delivery Price + ${feesPrice} Fees )`}
          </p>
          <span className="uppercase font-bold">PAID</span>
        </div>

        <footer className="flex justify-end items-center text-sm text-muted-foreground">
          <p>Booked {format(new Date(bookingDate), "EEE, MMM dd yyyy, p")}</p>
        </footer>
      </div>
    </div>
  );
};

export default BookingDetailsBox;
