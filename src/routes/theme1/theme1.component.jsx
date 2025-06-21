import { Link } from "react-router";
import { FaCheck } from "react-icons/fa";
import Options from "../../components/theme1-components/options.component";
import TodoList from "../../components/theme1-components/todo-list.component";
import Todo from "../../components/theme1-components/todo.component";
import "./theme1.styles.css";

const Theme1 = () => {
  return (
    <>
      <Link to="/dark">
        <button className="btn btn-primary float-right mx-4">Theme 2</button>
      </Link>
      <div className="container m-5 p-2 rounded mx-auto bg-light shadow">
        <div className="row m-1 p-4">
          <div className="col">
            <div className="p-1 h1 text-primary text-center mx-auto display-inline-block">
              <u>Todo</u>
              <i className="bg-primary text-white rounded p-2">
                <FaCheck />
              </i>
            </div>
          </div>
        </div>
        <Todo />
        <Options />
        <TodoList />
      </div>
    </>
  );
};

export default Theme1;
