import {combineReducers} from "redux";
import categoryreducer from "./category";
import productreducer from "./product";
import profilereducer from "./profile";

const rootreducer = combineReducers({
  category: categoryreducer,
  product: productreducer,
  profile: profilereducer,
});

export default rootreducer;
