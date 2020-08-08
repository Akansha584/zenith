import axios from "axios";

const instance = axios.create({
  baseurl: "https://food-cart-18c7a.firebaseio.com/ ",
});

export default instance;
