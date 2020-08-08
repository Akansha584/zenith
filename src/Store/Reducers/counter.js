const initialState = {
  count: [],
};

const index = (elId, state = initialState) => {
  if (state.count.length === 0) {
    return -1;
  }
  return state.count.findIndex((el) => el.id === elId);
};

export const counterReducer = (state = initialState, action) => {
  // debugger;
  let a = index(action.id, state);
  switch (action.type) {
    case "INCREMENT_COUNTER":
      // 1. Make a copy of initial state
      // 2. Make a copy of count array
      // 3. Make a seperate function which will check if same kind of object is present and it will return the index of that item
      // 4. Using the index make changes in count array
      // 5. Return -1 if item not found and push the new object
      if (a === -1) {
        return {
          ...state,
          count: state.count.concat({
            id: action.id,
            qty: action.qty + 1,
            name: action.name,
            price: action.price,
            total: action.price * 1,
            image: action.image,
          }),
        };
      }
      if (a >= 0) {
        return {
          ...state,
          ...(state.count[a].qty += 1),
          ...(state.count[a].total = state.count[a].qty * state.count[a].price),
        };
      }

    case "DECREMENT_COUNTER":
      // debugger;

      if (a >= 0 && state.count[a].qty > 0) {
        return {
          ...state,
          ...(state.count[a].qty -= 1),
          ...(state.count[a].total = state.count[a].qty * state.count[a].price),
        };
      }
    default:
      return state;
  }
};
