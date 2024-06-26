// import axios from "axios";
import { useEffect } from "react";
// import { ListWork } from "../store/interface/interface";
import { useDispatch, useSelector } from "react-redux";
import { fetchTasks, updateCheckbox } from "../store/reducers/tasksSlice";

export default function Content() {
  // const [data, setData] = useState<ListWork[]>([]);
  const dispatch = useDispatch();
  const getData: any = useSelector((state) => state);

  useEffect(() => {
    dispatch(fetchTasks());
  }, []);
  const handleCheckboxChange = (work: any) => {
    // console.log(work);
    const newWork = {
      ...work,
      status: !work.status,
    };
    dispatch(updateCheckbox(newWork));
  };

  return (
    <div>
      {" "}
      <div className="tab-content" id="ex1-content">
        <div className="tab-pane fade show active">
          <ul className="list-group mb-0">
            {getData.tasks.tasks.map((work: any) => {
              return (
                <li
                  key={work.id}
                  className="list-group-item d-flex align-items-center justify-content-between border-0 mb-2 rounded"
                  style={{ backgroundColor: "#f4f6f7" }}
                >
                  <div>
                    <input
                      // value={}
                      className="form-check-input me-2"
                      type="checkbox"
                      checked={work.status}
                      onChange={() => handleCheckboxChange(work)}
                    />
                    {work.status ? (
                      <s>{work.name}</s>
                    ) : (
                      <span>{work.name}</span>
                    )}
                  </div>
                  <div className="d-flex gap-3">
                    <i className="fas fa-pen-to-square text-warning" />
                    <i className="far fa-trash-can text-danger" />
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      {/* <div className="overlay">
          <div className="modal-custom">
            <div className="modal-header-custom">
              <h5>Xác nhận</h5>
              <i className="fas fa-xmark" />
            </div>
            <div className="modal-body-custom">
              <p>Bạn chắc chắn muốn xóa công việc quét nhà?</p>
            </div>
            <div className="modal-footer-footer">
              <button className="btn btn-light">Hủy</button>
              <button className="btn btn-danger">Xóa</button>
            </div>
          </div>
        </div> */}
    </div>
  );
}
