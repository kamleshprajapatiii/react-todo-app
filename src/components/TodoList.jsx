function TodoList() {
  let taskName = "Task name";
  let taskDate = "00/00/0000";

  return (
    <>
      <section>
        <div className="row g-2 mt-1 d-flex align-items-center">
          <div className="col-md-5 col-12">
            <span className="fw-semibold">{taskName}</span>
          </div>
          <div className="col-md-5 col-12">
            <span className="fw-semibold">{taskDate}</span>
          </div>
          <div className="col-md-2 col-12">
            <button className="btn btn-danger w-100">Delete</button>
          </div>
        </div>
      </section>
    </>
  );
}

export default TodoList;
