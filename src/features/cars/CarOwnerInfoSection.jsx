import { formateFBDate } from "../../utils/helper";
import { useUser } from "../users/useUser";

import CustomSkeleton from "../../ui/CustomSkeleton";
import Heading from "../../ui/Heading";
import Image from "../../ui/Image";
import InfoSection from "../../ui/InfoSection";
import { Link } from "react-router-dom";

const CarOwnerInfoSection = ({ userId }) => {
  const { user, isLoading } = useUser(userId);

  if (isLoading) return <CustomSkeleton type="image" />;

  const { fName, lName, memberSince, profileImage } = user;

  return (
    <InfoSection header={"car owner"}>
      <Link to={`/users/${userId}`}>
        <div className="flex items-center gap-5 mt-2">
          <Image src={profileImage} alt={fName + " " + lName} />
          <div className="flex flex-col">
            <Heading as="h3" header={fName + " " + lName} />
            <span>Joined on {formateFBDate({ dates: [memberSince] })[0]}</span>
          </div>
        </div>
      </Link>
    </InfoSection>
  );
};

export default CarOwnerInfoSection;
