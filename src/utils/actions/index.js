import api from "../api";
import { ORDER_TYPES } from "../types";

export const getOrdersData = () => {
  return async (dispatch) => {
    try {
      let { data } = await api.get("/");
      dispatch({ type: ORDER_TYPES.FETCH_ORDER_DATA, payload: data.data });
    } catch (e) {}
  };
};

export const filterByVendor = (vendor) => {
  return { type: ORDER_TYPES.VENDOR_FILTER, payload: vendor };
};

export const search = (searchTerm, retries) => {
  return async (dispatch) => {
    try {
      let resp = await api.get(
        `/search/?s=${searchTerm}&ts=${new Date().getTime()}`
      );

      let ts = resp.config.url.substring(resp.config.url.indexOf("ts=") + 3);
      let data = resp.data;
      // console.log(data[""]);
      dispatch({ type: ORDER_TYPES.SEARCH, payload: { data: data[""], ts } });
    } catch (e) {
      dispatch(search(searchTerm, retries - 1));
    }
  };
};
