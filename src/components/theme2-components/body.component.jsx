import { FaBan, FaExclamationCircle, FaPlus, FaTimes } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import {
  selectItem,
  selectListItems,
} from "../../store/todo-list/todo-list.selector";
import { setItem, setListItems } from "../../store/todo-list/todo-list.action";
import ListItem from "./list-item.component";

const Body = () => {
  const dispatch = useDispatch();
  const item = useSelector(selectItem);
  const listItems = useSelector(selectListItems);

  const itemValue = (e) => dispatch(setItem(e.target.value));

  const addItemOnClick = () => {
    dispatch(setListItems(listItems, item));
    dispatch(setItem(""));
  };
  return (
    <div className="container">
      <div className="today">Awesome, it's Friday 🍻</div>
      <div className="row">
        <div className="col-md-4 offset-md-4 col-6 offset-3">
          <div className="add-control">
            <div className="form-group has-feedback">
              <div className="position-relative">
                <textarea
                  type="text"
                  rows="1"
                  cols="15"
                  className="form-control"
                  placeholder="✍️ Add item..."
                  onChange={itemValue}
                  value={item}
                >
                  {item}
                </textarea>
                <button
                  type="button"
                  className="position-absolute top-50 end-0 translate-middle-y pe-3 btn btn-link text-decoration-none"
                  title="Add item"
                  onClick={addItemOnClick}
                >
                  <FaPlus />
                </button>
              </div>
            </div>
          </div>
          {listItems ? (
            listItems.map((item, index) => (
              <ListItem key={index} index={index} item={item} />
            ))
          ) : (
            <>
              <p className="err text-danger text-center d-none">
                <i>
                  <FaExclamationCircle />
                </i>{" "}
                Oops! Please, enter name item
              </p>
              <p className="no-items text-muted text-center hidden">
                <i>
                  <FaBan />
                </i>
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Body;
