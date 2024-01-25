import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";
import CustomSkeleton from "./CustomSkeleton";

const Image = ({ src, alt, size = "h-10 w-10" }) => {
  return (
    <Avatar className={size}>
      <AvatarImage src={src} alt={alt} />
      <AvatarFallback>
        <CustomSkeleton type={"image"} />
      </AvatarFallback>
    </Avatar>
  );
};

export default Image;
