import Axios from "axios";

const axios = Axios.create({
  baseURL: "https://shotcode-api.herokuapp.com",
});

export default axios;
