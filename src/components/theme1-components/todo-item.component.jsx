import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  checkItem,
  deleteItem,
  updateItem,
} from "../../store/todo-list/todo-list.action";
import { selectListItems } from "../../store/todo-list/todo-list.selector";
import {
  FaInfoCircle,
  FaPencilAlt,
  FaRegCheckSquare,
  FaRegSquare,
  FaRegTrashAlt,
} from "react-icons/fa";

const TodoItem = ({ item, index }) => {
  const dispatch = useDispatch();
  const listItems = useSelector(selectListItems);
  const [editValue, setEditValue] = useState(item.text);
  const [edit, setEdit] = useState(false);

  const deleteItemHandler = () => dispatch(deleteItem(listItems, index));

  const toggleCheck = () => dispatch(checkItem(listItems, index));

  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = currentDate.toLocaleString("default", { month: "short" });
  const day = currentDate.getDate();

  const editItem = () => {
    setEdit(!edit);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      dispatch(updateItem(listItems, index, editValue));
      setEdit(false);
    }
  };

  return (
    <div className="row px-3 align-items-center todo-item rounded">
      <div className="col-auto m-1 p-0 d-flex align-items-center">
        <h2 className="m-0 p-0" onClick={toggleCheck}>
          {item.checked ? (
            <i
              className="text-primary m-0 p-0"
              data-toggle="tooltip"
              data-placement="bottom"
              title="Mark as todo"
            >
              <FaRegCheckSquare />
            </i>
          ) : (
            <i
              className="text-primary m-0 p-0"
              data-toggle="tooltip"
              data-placement="bottom"
              title="Mark as complete"
            >
              <FaRegSquare />
            </i>
          )}
        </h2>
      </div>
      <div className="col px-1 m-1 d-flex align-items-center">
        {edit ? (
          <input
            type="text"
            className="form-control form-control-lg border-0 edit-todo-input rounded px-3"
            value={editValue}
            onChange={(e) => setEditValue(e.target.value)}
            onKeyDown={handleKeyDown}
          />
        ) : (
          <input
            type="text"
            className={`form-control form-control-lg border-0 edit-todo-input bg-transparent rounded px-3 ${
              item.checked && "strike"
            }`}
            readOnly
            value={item.text}
            title={item.text}
          />
        )}
      </div>
      <div className="col-auto m-1 p-0 todo-actions">
        <div className="row d-flex align-items-center justify-content-end">
          <h5 className="m-0 p-0 px-2">
            <i
              className="text-info btn m-0 p-0"
              data-toggle="tooltip"
              data-placement="bottom"
              title="Edit todo"
              onClick={editItem}
            >
              <FaPencilAlt />
            </i>
          </h5>
          <h5 className="m-0 p-0 px-2">
            <i
              className="text-danger btn m-0 p-0"
              data-toggle="tooltip"
              data-placement="bottom"
              title="Delete todo"
              onClick={deleteItemHandler}
            >
              <FaRegTrashAlt />
            </i>
          </h5>
        </div>
        <div className="row todo-created-info">
          <div className="col-auto d-flex align-items-center pr-2">
            <i
              className="my-2 px-2 text-black-50 btn"
              data-toggle="tooltip"
              data-placement="bottom"
              title="Created date"
            >
              <FaInfoCircle />
            </i>
            <label className="date-label my-2 text-black-50">
              {`${day}th ${month} ${year}`}
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoItem;
