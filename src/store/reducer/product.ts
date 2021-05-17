import Product from "../../model/product";
import {
  FETCH_FLASH_PRODUCT_Fail,
  FETCH_FLASH_PRODUCT_START,
  FETCH_FLASH_PRODUCT_SUCCESS,
  FETCH_LATEST_PRODUCT_Fail,
  FETCH_LATEST_PRODUCT_START,
  FETCH_LATEST_PRODUCT_SUCCESS,
} from "../action/actionTypes";
import {ProductProcess} from "../../model/enums";

interface productInterface {
  products: Product[];
  loading: boolean;
  error: String | null;
  productProcess: ProductProcess | null;
}
const init: productInterface = {
  products: [],
  loading: false,
  error: null,
  productProcess: null,
};

const fetchFlashStart = (state: productInterface, payload: any) => {
  return {
    ...state,
    loading: true,
    productProcess: ProductProcess.FETCH_FLASH,
  };
};

const fetchFlashSuccess = (state: productInterface, action: any) => {
  const _stateProduct = [...state.products];
  action.payload.data.forEach((element: any) => {
    const existProduct = _stateProduct.find((e) => e._id === element._id);
    if (existProduct) {
      existProduct.flashSell = true;
    } else {
      const newProduct = new Product();
      newProduct.fromJson(element);
      newProduct.flashSell = true;
      _stateProduct.push(newProduct);
    }
  });
  return {
    ...state,
    loading: false,
    productProcess: null,
    products: _stateProduct,
  };
};

const fetchFlashFail = (state: productInterface, action: any) => {
  return {
    ...state,
    loading: false,
    error: action.payload,
    productProcess: null,
  };
};

// latest products

const fetchLatestProductStart = (state: productInterface, action: any) => {
  return {
    ...state,
    loading: true,
    error: null,
    ProductProcess: ProductProcess.LATEST_PRODUCT,
  };
};

const fetchLatestProductSuccess = (state: productInterface, action: any) => {
  const _stateProduct = [...state.products];
  action.payload.data.forEach((element: any) => {
    const existProduct = _stateProduct.find((e) => e._id === element._id);
    if (existProduct) {
      existProduct.latest = true;
    } else {
      const newProduct = new Product();
      newProduct.fromJson(element);
      newProduct.latest = true;
      _stateProduct.push(newProduct);
    }
  });
  return {
    ...state,
    loading: false,
    productProcess: null,
    products: _stateProduct,
  };
};
const fetchLatestProductFail = (state: productInterface, action: any) => {
  return {
    ...state,
    loading: false,
    error: action.payload.err,
    productProcess: null,
  };
};

const reducer = (state = init, action: {type: String; payload: any}) => {
  switch (action.type) {
    case FETCH_FLASH_PRODUCT_START:
      return fetchFlashStart(state, action);
    case FETCH_FLASH_PRODUCT_Fail:
      return fetchFlashFail(state, action);
    case FETCH_FLASH_PRODUCT_SUCCESS:
      return fetchFlashSuccess(state, action);
    case FETCH_LATEST_PRODUCT_START:
      return fetchLatestProductStart(state, action);
    case FETCH_LATEST_PRODUCT_SUCCESS:
      return fetchLatestProductSuccess(state, action);
    case FETCH_LATEST_PRODUCT_Fail:
      return fetchLatestProductFail(state, action);
    default:
      return state;
  }
};

export default reducer;
