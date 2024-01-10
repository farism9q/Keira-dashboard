const Tag = ({ text, textColor, bgColor }) => {
  return (
    <span
      className={`rounded-lg px-3 ${textColor} ${bgColor} py-1.5 text-center text-base`}
    >
      {text}
    </span>
  );
};

export default Tag;
