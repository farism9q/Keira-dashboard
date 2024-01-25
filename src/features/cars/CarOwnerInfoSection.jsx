import { formateFBDate } from "../../utils/helper";
import { useUser } from "../users/useUser";

import CustomSkeleton from "../../ui/CustomSkeleton";
import Heading from "../../ui/Heading";
import Image from "../../ui/Image";
import InfoSection from "../../ui/InfoSection";

const CarOwnerInfoSection = ({ userId }) => {
  const { user, isLoading } = useUser(userId);

  if (isLoading) return <CustomSkeleton type="image" />;

  return (
    <InfoSection header={"car owner"}>
      <div className="flex items-center gap-5">
        <Image src="\random_1.png" alt="user" />
        <div className="flex flex-col">
          <Heading as="h3" header={user.fName + " " + user.lName} />
          <span>
            Joined on {formateFBDate({ dates: [user.memberSince] })[0]}
          </span>
        </div>
      </div>
    </InfoSection>
  );
};

export default CarOwnerInfoSection;
