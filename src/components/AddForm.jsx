function AddForm() {
  return (
    <>
      <section>
        <div className="row g-2 mt-3 d-flex align-items-center">
          <div className="col-md-5 col-12">
            <input
              type="text"
              className="form-control"
              placeholder="Enter task"
            />
          </div>
          <div className="col-md-5 col-12">
            <input type="date" className="form-control" />
          </div>
          <div className="col-md-2 col-12">
            <button className="btn btn-success w-100">Insert</button>
          </div>
        </div>
      </section>
    </>
  );
}

export default AddForm;
