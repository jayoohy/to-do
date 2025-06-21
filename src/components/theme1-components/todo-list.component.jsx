import TodoItem from "./todo-item.component";

const TodoList = () => {
  return (
    <div className="row mx-1 px-5 pb-3 w-80">
      <div className="col mx-auto">
        <TodoItem />
      </div>
    </div>
  );
};

export default TodoList;
