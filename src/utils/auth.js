import Cookies from "js-cookie";

function save({ token, user_id, color }) {
  Cookies.set("token", token);
  Cookies.set("user_id", user_id);
}

function get() {
  const token = Cookies.get("token");
  const user_id = Cookies.get("user_id");
  return { token, user_id };
}

function clear() {
  Cookies.remove("token");
  Cookies.remove("user_id");
  window.location = "login";
}

export default { save, clear, get };
