const Row = ({ children, type = "horizontal" }) => {
  const variants = {
    horizontal: "flex justify-between items-center",
    vertical: "flex flex-col items-center",
  };
  return <div className={variants[type]}>{children}</div>;
};

export default Row;
