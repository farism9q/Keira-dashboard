import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router-dom";
import { sendReportResponse as sendReportResponseApi } from "../../services/apiReports";

export function useSendReportResponse() {
  const navigate = useNavigate();
  const { reportId } = useParams();
  const queryClient = useQueryClient();

  const { mutate: sendReportResponse, isLoading: isSending } = useMutation({
    mutationFn: ({ email, name, comment }) =>
      sendReportResponseApi({ email, name, comment }),

    onSuccess: async () => {
      await updateReportStatus({ reportId, comment });
      navigate(-1);

      queryClient.invalidateQueries({
        queryKey: ["reports", "report", reportId],
      });
    },

    onError: err => {
      console.log("err", err);
    },
  });

  return { sendReportResponse, isSending, error };
}
