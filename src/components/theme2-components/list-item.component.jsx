import { useDispatch, useSelector } from "react-redux";
import { selectListItems } from "../../store/todo-list/todo-list.selector";
import { checkItem, deleteItem } from "../../store/todo-list/todo-list.action";
import { FaCheck, FaTimes } from "react-icons/fa";

const ListItem = ({ item, index }) => {
  const dispatch = useDispatch();
  const listItems = useSelector(selectListItems);

  const deleteItemHandler = () => dispatch(deleteItem(listItems, index));

  const toggleCheck = () => dispatch(checkItem(listItems, index));

  return (
    <ul className="todo-list ui-sortable p-0">
      <li data-id="T1750530754534" className={item.checked ? "danger" : ""}>
        <div className="checkbox">
          <span className="close">
            <i onClick={deleteItemHandler}>
              <FaTimes className="close-icon" />
            </i>
          </span>
          <label>
            <span className="checkbox-mask">
              {item.checked && <FaCheck className="extra" />}
              <input type="checkbox" onClick={toggleCheck} />
            </span>
            <div className="ml-3">{item.text}</div>
          </label>
        </div>
      </li>
    </ul>
  );
};

export default ListItem;
