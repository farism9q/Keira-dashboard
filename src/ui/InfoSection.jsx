import React from "react";
import Heading from "./Heading";

const InfoSection = ({ header, children }) => {
  return (
    <div className="space-y-4">
      <Heading as="h4" header={header} />
      {children}
    </div>
  );
};

export default InfoSection;
