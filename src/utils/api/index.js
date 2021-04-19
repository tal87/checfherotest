import axios from "axios";

export default axios.create({
  baseURL: "http://buyer-api.interview.staging.foodieorders.com/api/v1",
});
