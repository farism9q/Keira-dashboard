import ConfirmModal from "./ConfirmModal";

const PopoverItem = ({ children, onClick, confirmModal = false }) => {
  let Comp = (
    <button
      className="flex items-center cursor-pointer py-1 gap-1 text-[18px] hover:text-muted-foreground"
      onClick={onClick}
    >
      {children}
    </button>
  );

  Comp = confirmModal ? <ConfirmModal>{Comp}</ConfirmModal> : Comp;

  return Comp;
};

export default PopoverItem;
