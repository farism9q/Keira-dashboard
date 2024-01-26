import { requestFromBackend } from "../utils/backendFetch";

export async function login({ email, password }) {
  const res = await requestFromBackend({
    endpoint: "admin/login",
    method: "POST",
    requireAuth: false,
    bodyContent: { email, password },
  });

  const body = await res.json();

  if (body.status === "fail") {
    throw new Error(body.message);
  }

  if (!res.ok) {
    throw new Error("Something went wrong when logging in");
  }

  const { data: admin, token, tokenExpiresIn, status } = body;

  return { ...admin, token, tokenExpiresIn, status };
}
