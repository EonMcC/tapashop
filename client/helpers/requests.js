const baseURL = "http://localhost:8080";

class Request {
  get() {
    return fetch("http://192.168.1.173:8080/").then((res) => res.json());
  }
  // delete(url) {
  //   return fetch(url, {
  //     method: "DELETE",
  //     headers: { "Content-Type": "application/json" },
  //   });
  // }
  // post(url, payload) {
  //   return fetch(url, {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify(payload),
  //   });
  // }
  // patch(url, payload) {
  //   return fetch(url, {
  //     method: "PATCH",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify(payload),
  //   });
  // }
}
export default Request;
