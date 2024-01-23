export async function login({ email, password }) {
  const res = await fetch(`http://localhost:3000/api/v1/admin/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      password,
    }),
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
