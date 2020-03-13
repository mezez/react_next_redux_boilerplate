import * as actionTypes from "../action-types/categoryActionTypes";
import { CategoryRequest as request } from "../../api/index";

const loadStart = () => {
  return {
    type: actionTypes.LOAD_START
  };
};

const loadEnd = () => {
  return {
    type: actionTypes.LOAD_END
  };
};

export const allCategories = data => {
  return {
    type: actionTypes.ALL_CATEGORIES,
    payload: data
  };
};

export const getAllCategories = () => async dispatch => {
  dispatch(loadStart());
  const response = await request.fetchCategories();
  // const response = [
  //   { id: "kfkf", name: "Shoes" },
  //   { id: "dfdd", name: "Dresses" }
  // ];
  // if (response) {
  //   return response;
  // }

  dispatch(allCategories(response));
  dispatch(loadEnd());
  return response;
};
