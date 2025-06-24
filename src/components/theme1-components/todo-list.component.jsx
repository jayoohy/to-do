import { useSelector } from "react-redux";
import TodoItem from "./todo-item.component";
import { selectListItems } from "../../store/todo-list/todo-list.selector";

const TodoList = () => {
  const listItems = useSelector(selectListItems);

  return (
    <div className="row mx-1 px-5 pb-3 w-80">
      <div className="col mx-auto">
        {listItems.map((item, index) => (
          <TodoItem key={index} item={item} index={index} />
        ))}
      </div>
    </div>
  );
};

export default TodoList;
