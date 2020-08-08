const initialState = {
  arr: [
    {
      qty: 0,
      name: "Pizza",
      alt: "Pizza",
      image: "assets/pizza.jpg",
      height: "120",
      title: "Pizza",
      desc: "Toppings : olives | corn | capsicum | extra cheese",
      id: 1,
      price: 250,
      total : 0
    },
    {
      qty: 0,
      name: "Burger",
      alt: "Burger",
      image: "assets/burger.jpg",
      height: "120",
      title: "Burger",
      desc: "Toppings : tomato | corn | capsicum | onion | extra cheese",
      id: 2,
      price: 150,
      total : 0
    },
  ],
};

export const contentReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
