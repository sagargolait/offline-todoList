import React from "react";
import { connect } from "react-redux";
import CustomButton from "../custom-button/custom-button.component";
import { removeHashTagFilter } from "../../redux/todos/todos.actions";
import "./hash-filter-item.styles.css";

const HashFilterItem = ({ removeHashTagFilter, filterKey }) => {
  return (
    <span className="hash-filter-item">
      {filterKey}{" "}
      <CustomButton isHashLabel onClick={() => removeHashTagFilter(filterKey)}>
        X
      </CustomButton>
    </span>
  );
};
const mapStateToProps = (state) => ({
  hashTagFilters: state.todos.hashTagFilters,
});
const mapDispatchToProps = (dispatch) => ({
  removeHashTagFilter: (hashTagFilter) =>
    dispatch(removeHashTagFilter(hashTagFilter)),
});

export default connect(mapStateToProps, mapDispatchToProps)(HashFilterItem);
