import { useState } from "react";

function AddForm({ addTask }) {
  const [taskName, setTaskName] = useState("");
  const [taskDueDate, setTaskDueDate] = useState("");

  const handelNameChange = (event) => {
    setTaskName(event.target.value);
  };

  const handelDueDateChange = (event) => {
    setTaskDueDate(event.target.value);
  };

  const handelInsertData = () => {
    addTask(taskName, taskDueDate);
    setTaskName("");
    setTaskDueDate("");
  };

  return (
    <>
      <section>
        <div className="row g-2 mt-3 d-flex align-items-center">
          <div className="col-md-8 col-12">
            <input
              type="text"
              className="form-control"
              placeholder="Enter task here"
              value={taskName}
              onChange={handelNameChange}
            />
          </div>
          <div className="col-md-2 col-12">
            <input
              type="date"
              className="form-control"
              value={taskDueDate}
              onChange={handelDueDateChange}
            />
          </div>
          <div className="col-md-2 col-12">
            <button
              className="btn btn-success w-100"
              onClick={handelInsertData}
            >
              Insert
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default AddForm;
