// default base URL points to backend server; the backend listens on 3010 and mounts under /api
// you can override with VITE_API_BASE_URL in .env (e.g. http://localhost:3010/api)
const API_BASE = import.meta.env.VITE_API_BASE_URL || "http://localhost:3010/api";

async function request(path, options = {}) {
  const res = await fetch(API_BASE + path, {
    headers: { "Content-Type": "application/json" },
    credentials: "include", // send cookies (refresh token)
    ...options,
  });

  let payload;
  try {
    payload = await res.json();
  } catch (e) {
    // no json response
    payload = null;
  }

  if (!res.ok) {
    const msg = (payload && payload.message) || res.statusText || "Error en la petición";
    const error = new Error(msg);
    error.status = res.status;
    error.response = payload;
    throw error;
  }

  return payload;
}

export { request };

export const auth = {
  login: (data) => request("/auth/login", { method: "POST", body: JSON.stringify(data) }),
  register: (data) => request("/auth/register", { method: "POST", body: JSON.stringify(data) }),
};
