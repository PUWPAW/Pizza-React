import { SET_PIZZA } from "../actionTypes";

export const setPizzas = (items) => {
  return {
    type: SET_PIZZA,
    payload: items,
  };
};
