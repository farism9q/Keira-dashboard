import { useState } from "react";

import { IoAlertCircleOutline } from "react-icons/io5";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../components/ui/dialog";
import { Button } from "../components/ui/button";

const ConfirmModal = ({ children, value, onConfirm }) => {
  const [isMatchedValue, setIsMatchedValue] = useState(false);

  function handleConfirm(e) {
    e.stopPropagation();
    onConfirm();
  }
  return (
    <div onClick={e => e.stopPropagation()}>
      <Dialog>
        <DialogTrigger asChild>{children}</DialogTrigger>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>
              <p className="flex gap-2 items-center text-3xl">
                <IoAlertCircleOutline className="text-red-500/80" size={35} />
                <span>Are you sure ?</span>
              </p>
            </DialogTitle>
            <DialogDescription>This action is irreversible</DialogDescription>
          </DialogHeader>
          <div className="mx-4 my-6 space-y-2">
            <p className="font-semibold text-sm">Type "{value}" to delete</p>
            <input
              onChange={e => {
                if (e.target.value === value) {
                  setIsMatchedValue(true);
                } else {
                  setIsMatchedValue(false);
                }
              }}
              type="text"
              className="bg-gray-200 dark:bg-gray-800 border-solid border-[2px] border-slate-50/10 shadow-lg hover:border-slate-50/30 hover:bg-gray-500/20 transition-all duration-300 rounded-md px-2 py-1 focus:outline w-full"
            />
          </div>
          <DialogFooter className="sm:justify-end">
            <DialogClose asChild>
              <Button type="button" variant="secondary">
                Close
              </Button>
            </DialogClose>
            <Button
              onClick={handleConfirm}
              disabled={!isMatchedValue}
              type="button"
              variant={"destructive"}
            >
              Confirm
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ConfirmModal;
