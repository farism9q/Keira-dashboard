const Heading = ({ as = "h1", header }) => {
  if (as === "h1") return <h1 className="text-[2.5rem] font-bold">{header}</h1>;
  if (as === "h2") return <h2 className="text-3xl font-bold">{header}</h2>;
  if (as === "h3") return <h2 className="text-2xl font-medium">{header}</h2>;
};

export default Heading;
