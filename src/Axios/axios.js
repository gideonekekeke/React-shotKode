import axios from "axios";
import store from "store";
import { showError } from "../Complement/Alert";
import { history } from "../Helper/History";

const instance = axios.create({
  baseURL: process.env.BASE_URL,
});

instance.interceptors.request.use(
  (config) => {
    const token = store.get("accessToken");
    if (typeof token !== "undefined" && token !== "undefined") {
      config.headers["Access-Token"] = `${token}`;
      config.headers["Authorization"] = `Bearer ${token}`;
      config.headers["Content-Type"] = "application/json";
      // config.headers['Domain'] = 'domainName';
    } else {
      config.headers["Content-Type"] = "application/json";
      // config.headers['Domain'] = 'domainName';
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

const successHandler = (response) => {
  return response;
};

const errorHandler = (error) => {
  const status = error.response["status"];
  if (status === 401) {
    store.clearAll();
    history.push("/signupschool");
    showError("section expired, kindly login");
  }
  return Promise.reject(error);
};

instance.interceptors.response.use(
  (response) => successHandler(response),
  (error) => {
    return errorHandler(error);
  }
);

export default instance;
