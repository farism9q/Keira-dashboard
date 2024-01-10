const Status = ({ children, color }) => {
  const colors = {
    green: "bg-green-500",
    red: "bg-red-500",
  };
  return (
    <div className="flex items-center justify-center">
      <div className={`h-3.5 w-3.5 rounded-full ${colors[color]} me-2`}></div>
      {children}
    </div>
  );
};

export default Status;
