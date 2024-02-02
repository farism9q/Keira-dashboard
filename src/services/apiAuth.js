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

export async function signUp({ name, email, password, role }) {
  const res = await requestFromBackend({
    endpoint: "admin/signup",
    method: "POST",
    requireAuth: true,
    bodyContent: {
      name,
      email,
      password,
      role,
    },
  });

  const body = await res.json();

  if (body.status === "fail") {
    throw new Error(body.message);
  }

  if (!res.ok) {
    throw new Error("Something went wrong when creating a new admin");
  }

  return body;
}

export async function checkRole() {
  const res = await requestFromBackend({
    method: "GET",
    endpoint: "admin/checkRole",
    requireAuth: true,
  });

  const data = await res.json();

  return data;
}

export async function deleteUser(id) {
  const res = await requestFromBackend({
    method: "DELETE",
    endpoint: `admin/deleteKeiraUser/${id}`,
    requireAuth: true,
  });

  const body = await res.json();

  if (body.status !== "success") {
    throw new Error(body.message || "Something went wrong");
  }

  // Deleting a user returns null
  return null;
}
