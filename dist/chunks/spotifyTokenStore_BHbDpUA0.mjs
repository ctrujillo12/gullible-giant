let access_token = null;
function setToken(token) {
  access_token = token;
}
function getToken() {
  return access_token;
}

export { getToken as g, setToken as s };
