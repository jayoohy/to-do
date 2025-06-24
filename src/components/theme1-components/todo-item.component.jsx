import { useDispatch, useSelector } from "react-redux";
import {
  checkToggle,
  deleteItem,
} from "../../store/todo-list/todo-list.action";
import { selectListItems } from "../../store/todo-list/todo-list.selector";
import {
  FaHourglassEnd,
  FaInfoCircle,
  FaPencilAlt,
  FaRegCheckSquare,
  FaRegSquare,
  FaRegTrashAlt,
} from "react-icons/fa";

const TodoItem = ({ item, index }) => {
  const dispatch = useDispatch();
  const listItems = useSelector(selectListItems);

  const toggleCheck = () => dispatch(checkToggle(listItems, index));

  const deleteItemHandler = () => dispatch(deleteItem(listItems, index));

  return (
    <div className="row px-3 align-items-center todo-item rounded">
      <div
        className="col-auto m-1 p-0 d-flex align-items-center"
        onClick={toggleCheck}
      >
        <h2 className="m-0 p-0">
          {item.check ? (
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
              className="text-primary m-0 p-0 d-none"
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
        <input
          type="text"
          className="form-control form-control-lg border-0 edit-todo-input bg-transparent rounded px-3"
          readOnly
          value={item}
          title={item}
        />
        <input
          type="text"
          className="form-control form-control-lg border-0 edit-todo-input rounded px-3 d-none"
          defaultValue={item}
        />
      </div>
      <div className="col-auto m-1 p-0 px-3 d-none"></div>
      <div className="col-auto m-1 p-0 todo-actions">
        <div className="row d-flex align-items-center justify-content-end">
          <h5 className="m-0 p-0 px-2">
            <i
              className="text-info btn m-0 p-0"
              data-toggle="tooltip"
              data-placement="bottom"
              title="Edit todo"
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
              title=""
              data-original-title="Created date"
            >
              <FaInfoCircle />
            </i>
            <label className="date-label my-2 text-black-50">
              28th Jun 2020
            </label>
          </div>
        </div>
      </div>
    </div>
  );

  // <div className="row px-3 align-items-center todo-item rounded">
  //   <div className="col-auto m-1 p-0 d-flex align-items-center">
  //     <h2 className="m-0 p-0">
  //       <i
  //         className="text-primary m-0 p-0 d-none"
  //         data-toggle="tooltip"
  //         data-placement="bottom"
  //         title="Mark as complete"
  //       >
  //         <FaRegSquare />
  //       </i>
  //       <i
  //         className="text-primary m-0 p-0"
  //         data-toggle="tooltip"
  //         data-placement="bottom"
  //         title="Mark as todo"
  //       >
  //         <FaRegCheckSquare />
  //       </i>
  //     </h2>
  //   </div>
  //   <div className="col px-1 m-1 d-flex align-items-center">
  //     <input
  //       type="text"
  //       className="form-control form-control-lg border-0 edit-todo-input bg-transparent rounded px-3"
  //       readOnly=""
  //       defaultValue="Renew car insurance"
  //       title="Renew car insurance"
  //     />
  //     <input
  //       type="text"
  //       className="form-control form-control-lg border-0 edit-todo-input rounded px-3 d-none"
  //       defaultValue="Renew car insurance"
  //     />
  //   </div>
  //   <div className="col-auto m-1 p-0 px-3">
  //     <div className="row">
  //       <div className="col-auto d-flex align-items-center rounded bg-white border border-warning">
  //         <i
  //           className="fa fa-hourglass-2 my-2 px-2 text-warning btn"
  //           data-toggle="tooltip"
  //           data-placement="bottom"
  //           title=""
  //           data-original-title="Due on date"
  //         >
  //           <FaHourglassEnd />
  //         </i>
  //         <h6 className="text my-2 pr-2">28th Jun 2020</h6>
  //       </div>
  //     </div>
  //   </div>
  //   <div className="col-auto m-1 p-0 todo-actions">
  //     <div className="row d-flex align-items-center justify-content-end">
  //       <h5 className="m-0 p-0 px-2">
  //         <i
  //           className="text-info btn m-0 p-0"
  //           data-toggle="tooltip"
  //           data-placement="bottom"
  //           title="Edit todo"
  //         >
  //           <FaPencilAlt />
  //         </i>
  //       </h5>
  //       <h5 className="m-0 p-0 px-2">
  //         <i
  //           className="text-danger btn m-0 p-0"
  //           data-toggle="tooltip"
  //           data-placement="bottom"
  //           title="Delete todo"
  //         >
  //           <FaRegTrashAlt />
  //         </i>
  //       </h5>
  //     </div>
  //     <div className="row todo-created-info">
  //       <div className="col-auto d-flex align-items-center pr-2">
  //         <i
  //           className="my-2 px-2 text-black-50 btn"
  //           data-toggle="tooltip"
  //           data-placement="bottom"
  //           title=""
  //           data-original-title="Created date"
  //         >
  //           <FaInfoCircle />
  //         </i>
  //         <label className="date-label my-2 text-black-50">
  //           28th Jun 2020
  //         </label>
  //       </div>
  //     </div>
  //   </div>
  // </div>
};

export default TodoItem;
