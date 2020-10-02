import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { filterByVendor } from "../../utils/actions";

import "./style.scss";

const Filter = () => {
  const state = useSelector((state) => state);
  const [filter, setFilter] = useState("");
  // get the list of vendors
  const vendors = state.orders.orders.map((order) => order.vendorName);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(filterByVendor(filter));
  }, [dispatch, filter]);

  const renderDropdown = () => {
    // render list of unique vendors into dropdown
    let uniqueVendors = {};
    return vendors.map((vendor) => {
      if (!uniqueVendors.hasOwnProperty(vendor)) {
        uniqueVendors[vendor] = false;
        return (
          <option key={vendor} value={vendor}>
            {vendor}
          </option>
        );
      } else {
        return "";
      }
    });
  };

  return (
    <div className="filters">
      <label>Supplier</label>
      <div className="filter-controls">
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
    </div>
  );
};

export default Filter;
