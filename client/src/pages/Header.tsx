import { useDispatch, useSelector } from "react-redux";
import { addTask } from "../store/reducers/tasksSlice";
import React, { useState } from "react";

export default function Header() {
  const dispatch = useDispatch();
  const [taskName, setTaskName] = useState<string>("");
  const [error, setError] = useState<string>("");

  const addNewWork = async (e: React.FormEvent) => {
    e.preventDefault();
    // console.log(tasks.tasks);

    const newWork = {
      name: taskName,
      status: false,
    };
    setTaskName("");
    dispatch(addTask(newWork));
  };

  return (
    <div>
      <form className="d-flex justify-content-center align-items-center mb-4">
        <div className="form-outline flex-fill">
          <input
            name="name"
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)}
            type="text"
            id="form2"
            className="form-control"
          />
          <label className="form-label" htmlFor="form2">
            Nhập tên công việc
          </label>
        </div>
        <button
          onClick={(e) => addNewWork(e)}
          type="submit"
          className="btn btn-info ms-2"
        >
          Thêm
        </button>
      </form>

      {/* Form thêm công việc */}
      {/* {error && (
        <div className="overlay">
          <div className="modal-custom">
            <div className="modal-header-custom">
              <h5>Cảnh báo</h5>
              <i className="fas fa-xmark" onClick={() => setError("")} />
            </div>
            <div className="modal-body-custom">
              <p>{error}</p>
            </div>
            <div className="modal-footer-footer">
              <button className="btn btn-light" onClick={() => setError("")}>
                Đóng
              </button>
            </div>
          </div>
        </div>
      )} */}
    </div>
  );
}
