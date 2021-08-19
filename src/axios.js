import axios from "axios";

const instance = axios.create({
  baseURL: "https://blog-app-b7ede-default-rtdb.firebaseio.com",
});

export default instance;
