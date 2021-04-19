import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import { getOrdersData } from "../utils/actions";
import Filter from "./filter";
import OrdersTable from "./ordersTable";
import Header from "./header";

const App = () => {
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(getOrdersData());
  // }, [dispatch]);

  return (
    <div>
      <Header />
      <Filter />
      <OrdersTable />
    </div>
  );
};

export default App;
