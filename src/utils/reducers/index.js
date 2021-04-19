import { combineReducers } from "redux";
import { ORDER_TYPES } from "../types";

const INIT_STATE = {
  orders: [],
  vendor: "",
  ts: 0,
};

const ordersReducer = (state = INIT_STATE, { type, payload }) => {
  switch (type) {
    case ORDER_TYPES.FETCH_ORDER_DATA:
      state = { ...state, orders: payload };
      break;
    case ORDER_TYPES.VENDOR_FILTER:
      state = { ...state, vendor: payload };
      break;
    case ORDER_TYPES.SEARCH:
      console.log(payload);
      if (state.ts > Number(payload.ts)) {
        return state;
      }

      if (!payload.data) {
        //payload.data = [];
        return state;
      }

      state = { ...state, ts: payload.ts, orders: payload.data };
    default:
      break;
  }

  return state;
};

export default combineReducers({ orders: ordersReducer });
