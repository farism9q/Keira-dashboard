import CustomSkeleton from "../CustomSkeleton";

const UserInfoSkeleton = () => {
  return (
    <div className="flex gap-2 w-full">
      <div className="w-12 h-12">
        <CustomSkeleton type="image" />
      </div>
      <div className="flex flex-col gap-4 w-full h-full">
        <div className="w-20">
          <CustomSkeleton type="smRow" />
        </div>
        <div className="w-40">
          <CustomSkeleton type={"mdRow"} />
        </div>
      </div>
    </div>
  );
};

export default UserInfoSkeleton;
