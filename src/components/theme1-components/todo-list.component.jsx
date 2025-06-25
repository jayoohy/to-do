import { useSelector } from "react-redux";
import TodoItem from "./todo-item.component";
import { selectListItems } from "../../store/todo-list/todo-list.selector";
import { FaBan, FaExclamationCircle } from "react-icons/fa";

const TodoList = () => {
  const listItems = useSelector(selectListItems);

  return (
    <div className="row mx-1 px-5 pb-3 w-80">
      <div className="col mx-auto">
        {listItems.length > 0 ? (
          listItems.map((item, index) => (
            <TodoItem key={index} item={item} index={index} />
          ))
        ) : (
          <p className="err text-danger text-center h4">
            <i>
              <FaExclamationCircle />
            </i>{" "}
            There's nothing to do!
          </p>
        )}
      </div>
    </div>
  );
};

export default TodoList;
