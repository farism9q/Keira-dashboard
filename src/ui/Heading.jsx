const Heading = ({ as = "h1", header }) => {
  if (as === "h1") return <h1 className="text-4xl font-semibold">{header}</h1>;
  if (as === "h2") return <h2 className="text-2xl font-semibold">{header}</h2>;
  if (as === "h3") return <h2 className="text-2xl font-medium">{header}</h2>;
};

export default Heading;
