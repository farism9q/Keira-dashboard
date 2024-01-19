const ReportDetailsItem = ({ field, value }) => {
  return (
    <div className="ml-5 items-center">
      <p className="text-2xl font-bold uppercase text-stone-50 dark:text-stone-200 bg-blue-600/85 dark:bg-blue-500 py-2 tracking-wider pl-4 rounded-t-sm">
        {field}
      </p>
      <div className="bg-gray-200 opacity-70 py-2 rounded-sm text-center">
        <p className="text-black dark:text-gray-900 text-[18px]">{value}</p>
      </div>
    </div>
  );
};

export default ReportDetailsItem;
