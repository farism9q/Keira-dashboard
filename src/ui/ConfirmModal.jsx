import { useState } from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "../components/ui/alert-dialog";
import { IoAlertCircleOutline } from "react-icons/io5";

const ConfirmModal = ({ children, value, onConfirm }) => {
  // const [inputValue, setInputValue] = useState("");
  const [isMatchedValue, setIsMatchedValue] = useState(false);

  function handleConfirm(e) {
    e.stopPropagation();
    onConfirm();
  }
  return (
    <div onClick={e => e.stopPropagation()}>
      <AlertDialog>
        <AlertDialogTrigger onClick={e => e.stopPropagation()} asChild>
          {children}
        </AlertDialogTrigger>
        <AlertDialogContent className="dark:bg-gray-800">
          <div className="flex flex-col">
            <AlertDialogHeader>
              <AlertDialogTitle>
                <p className="flex gap-2 items-center text-3xl">
                  <IoAlertCircleOutline className="text-red-500/80" size={35} />
                  <span>Are you sure ?</span>
                </p>
              </AlertDialogTitle>
            </AlertDialogHeader>
            <div className="mx-4 my-6 space-y-2">
              <p className="font-semibold text-sm">Type "{value}" to delete</p>
              <input
                // value={inputValue}

                onChange={e => {
                  if (e.target.value === value) {
                    setIsMatchedValue(true);
                    console.log("true");
                  } else {
                    setIsMatchedValue(false);
                  }
                }}
                type="text"
                className="bg-gray-200 dark:bg-gray-800 border-solid border-[2px] border-slate-50/10 shadow-lg hover:border-slate-50/30 hover:bg-gray-500/20 transition-all duration-300 rounded-md px-2 py-1 focus:outline w-full"
              />
            </div>
          </div>
          <AlertDialogFooter>
            <AlertDialogCancel
              className="dark:bg-gray-500 dark:text-white dark:hover:bg-stone-400 outline-none border-none"
              onClick={e => e.stopPropagation()}
            >
              Cancel
            </AlertDialogCancel>
            <AlertDialogAction
              disabled={!isMatchedValue}
              className="bg-red-600 hover:bg-red-700 dark:bg-red-600 dark:text-red-50 dark:hover:bg-red-700"
              onClick={handleConfirm}
            >
              Confirm
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default ConfirmModal;
