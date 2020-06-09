import Axios from "axios";

const instance = Axios.create({
  baseURL: "https://burger-app-fd68d.firebaseio.com/",
});

export default instance;
