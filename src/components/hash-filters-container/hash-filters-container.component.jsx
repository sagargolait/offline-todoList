import React from "react";
import { connect } from "react-redux";
import HashFilterItem from "../hash-filter-item/hash-filter-item.component";
import "./hash-filters-container.styles.css";

const HashFiltersContainer = ({ hashTagFilters }) => (
  <div className="hash-filters-container">
    {hashTagFilters.map((filterKey, index) => (
      <HashFilterItem key={index} filterKey={filterKey} />
    ))}
  </div>
);
const mapStateToProps = (state) => ({
  hashTagFilters: state.todos.hashTagFilters,
});
export default connect(mapStateToProps)(HashFiltersContainer);
