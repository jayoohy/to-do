import { FaBan, FaExclamationCircle, FaPlus, FaTimes } from "react-icons/fa";

const Body = () => {
  return (
    <div className="container">
      <div className="today">Awesome, it's Friday 🍻</div>
      <div className="row">
        <div className="col-md-4 offset-md-4 col-6 offset-3">
          <div className="add-control">
            <div className="form-group has-feedback">
              <div className="position-relative">
                <input
                  type="text"
                  className="form-control"
                  placeholder="✍️ Add item..."
                />
                <button
                  type="button"
                  className="position-absolute top-50 end-0 translate-middle-y pe-3 btn btn-link text-decoration-none"
                  title="Add item"
                  //   onClick={handleAddItem}
                >
                  <FaPlus />
                </button>
              </div>
            </div>
          </div>
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
          <ul className="todo-list ui-sortable">
            <li data-id="R1750447141492" className="danger">
              <div className="checkbox">
                <span className="close">
                  <i>
                    <FaTimes />
                  </i>
                </span>
                <label>
                  <span className="checkbox-mask" />
                  <input type="checkbox" />
                  nnpi
                </label>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Body;
