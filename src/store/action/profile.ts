import axios from "axios";
import {registerApi, loginApi, fetchCartApi} from "../../utility/apis";
import {
  LOGIN_FAIL,
  LOGIN_START,
  LOGIN_SUCCESS,
  REGISTER_START,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  AUTO_LOGIN,
  LIST_CART_START,
  LIST_CART_SUCCESS,
  LIST_CART_FAIL,
  CLEAR_LOGIN,
} from "./actionTypes";

const loginStart = () => {
  return {
    type: LOGIN_START,
  };
};

const loginSuccess = (data: any) => {
  return {
    type: LOGIN_SUCCESS,
    payload: data,
  };
};

const loginFail = (err: any) => {
  return {
    type: LOGIN_FAIL,
    payload: err,
  };
};

export const login =
  (email: string, password: string) => async (dispatch: any) => {
    dispatch(loginStart());
    try {
      const response = await axios.post(
        loginApi,
        {
          email,
          password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.data.success) {
        dispatch(loginSuccess(response.data));
      } else {
        dispatch(loginFail(response.data.message));
      }
    } catch (err) {
      dispatch(loginFail(err.toString()));
    }
  };

//    register

const registerStart = () => {
  return {
    type: REGISTER_START,
  };
};
const registerSuccess = (data: any) => {
  return {
    type: REGISTER_SUCCESS,
    payload: data,
  };
};
const registerFail = (err: any) => {
  return {
    type: REGISTER_FAIL,
    payload: err,
  };
};

export const register =
  (email: string, password: string, confirmPassword: string) =>
  async (dispatch: any) => {
    dispatch(registerStart);
    if (password !== confirmPassword)
      dispatch(registerFail("Password and confirm password dosent match"));
    try {
      const response = await axios.post(
        registerApi,
        {
          email,
          password,
          confirmPassword,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (!response.data.success) {
        console.log(response.data);

        return dispatch(registerFail(response.data.message));
      }

      return dispatch(registerSuccess(response.data));
    } catch (err) {
      dispatch(registerFail(err.toString()));
    }
  };
export const autoLogin = () => {
  return {
    type: AUTO_LOGIN,
  };
};

// fetch cart

const fetchCartStart = () => {
  return {
    type: LIST_CART_START,
  };
};

const fetchCartSuccess = (data: any) => {
  return {
    type: LIST_CART_SUCCESS,
    payload: data,
  };
};

const fetchCartFail = (err: any) => {
  return {
    type: LIST_CART_FAIL,
    payload: err,
  };
};

export const fetchCart = (token: string) => async (dispatch: any) => {
  dispatch(fetchCartStart());
  try {
    const request = await axios.get(fetchCartApi, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (!request.data.success) {
      dispatch(fetchCartFail(request.data.message));
    }
    return dispatch(fetchCartSuccess(request.data.data));
  } catch (err) {
    return dispatch(fetchCartFail(err.toString()));
  }
};

// clear error
const clearerror = () => {
  return {
    type: CLEAR_LOGIN,
  };
};
export const clearProfileError = () => (dispatch: any) => {
  return dispatch(clearerror());
};
