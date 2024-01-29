import { useParams } from "react-router-dom";

import { useUser } from "./useUser";
import { useUserCars } from "./useUserCars";

import { formateFBDate } from "../../utils/helper";

import { PiDotOutlineFill } from "react-icons/pi";
import { CiMail, CiPhone, CiHome } from "react-icons/ci";

import CustomSkeleton from "../../ui/CustomSkeleton";
import Image from "../../ui/Image";
import Heading from "../../ui/Heading";
import ObjectInfoItem from "../../ui/ObjectInfoItem";
import Tag from "../../ui/Tag";
import UserCarsCard from "./UserCarsCard";

const UserDetails = () => {
  const { userId } = useParams();
  const { user, isLoading } = useUser(userId);
  const { userCars, isLoading: userCarsLoading } = useUserCars(userId);

  if (isLoading) return <CustomSkeleton />;

  const {
    profileImage,
    fName,
    lName,
    type,
    address,
    memberSince,
    email,
    phoneNumber,
    telephone,
    bDate,
    description,
  } = user;

  return (
    <>
      <Image
        src={profileImage}
        alt={`${fName} ${lName} image`}
        size="w-44 h-44"
      />
      <div className="grid grid-cols-[1fr_2fr] gap-4">
        <div className="flex flex-col divide-y divide-gray-300 dark:divide-gray-600 space-y-4">
          <div className="space-y-2">
            <span className="flex items-center gap-4">
              <Heading as="h2" header={fName + " " + lName} />
              <Tag
                text={type}
                bgColor={type === "فرد" ? "bg-green-500" : "bg-orange-500"}
              />
            </span>

            <p>{address}</p>
            <p className="flex items-center">
              <span>
                <PiDotOutlineFill size={32} />
              </span>
              Joined on {formateFBDate({ dates: [memberSince] })[0]}
            </p>
          </div>
          <ObjectInfoItem header={"contacts"}>
            <div className="space-y-1 text-lg">
              <div className="flex justify-between items-center">
                <span className="flex items-center gap-2">
                  <CiMail /> Email
                </span>
                <p>{email}</p>
              </div>

              <div className="flex justify-between items-center">
                <span className="flex items-center gap-2">
                  <CiPhone /> Phone number
                </span>
                <p>{phoneNumber}</p>
              </div>

              {telephone && (
                <div className="flex justify-between items-center">
                  <span className="flex items-center gap-2">
                    <CiHome /> Telephone
                  </span>
                  <p>{telephone}</p>
                </div>
              )}
            </div>
          </ObjectInfoItem>

          <ObjectInfoItem header={"birth date"}>
            <p>{formateFBDate({ dates: [bDate] })[0]}</p>
          </ObjectInfoItem>
        </div>

        {/* SECOND COLUMN */}
        <div className="flex flex-col divide-y w-[75%] divide-gray-300 dark:divide-gray-600 space-y-4">
          <div>
            <Heading
              as="h2"
              header={"DESCRIPTION"}
              color="text-blue-300 dark:text-color-500"
            />
            <p>{description}</p>
          </div>
          <div className="py-5 space-y-5">
            <Heading
              as="h2"
              header={fName + " " + lName + " cars"}
              color="text-blue-300 dark:text-color-500"
            />
            {userCarsLoading ? (
              <CustomSkeleton />
            ) : (
              <UserCarsCard cars={userCars} userName={fName + " " + lName} />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default UserDetails;
