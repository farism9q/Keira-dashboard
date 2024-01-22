import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "../components/ui/alert-dialog";

const Modal = ({ trigger, titelContent, bodyContent, handleConfirm }) => {
  return (
    <AlertDialog>
      <AlertDialogTrigger>{trigger}</AlertDialogTrigger>
      <AlertDialogContent className="dark:bg-blue-700">
        <AlertDialogHeader>
          <AlertDialogTitle className="text-center">
            {titelContent}
          </AlertDialogTitle>
          <AlertDialogDescription className="dark:text-stone-300">
            {bodyContent}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel
            className="dark:bg-stone-300 dark:text-stone-900 dark:hover:bg-stone-400 dark:hover:text-stone-900 outline-none border-none"
            onClick={e => e.stopPropagation()}
          >
            Cancel
          </AlertDialogCancel>
          <AlertDialogAction
            className="bg-red-600 hover:bg-red-700 dark:bg-red-600 dark:text-red-50 dark:hover:bg-red-700"
            onClick={handleConfirm}
          >
            Confirm
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default Modal;
