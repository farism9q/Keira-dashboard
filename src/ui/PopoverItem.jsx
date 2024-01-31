const PopoverItem = ({ children, onClick }) => {
  let Comp = (
    <button
      className="flex items-center cursor-pointer py-1 gap-1 text-[18px] hover:text-muted-foreground"
      onClick={onClick}
    >
      {children}
    </button>
  );

  return Comp;
};

export default PopoverItem;
