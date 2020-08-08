import React, { useEffect } from "react";

import axios from "axios";

const Form = () => {
  useEffect(() => {
    let order = {
      qty: 0,
      name: "Pasta",
      alt: "Pasta",
      image: "assets/pizza.jpg",
      height: "120",
      title: "Pasta",
      desc: "Toppings : olives | corn | capsicum | extra cheese",
      id: 3,
      price: 250,
      total: 0,
    };
    axios
      .post("https://food-cart-18c7a.firebaseio.com/arr", [{ order : order }])
      .then((res) => {
        console.log(res);
      });
  });

  return null;
};

export default Form;
