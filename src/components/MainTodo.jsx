import { useState } from "react";
import AddForm from "./AddForm";
import TodoList from "./TodoList";

function MainTodo() {
  const [taskArray, setTaskArray] = useState([]);

  const handleNewTask = (name, dueDate) => {
    const newTasks = [
      ...taskArray,
      {
        name: name,
        dueDate: dueDate,
      },
    ];
    setTaskArray(newTasks);
  };

  const handleDeleteTask = (name) => {
    const newTasks = taskArray.filter((task) => task.name !== name);
    setTaskArray(newTasks);
  };

  return (
    <>
      <main className="container">
        <h1 className="text-center my-5">TODO APP</h1>
        <h6 className="text-muted my-3">Add TODO</h6>
        <AddForm addTask={handleNewTask}></AddForm>
        <h6 className="text-muted my-3">TODO List</h6>
        {taskArray.map((item, index) => (
          <TodoList
            key={index}
            tasks={item}
            deleteTask={handleDeleteTask}
          ></TodoList>
        ))}
        {taskArray.length === 0 && (
          <div className="alert alert-danger text-center" role="alert">
            <span className="fw-semibold">
              There are currently no tasks available. Please add a task.
            </span>
          </div>
        )}
      </main>
    </>
  );
}

export default MainTodo;
