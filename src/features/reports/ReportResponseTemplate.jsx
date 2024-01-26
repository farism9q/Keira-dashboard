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
import { useChatGPTResponse } from "./useChatGPTResponse";
import { useState } from "react";

const ReportResponseTemplate = ({ children, reporterId, userClaims }) => {
  const [adminComment, setAdminComment] = useState("");

  const { user, isLoading } = useUser(reporterId);
  const { sendReportResponse, isSending } = useSendReportResponse();
  const { getChatGPTResponse, isLoading: gptLoading } = useChatGPTResponse();

  if (isLoading) return <CustomSkeleton />;

  const userName = user.fName + " " + user.lName;

  function handleSubmit(e) {
    e.preventDefault();

    const { email } = user;
    const comment = e.target.comment.value;

    sendReportResponse({
      email,
      name: userName,
      comment,
    });
  }

  function handleChatGPTResponse(e) {
    e.preventDefault();
    console.log(userName);
    getChatGPTResponse(
      { userClaims, userName },
      {
        onSuccess: gptResponse => {
          setAdminComment(gptResponse);
        },
      }
    );
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
            className={`${
              gptLoading && "blur-[2px]"
            } block p-2.5 w-full text-base text-gray-900 bg-gray-50 rounded-lg border border-gray-300 transition-colors duration-300 focus:outline-none focus:ring-blue-400 focus:border-blue-400 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
            placeholder="Type your response here..."
            disabled={gptLoading}
            value={adminComment}
            onChange={e => setAdminComment(e.target.value)}
          ></textarea>
          <div className="grid grid-rows-[1fr_auto] gap-3">
            {!isSending ? (
              <Button
                type="submit"
                className="bg-green-400 text-black text-base hover:bg-green-500"
                disabled={gptLoading || isLoading}
              >
                Send
              </Button>
            ) : (
              <Button disabled>
                <HiPlayCircle className="mr-2 h-4 w-4 animate-spin" />
                Sending...
              </Button>
            )}
            <Button onClick={handleChatGPTResponse} disabled={gptLoading}>
              {gptLoading
                ? "Getting GPT response..."
                : "Ask GPT for a better response"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ReportResponseTemplate;
