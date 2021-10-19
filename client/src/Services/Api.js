import axios from "axios";
const instance = axios.create();
instance.interceptors.request.use(
  async (config) => {
    config.baseURL = "http://localhost:8000/api/v1";
    config.timeout = 1000;
    config.headers = {
      token: localStorage.getItem("token"),
    };
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);
// export const api = (url, method, data) => {
//   return new Promise((resolved, rejected) => {
//     switch (method.toUpperCase()) {
//       case "GET":
//         return instance
//           .get(url)
//           .then((res) => resolved(res))
//           .catch((err) => rejected(err));
//       case "POST":
//         return instance
//           .post(url, data)
//           .then((res) => resolved(res))
//           .catch((err) => rejected(err));
//       case "PUT":
//         return instance
//           .put(url, data)
//           .then((res) => resolved(res))
//           .catch((err) => rejected(err));
//       case "DELETE":
//         return instance
//           .delete(url)
//           .then((res) => resolved(res))
//           .catch((err) => rejected(err));
//       case "PATCH":
//         return instance
//           .patch(url, data)
//           .then((res) => resolved(res))
//           .catch((err) => rejected(err));
//       default:
//         break;
//     }
//   });
// };

// export default api;
export default instance;
