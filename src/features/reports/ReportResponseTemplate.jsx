import { Button } from "../../components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { HiPlayCircle } from "react-icons/hi2";

import { useUser } from "../users/useUser";
import CustomSkeleton from "../../ui/CustomSkeleton";
import { useSendReportResponse } from "./useSendReportResponse";
import { useParams } from "react-router-dom";
import { updateReportStatus } from "../../services/apiReports";
import { useQueryClient } from "@tanstack/react-query";

const ReportResponseTemplate = ({ children, reporterId }) => {
  const { user, isLoading } = useUser(reporterId);
  const { sendReportResponse, isSending } = useSendReportResponse();

  function handleSubmit(e) {
    e.preventDefault();

    const { email } = user;
    const name = user.fName + " " + user.lName;
    const comment = e.target.comment.value;

    sendReportResponse({
      email,
      name,
      comment,
    });
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
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <textarea
            name="comment"
            id="comment"
            cols="30"
            rows="5"
            className="block p-2.5 w-full text-base text-gray-900 bg-gray-50 rounded-lg border border-gray-300 transition-colors duration-300 focus:outline-none focus:ring-blue-400 focus:border-blue-400 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Type your response here..."
          ></textarea>
          {!isSending ? (
            <Button
              type="submit"
              className="bg-green-400 text-black text-base hover:bg-green-500"
            >
              Send
            </Button>
          ) : (
            <Button disabled>
              <HiPlayCircle className="mr-2 h-4 w-4 animate-spin" />
              Sending...
            </Button>
          )}
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ReportResponseTemplate;
