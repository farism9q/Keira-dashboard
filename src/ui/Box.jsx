const Box = ({ children, header }) => {
  return (
    <div className="flex flex-col bg-white gap-3 dark:bg-gray-700 px-6 py-8 space-y-6 rounded-lg">
      <h1 className="text-3xl font-bold text-blue-500 dark:text-slate-50">
        {header}
      </h1>
      {children}
    </div>
  );
};

export default Box;
