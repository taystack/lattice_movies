export default class Base {
  static endpoint(path) {
    return `http://localhost:9292${path}`;
  }

  static options(method, payload) {
    const options = {
      method,
      mode: "cors",
      cache: "force-cache",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    };
    if (payload) {
      options.body = JSON.stringify(payload);
    }
    return options;
  }

  static async fetch(method, path, payload = false) {
    const endpoint = Base.endpoint(path);
    const options = Base.options(method, payload);
    return fetch(endpoint, options);
  }

  static async get(path) {
    const response = await Base.fetch("GET", path);
    if (response.status === 401) window.location.href = "/signin";
    return response.json();
  }

  static async post(path, payload = {}) {
    const response = await Base.fetch("POST", path, payload);
    if (response.status === 401) window.location.href = "/signin";
    return response.json();
  }
}
