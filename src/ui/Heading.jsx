const Heading = ({
  as = "h1",
  header,
  color = "text-black dark:text-white",
}) => {
  if (as === "h1")
    return <h1 className={`text-[2.5rem] font-bold ${color}`}>{header}</h1>;
  if (as === "h2")
    return <h2 className={`text-3xl font-bold ${color}`}>{header}</h2>;
  if (as === "h3")
    return <h2 className={`text-2xl font-medium ${color}`}>{header}</h2>;
  if (as === "h4")
    return (
      <h2 className={`text-[22px] uppercase font-semibold ${color}`}>
        {header}
      </h2>
    );
};

export default Heading;
