import axios from "axios";
import { ORDER_TYPES } from "../types";

export const getOrdersData = () => {
  return async (dispatch) => {
    try {
      let { data } = await axios.get("https://chefhero.free.beeceptor.com/");
      dispatch({ type: ORDER_TYPES.FETCH_ORDER_DATA, payload: data.data });
    } catch (e) {}
  };
};

export const filterByVendor = (vendor) => {
  return { type: ORDER_TYPES.VENDOR_FILTER, payload: vendor };
};