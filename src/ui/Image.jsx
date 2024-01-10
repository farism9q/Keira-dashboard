import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Image = ({ src, alt }) => {
  // return <img className="w-14 h-14 rounded-full" src={src} alt={alt} />;
  return (
    <Avatar>
      <AvatarImage src={src} alt={alt} />
      <AvatarFallback>K</AvatarFallback>
    </Avatar>
  );
};

export default Image;
