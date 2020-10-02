import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { filterByVendor } from "../../utils/actions";

import "./styles.scss";

const Filter = () => {
  const state = useSelector((state) => state);
  const [filter, setFilter] = useState("");
  const vendors = state.orders.orders.map((order) => order.vendorName);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(filterByVendor(filter));
  }, [filter]);

  const renderDropdown = () => {
    let uniqueVendors = {};
    return vendors.map((vendor) => {
      if (!uniqueVendors.hasOwnProperty(vendor)) {
        uniqueVendors[vendor] = false;
        return (
          <option key={vendor} value={vendor}>
            {vendor}
          </option>
        );
      }
    });
  };

  return (
    <div className="filters">
      <label>Supplier</label>
      <select
        onChange={(e) => {
          setFilter(e.target.value);
        }}
        value={filter}
      >
        <option value="">All Suppliers</option>
        {renderDropdown()}
      </select>
      <button
        onClick={() => {
          setFilter("");
        }}
        className="clear-filter-btn"
      >
        x Reset Filters
      </button>
    </div>
  );
};

export default Filter;
