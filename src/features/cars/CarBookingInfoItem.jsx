import Heading from "../../ui/Heading";

const CarBookingInfoItem = ({ header, children }) => {
  return (
    <div className="py-5">
      <Heading
        as="h4"
        header={header}
        color="text-blue-500 dark:text-blue-300"
      />
      {children}
    </div>
  );
};

export default CarBookingInfoItem;
