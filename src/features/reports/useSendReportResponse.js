import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router-dom";
import {
  sendReportResponse as sendReportResponseApi,
  updateReportStatus,
} from "../../services/apiReports";
import { toast } from "react-hot-toast";

export function useSendReportResponse() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { reportId } = useParams();

  const { mutate: sendReportResponse, isLoading: isSending } = useMutation({
    mutationFn: ({ email, name, comment }) =>
      sendReportResponseApi({ email, name, comment }),

    onSuccess: async ({ comment }) => {
      await updateReportStatus({ reportId, comment });
      navigate(-1);

      queryClient.invalidateQueries({
        queryKey: ["reports", "report", reportId],
      });

      toast.success("Sent successfully");
    },

    onError: err => {
      toast.error(err.message || "Unknown error");
    },
  });

  return { sendReportResponse, isSending };
}
