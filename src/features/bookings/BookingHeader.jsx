import Heading from "../../ui/Heading";
import Tag from "../../ui/Tag";

const BookingHeader = ({ bookingID, strDate, endDate, bookingStatus }) => {
  const tagColors = {
    bgColor:
      bookingStatus === "تم تسليم السيارة للعميل"
        ? "bg-green-500"
        : "bg-blue-500",
    color:
      bookingStatus === "تم تسليم السيارة للعميل"
        ? "text-green-50"
        : "text-blue-50",
  };

  return (
    <header className="flex gap-6 items-center uppercase">
      <Heading header={`Booking #${bookingID}`} />
      <Tag
        text={bookingStatus}
        textColor={tagColors["color"]}
        bgColor={tagColors["bgColor"]}
      />
    </header>
  );
};

export default BookingHeader;
