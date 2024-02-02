export async function requestFromBackend({
  method,
  endpoint,
  bodyContent,
  requireAuth = true,
}) {
  const loggedInUser = localStorage.getItem("user");
  const token = loggedInUser ? JSON.parse(loggedInUser).token : null;

  // Initial
  let option = { method };
  let headers = { "Content-Type": "application/json" };

  // Modify
  headers = requireAuth
    ? { ...headers, authorization: `Bearer ${token}` }
    : headers;
  option.headers = headers;
  if (method === "POST") {
    option.body = JSON.stringify(bodyContent);
  }

  const res = await fetch(`http://localhost:3000/api/v1/${endpoint}`, option);

  return res;
}
