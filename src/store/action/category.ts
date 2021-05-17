import axios from "axios";
import { fetchCategoryApi } from "../../utility/apis";
import {
  FETCH_CATEGORY_Fail,
  FETCH_CATEGORY_START,
  FETCH_CATEGORY_SUCCESS,
} from "./actionTypes";

const fetchCategoryStart = () => {
  return {
    type: FETCH_CATEGORY_START,
  };
};

const fetchCategoryFail = (err: any) => {
  return {
    type: FETCH_CATEGORY_Fail,
    payload: err,
  };
};

const fetchCategorySuccess = (data: {}) => {
  return {
    type: FETCH_CATEGORY_SUCCESS,
    payload: data,
  };
};

export const fetchCategory = () => async (dispatch: any) => {
  dispatch(fetchCategoryStart());
  try {
    const response = await axios.get(fetchCategoryApi);
    dispatch(fetchCategorySuccess(response.data));
  } catch (err) {
    console.log(err);
    dispatch(fetchCategoryFail(err));
  }
};
