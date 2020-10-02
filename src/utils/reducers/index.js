import { combineReducers } from "redux";
import { ORDER_TYPES } from "../types";

const INIT_STATE = {
  orders: [],
  vendor: "",
};

const ordersReducer = (state = INIT_STATE, { type, payload }) => {
  switch (type) {
    case ORDER_TYPES.FETCH_ORDER_DATA:
      state = { ...state, orders: payload };
      break;
    case ORDER_TYPES.VENDOR_FILTER:
      state = { ...state, vendor: payload };
      break;
    default:
      break;
  }

  return state;
};

export default combineReducers({ orders: ordersReducer });
