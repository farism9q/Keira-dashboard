import { Button } from "../../components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useUser } from "../users/useUser";
import CustomSkeleton from "../../ui/CustomSkeleton";

const ReportResponseTemplate = ({ children, reporterId }) => {
  const { user, isLoading } = useUser(reporterId);

  function handleSubmit(e) {
    e.preventDefault();

    const { email } = user;
    const message = e.target.message.value;

    // HERE send email message
  }

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          {isLoading ? (
            <CustomSkeleton type="row" />
          ) : (
            <DialogTitle className="text-center">
              Send a reponse to{" "}
              <span className="font-bold text-blue-500 dark:text-blue-400">
                {user.fName + " " + user.lName}
              </span>
            </DialogTitle>
          )}
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <textarea
            name="message"
            id="message"
            cols="30"
            rows="5"
            className="block p-2.5 w-full text-base text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Type your response here..."
          ></textarea>
          <Button
            type="submit"
            disabled={isLoading}
            className="bg-green-400 text-black text-base hover:bg-green-500"
          >
            Send
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

// When response is sending, use this button instead
{
  /* <Button disabled>
      <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
      Please wait
    </Button> */
}
export default ReportResponseTemplate;
