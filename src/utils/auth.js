function save({ token, user_id, color }) {
  localStorage.setItem("token", token);
  localStorage.setItem("user_id", user_id);
}

function get() {
  const token = localStorage.getItem("token");
  const user_id = localStorage.getItem("user_id");
  return { token, user_id };
}

function clear() {
  localStorage.clear();
  window.location = "login";
}

export default { save, clear, get };
