import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import CustomSkeleton from "./CustomSkeleton";

const Image = ({ src, alt }) => {
  // return <img className="w-14 h-14 rounded-full" src={src} alt={alt} />;
  return (
    <Avatar>
      <AvatarImage src={src} alt={alt} />
      <AvatarFallback>
        <CustomSkeleton type={"image"} />
      </AvatarFallback>
    </Avatar>
  );
};

export default Image;
