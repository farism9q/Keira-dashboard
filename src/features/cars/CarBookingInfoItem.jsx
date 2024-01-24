import Heading from "../../ui/Heading";

const CarBookingInfoItem = ({ header, content }) => {
  return (
    <div className="py-5">
      <Heading
        as="h4"
        header={header}
        color="text-blue-500 dark:text-blue-300"
      />
      <p>{content}</p>
    </div>
  );
};

export default CarBookingInfoItem;
