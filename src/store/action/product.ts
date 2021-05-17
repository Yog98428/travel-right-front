import axios from "axios";
import {fetchFlashProductApi, fetchLatestProductApi} from "../../utility/apis";
import {
  FETCH_FLASH_PRODUCT_Fail,
  FETCH_FLASH_PRODUCT_START,
  FETCH_FLASH_PRODUCT_SUCCESS,
  FETCH_LATEST_PRODUCT_Fail,
  FETCH_LATEST_PRODUCT_START,
  FETCH_LATEST_PRODUCT_SUCCESS,
} from "./actionTypes";

const flashStart = () => {
  return {
    type: FETCH_FLASH_PRODUCT_START,
  };
};
const flashSuccess = (data: {}) => {
  return {
    type: FETCH_FLASH_PRODUCT_SUCCESS,
    payload: data,
  };
};
const flashError = (err: any) => {
  return {
    type: FETCH_FLASH_PRODUCT_Fail,
    payload: err,
  };
};
export const fetchFlashProduct = () => async (dispatch: any) => {
  dispatch(flashStart());
  try {
    const response = await axios.get(fetchFlashProductApi);
    dispatch(flashSuccess(response.data));
  } catch (err) {
    console.log(err);
    dispatch(flashError(err));
  }
};

// latest product

const latestProductStart = () => {
  return {
    type: FETCH_LATEST_PRODUCT_START,
  };
};

const latestProductSuccess = (data: any) => {
  return {
    type: FETCH_LATEST_PRODUCT_SUCCESS,
    payload: data,
  };
};

const lastestProductFail = (err: any) => {
  return {
    type: FETCH_LATEST_PRODUCT_Fail,
    payload: err,
  };
};

export const fetchLatestProduct = () => async (dispatch: any) => {
  try {
    dispatch(latestProductStart());
    const response = await axios.post(fetchLatestProductApi);
    dispatch(latestProductSuccess(response.data));
  } catch (err) {
    dispatch(lastestProductFail(err));
  }
};
