import React from "react";
import { useSelector } from "react-redux";

import { months } from "../../utils/months";
import "./style.scss";

const OrdersTable = () => {
  const state = useSelector((state) => state);
  const { orders } = state;

  // const dispatch = useDispatch();

  const renderDate = (date) => {
    const year = date.substr(0, 4);
    const month = date.substr(5, 2);
    const day = Number(date.substr(8, 2));
    return `${months[month - 1]}. ${day}, ${year}`;
  };

  const renderVendorCol = ({
    vendorName,
    isPendingVendorOnboarding,
    isBYOS,
  }) => {
    return (
      <>
        {vendorName} {!isBYOS && <span className="market">Market</span>}{" "}
        {isPendingVendorOnboarding && <span className="first">1st</span>}
      </>
    );
  };

  const renderTableBody = () => {
    return orders.orders
      .filter((order) => !orders.vendor || orders.vendor === order.vendorName)
      .map((order, i) => {
        return (
          <tr key={i}>
            <td>
              <span className={order.orderBuyerStatus.toLowerCase()}>
                {order.orderBuyerStatus}
              </span>
            </td>
            <td>{renderDate(order.deliveryDay)}</td>
            <td>{renderVendorCol(order)}</td>
            <td>
              {!isNaN(order.total) && order.total > 0 && `$${order.total}`}
            </td>
          </tr>
        );
      });
  };

  return (
    <div className="data-table">
      <div className="table-container">
        <table className="orders-table">
          <thead>
            <tr>
              <th>Status</th>
              <th>Delivery Day</th>
              <th>Supplier</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>{renderTableBody()}</tbody>
        </table>
      </div>
    </div>
  );
};

export default OrdersTable;
