import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getOrdersData } from "../utils/actions";
import Filter from "./filter";
import OrdersTable from "./ordersTable";
import Header from "./header";

const App = () => {
  // console.log(state);
  const dispatch = useDispatch();
  // console.log(`orders Length: ${state.orders.orders.length}`);
  useEffect(() => {
    dispatch(getOrdersData());
  }, [dispatch]);

  return (
    <div className="app">
      <Header />
      <Filter />
      <OrdersTable />
    </div>
  );
};

export default App;
