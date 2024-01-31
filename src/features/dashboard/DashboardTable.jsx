const DashboardTable = ({ children }) => {
  return (
    <div className="flex flex-col gap-4 h-[16rem] overflow-scroll no-scrollbar">
      {children}
    </div>
  );
};

export default DashboardTable;
