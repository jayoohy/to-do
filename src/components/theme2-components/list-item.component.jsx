import { useDispatch, useSelector } from "react-redux";
import { selectListItems } from "../../store/todo-list/todo-list.selector";
import {
  checkToggle,
  deleteItem,
} from "../../store/todo-list/todo-list.action";
import { FaTimes } from "react-icons/fa";

const ListItem = ({ item, index }) => {
  const dispatch = useDispatch();
  const listItems = useSelector(selectListItems);

  const toggleCheck = () => {
    console.log(item.check);
    dispatch(checkToggle(listItems, index));
  };

  const deleteItemHandler = () => dispatch(deleteItem(listItems, index));
  return (
    <ul className="todo-list ui-sortable p-0">
      <li data-id="T1750530754534" className="">
        <div className="checkbox">
          <span className="close">
            <i onClick={deleteItemHandler}>
              <FaTimes />
            </i>
          </span>
          <label>
            <span
              className={item.check ? "checkbox-mask danger" : "checkbox-mask"}
              onClick={toggleCheck}
            >
              <input type="checkbox" />
            </span>
            <div className="ml-3">{item}</div>
          </label>
        </div>
      </li>
    </ul>
  );
};

export default ListItem;
