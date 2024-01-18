const Tag = ({ text, textColor, bgColor }) => {
  return (
    <span
      className={`rounded-full px-3 ${textColor} ${bgColor} bg-opacity-70 py-1.5 text-center text-sm uppercase`}
    >
      {text}
    </span>
  );
};

export default Tag;
