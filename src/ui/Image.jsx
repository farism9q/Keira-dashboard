import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import CustomSkeleton from "./CustomSkeleton";

const Image = ({ src, alt }) => {
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
