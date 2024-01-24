const GridTextIcon = ({ data }) => {
  return (
    <div className="grid grid-cols-2 text-3xl space-y-4 text-zinc-700 dark:text-slate-200">
      {data.map(item => (
        <span className="flex items-center p-0 m-0 gap-2" key={item.text}>
          {item.icon}
          {item.text}
        </span>
      ))}
    </div>
  );
};

export default GridTextIcon;
