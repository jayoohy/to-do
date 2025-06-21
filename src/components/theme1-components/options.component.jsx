import { FaSortAmountDown, FaSortAmountDownAlt } from "react-icons/fa";

const Options = () => {
  return (
    <div className="row m-1 p-3 px-5 justify-content-end">
      <div className="col-auto d-flex align-items-center">
        <label className="text-secondary my-2 pr-2 view-opt-label">
          Filter
        </label>
        <select className="custom-select custom-select-sm btn my-2">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="active">Active</option>
          <option value="has-due-date">Has due date</option>
        </select>
      </div>
      <div className="col-auto d-flex align-items-center px-1 pr-3">
        <label className="text-secondary my-2 pr-2 view-opt-label">Sort</label>
        <select className="custom-select custom-select-sm btn my-2">
          <option value="added-date-asc">Added date</option>
          <option value="due-date-desc">Due date</option>
        </select>
        <i
          className="text-info btn mx-0 px-0 pl-1"
          data-toggle="tooltip"
          data-placement="bottom"
          title="Ascending"
        >
          <FaSortAmountDownAlt />
        </i>
        <i
          className="fa fa fa-sort-amount-desc text-info btn mx-0 px-0 pl-1 d-none"
          data-toggle="tooltip"
          data-placement="bottom"
          title="Descending"
        >
          <FaSortAmountDown />
        </i>
      </div>
    </div>
  );
};

export default Options;
