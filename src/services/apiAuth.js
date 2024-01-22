export async function isValidToken() {
  const user = localStorage.getItem("user");

  if (!user) {
    throw new Error("Not signed in. Please sign in");
  }

  const { token } = JSON.parse(user);

  try {
    const res = await fetch(`http://localhost:3000/api/v1/admin/isValidToken`, {
      headers: {
        authorization: `Bearer ${token}`,
      },
      method: "GET",
    });
    const body = await res.json();

    return body.isAuthenticated;
  } catch (err) {
    return err.message;
  }
}

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

  const { data: admin, token, status } = body;

  localStorage.setItem("user", JSON.stringify({ ...admin, token }));

  return { ...admin, token, status };
}
