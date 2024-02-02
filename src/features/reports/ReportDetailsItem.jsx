const ReportDetailsItem = ({ field, value, colors }) => {
  return (
    <div className="ml-5 items-center">
      <p
        className={`${colors["bgColor"]} ${colors["text"]} text-2xl font-bold uppercase text-stone-50 dark:text-stone-200 py-2 tracking-wider pl-4 rounded-t-sm`}
      >
        {field}
      </p>
      <div className="bg-gray-200 opacity-70 py-2 rounded-sm text-center">
        <div className="text-black text-[18px]">{value}</div>
      </div>
    </div>
  );
};

export default ReportDetailsItem;
