const TodoList = ({ tasks, deleteTask }) => {
  return (
    <>
      <section>
        <div className="row g-2 mt-1 d-flex align-items-center">
          <div className="col-md-8 col-12">
            <span className="fw-semibold">{tasks.name}</span>
          </div>
          <div className="col-md-2 col-12">
            <span className="fw-semibold">{tasks.dueDate}</span>
          </div>
          <div className="col-md-2 col-12">
            <button
              className="btn btn-danger w-100"
              onClick={() => deleteTask(tasks.name)}
            >
              Delete
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default TodoList;
