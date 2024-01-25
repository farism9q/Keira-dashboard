const Tag = ({ text, textColor, bgColor }) => {
  return (
    <span
      className={`rounded-full px-3 ${textColor} ${bgColor} bg-opacity-70 py-1 text-center text-xs uppercase shadow-md dark:shadow-transparent`}
    >
      {text}
    </span>
  );
};

export default Tag;
