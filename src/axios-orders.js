import Axios from "axios";

const instance = Axios.create({
  baseURL: "https://react-my-burger-fdec9.firebaseio.com/",
});

export default instance;
