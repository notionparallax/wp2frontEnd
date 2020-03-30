function contextAwareURL(url) {
  let h = window.location.host.split(":")[0];
  if (h == "127.0.0.1" || h == "localhost" || h == "0.0.0.0") {
    url = "http://localhost:8000";
  } else {
    url = "https://todo-ljb4cakpxq-uc.a.run.app";
  }
  return url;
}
