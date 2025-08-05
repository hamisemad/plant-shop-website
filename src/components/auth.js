let users = JSON.parse(localStorage.getItem("users") || "{}");

export function registerUser(username, email, password) {
  if (users[username]) {
    return { success: false, message: "User already exists" };
  }

  users[username] = { password, email };
  localStorage.setItem("users", JSON.stringify(users));
  return { success: true };
}

export function loginUser(username, password) {
  users = JSON.parse(localStorage.getItem("users") || "{}");

  if (!users[username] || users[username].password !== password) {
    return false;
  }

  const token = btoa(JSON.stringify({
    username,
    exp: Date.now() + 1000 * 60 * 60 * 24
  }));

  localStorage.setItem("token", token);
  return true;
}

export function logoutUser() {
  localStorage.removeItem("token");
}

export function getUser() {
  const token = localStorage.getItem("token");
  if (!token) return null;

  try {
    const payload = JSON.parse(atob(token));
    if (payload.exp < Date.now()) {
      logoutUser();
      return null;
    }
    return payload;
  } catch {
    logoutUser();
    return null;
  }
}
export function isLoggedIn() {
  return !!getUser();
}
