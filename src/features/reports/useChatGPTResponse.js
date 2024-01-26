import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router-dom";
import { getBestResponse } from "../../services/apiReports";
import { toast } from "react-hot-toast";

export function useChatGPTResponse() {
  // const navigate = useNavigate();
  // const queryClient = useQueryClient();
  // const { reportId } = useParams();

  const { mutate: getChatGPTResponse, isLoading } = useMutation({
    mutationFn: ({ userClaims, userName }) =>
      getBestResponse({ userClaims, userName }),

    onSuccess: async () => {
      toast.success("ChatGPT response is ready");
    },

    onError: err => {
      toast.error(err.message || "Unknown error");
    },
  });

  return { getChatGPTResponse, isLoading };
}
