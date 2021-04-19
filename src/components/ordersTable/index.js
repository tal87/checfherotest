import React from "react";
import { useSelector } from "react-redux";

import { months } from "../../utils/months";
import "./style.scss";

const OrdersTable = () => {
  const temp = useSelector((state) => state.orders);
  const orders = temp.orders;
  // console.log(orders);
  // const { orders } = state;
  // const renderDate = (date) => {
  //   const year = date.substr(0, 4);
  //   const month = date.substr(5, 2);
  //   const day = Number(date.substr(8, 2));
  //   return `${months[month - 1]}. ${day}, ${year}`;
  // };

  // const renderVendorCol = ({
  //   vendorName,
  //   isPendingVendorOnboarding,
  //   isBYOS,
  // }) => {
  //   return (
  //     <>
  //       {vendorName} {!isBYOS && <span className="market">Market</span>}{" "}
  //       {isPendingVendorOnboarding && <span className="first">1st</span>}
  //     </>
  //   );
  // };

  // const renderTableBody = () => {
  //   //get orders with the specific selected vendor
  //   return orders.orders
  //     .filter((order) => !orders.vendor || orders.vendor === order.vendorName)
  //     .map((order, i) => {
  //       return (
  //         <tr key={i}>
  //           <td>
  //             <span className={order.orderBuyerStatus.toLowerCase()}>
  //               {order.orderBuyerStatus}
  //             </span>
  //           </td>
  //           <td>{renderDate(order.deliveryDay)}</td>
  //           <td>{renderVendorCol(order)}</td>
  //           <td>
  //             {!isNaN(order.total) &&
  //               order.total > 0 &&
  //               `$${order.total.toFixed(2)}`}
  //           </td>
  //         </tr>
  //       );
  //     });
  // };

  // <div className="data-table">
  //   <div className="table-container">
  //     <table className="orders-table">
  //       <thead>
  //         <tr>
  //           <th>Status</th>
  //           <th>Delivery Day</th>
  //           <th>Supplier</th>
  //           <th>Total</th>
  //         </tr>
  //       </thead>
  //       <tbody>{renderTableBody()}</tbody>
  //     </table>
  //   </div>
  // </div>
  const renderOrders = () => {
    console.log(orders);
    return orders.map((order, i) => {
      return order.map((variation, i) => {
        return (
          <div key={i}>
            <img
              src={variation.genericItem.imageURL}
              style={{ width: "50px", height: "50px" }}
            />
            <br />
            {variation.productName}
            <br />
            {variation.price}
          </div>
        );
      });
    });
  };
  return (
    <div style={{ marginLeft: "20px" }}>{orders.length && renderOrders()}</div>
  );
};

export default OrdersTable;
