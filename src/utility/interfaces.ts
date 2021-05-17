import Cart from "../model/cart";
import {ProductProcess, ProfileProcess} from "../model/enums";
import Profile from "../model/profile";

export interface actionTypeInterface {
  type: any;
  payload: any;
}

export interface profileInitState {
  isLoggedIn: boolean;
  loading: boolean;
  success: boolean;
  user: Profile | null;
  error: String | null;
  process: ProfileProcess | null;
  carts: Cart[];
}
