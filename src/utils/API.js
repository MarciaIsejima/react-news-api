// utils/API.js

import axios from "axios";

export default axios.create({
  baseURL: "https://newsapi.org/",
  // baseURL: "https://randomuser.me/api/",
	responseType: "json"
});
