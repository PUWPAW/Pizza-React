import { SET_SORT_BY, SET_CATEGORY } from "../actionTypes";

export const setSortBy = (sortType) => {
  return {
    type: SET_SORT_BY,
    payload: sortType,
  };
};

export const setCategory = (catIndex) => {
  return {
    type: SET_CATEGORY,
    payload: catIndex,
  };
};
