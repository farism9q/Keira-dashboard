const Empty = ({ children }) => {
  return (
    <div className="flex flex-col gap-4 bg-white dark:bg-gray-700 py-2 px-6 rounded-md h-full">
      <div className="flex justify-center items-center h-full text-3xl">
        {children}
      </div>
    </div>
  );
};

export default Empty;
