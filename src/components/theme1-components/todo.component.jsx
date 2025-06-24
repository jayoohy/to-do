import { useDispatch, useSelector } from "react-redux";
import {
  selectItem,
  selectListItems,
} from "../../store/todo-list/todo-list.selector";
import { setItem, setListItems } from "../../store/todo-list/todo-list.action";
import { FaCalendarTimes, FaInfoCircle } from "react-icons/fa";

const Todo = () => {
  const dispatch = useDispatch();
  const item = useSelector(selectItem);
  const listItems = useSelector(selectListItems);

  const itemValue = (e) => dispatch(setItem(e.target.value));

  const addItemOnClick = () => {
    dispatch(setListItems(listItems, item));
    dispatch(setItem(""));
  };

  return (
    <div className="row m-1 p-3">
      <div className="col col-11 mx-auto">
        <div className="row bg-white rounded shadow-sm p-2 add-todo-wrapper align-items-center justify-content-center">
          <div className="col">
            <input
              className="form-control form-control-lg border-0 add-todo-input bg-transparent rounded"
              type="text"
              placeholder="Add new .."
              onChange={itemValue}
              value={item}
            />
          </div>
          <div className="col-auto m-0 px-2 d-flex align-items-center">
            <label className="text-secondary my-2 p-0 px-1 view-opt-label due-date-label d-none">
              Due date not set
            </label>
            <i
              className="my-2 px-1 text-primary btn due-date-button"
              data-toggle="tooltip"
              data-placement="bottom"
              title="Set a Due date"
            >
              <FaInfoCircle />
            </i>
            <i
              className="my-2 px-1 text-danger btn clear-due-date-button d-none"
              data-toggle="tooltip"
              data-placement="bottom"
              title="Clear Due date"
            >
              <FaCalendarTimes />
            </i>
          </div>
          <div className="col-auto px-0 mx-0 mr-2">
            <button
              type="button"
              className="btn btn-primary"
              onClick={addItemOnClick}
            >
              Add
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Todo;
