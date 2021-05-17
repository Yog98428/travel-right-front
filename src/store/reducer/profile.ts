import Cart from "../../model/cart";
import {ProductProcess, ProfileProcess} from "../../model/enums";
import Profile from "../../model/profile";
import {actionTypeInterface, profileInitState} from "../../utility/interfaces";
import {
  CLEAR_LOGIN,
  LIST_CART_FAIL,
  LIST_CART_START,
  LIST_CART_SUCCESS,
  LOGIN_FAIL,
  LOGIN_START,
  LOGIN_SUCCESS,
  REGISTER_FAIL,
  REGISTER_START,
  REGISTER_SUCCESS,
} from "../action/actionTypes";

const initstate: profileInitState = {
  isLoggedIn: false,
  loading: false,
  success: false,
  user: null,
  error: null,
  process: null,
  carts: [],
};

const loginStart = (state: profileInitState, action: actionTypeInterface) => {
  return {
    ...state,
    loading: true,
    process: ProfileProcess.LOGIN,
  };
};

const registerStart = (
  state: profileInitState,
  action: actionTypeInterface
) => {
  return {
    ...state,
    loading: true,
    process: ProfileProcess.REGISTER,
  };
};

const loginSuccess = (state: profileInitState, action: actionTypeInterface) => {
  const profile = new Profile();
  profile.fromJson(action.payload);
  const user = {
    firstname: profile.firstname,
    lastname: profile.lastname,
    phone: profile.lastname,
    address: profile.address,
    profilepicture: profile.profilepicture,
    profilePictureExternal: profile.profilePictureExternal,
    createdAt: profile.createdAt,
    token: profile.token,
  };
  const stringUser = JSON.stringify(user);
  localStorage.setItem("user", stringUser);
  return {
    ...state,
    process: null,
    loading: false,
    error: false,
    profile: profile,
    success: true,
  };
};

const loginFail = (
  state: profileInitState,
  action: {type: any; payload: any}
) => {
  return {
    ...state,
    process: null,
    profile: null,
    error: action.payload,
  };
};

// auto Login
const autoLogin = (
  state: profileInitState,
  action: actionTypeInterface
): profileInitState => {
  const user = new Profile();
  const stringUser = localStorage.getItem("user");
  if (stringUser) {
    const jsonUser = JSON.parse(stringUser);
    user.address = jsonUser.address;
    user.token = jsonUser.token;
    user.firstname = jsonUser.firstname;
    user.lastname = jsonUser.lastname;
    user.phone = jsonUser.phone;
    user.profilepicture = jsonUser.profilepicture;
    user.profilePictureExternal = jsonUser.profilePictureExternal;
    return {
      ...state,
      isLoggedIn: true,
      user: user,
      loading: false,
      error: null,
      success: true,
    };
  } else {
    return {
      ...state,
      isLoggedIn: false,

      loading: false,
      success: false,
      error: null,
    };
  }
};

// register
const registerSuccess = (
  state: profileInitState,
  action: actionTypeInterface
): profileInitState => {
  return {
    process: null,

    ...state,
    user: null,
    error: null,
    success: true,
  };
};

// carts
const fetchCartStart = (
  state: profileInitState,
  action: actionTypeInterface
): profileInitState => {
  return {
    ...state,
    loading: true,
    process: ProfileProcess.CART,
  };
};

const fetchCartSuccess = (
  state: profileInitState,
  action: actionTypeInterface
): profileInitState => {
  const cartList: Cart[] = [];
  action.payload.forEach((element: any) => {
    const cart = new Cart();
    cart.fromJson(element);
    cartList.push(cart);
  });
  return {
    ...state,
    loading: false,
    process: null,
    carts: cartList,
  };
};

const fetchCartFail = (
  state: profileInitState,
  action: actionTypeInterface
): profileInitState => {
  return {
    ...state,
    loading: false,
    error: action.payload,
    process: null,
  };
};

const clearError = (state: any, action: any): profileInitState => {
  return {
    ...state,
    loading: false,
    error: null,
    success: false,
    process: null,
  };
};

const reducer = (state = initstate, action: {type: any; payload: any}) => {
  switch (action.type) {
    case LOGIN_START:
      return loginStart(state, action);
    case LOGIN_FAIL:
      return loginFail(state, action);
    case LOGIN_SUCCESS:
      return loginSuccess(state, action);

    case REGISTER_START:
      return registerStart(state, action);
    case REGISTER_SUCCESS:
      return registerSuccess(state, action);
    case REGISTER_FAIL:
      return loginFail(state, action);

    case LIST_CART_START:
      return fetchCartStart(state, action);
    case LIST_CART_SUCCESS:
      return fetchCartSuccess(state, action);
    case LIST_CART_FAIL:
      return fetchCartFail(state, action);
    case CLEAR_LOGIN:
      return clearError(state, action);
    default:
      return state;
  }
};

export default reducer;
