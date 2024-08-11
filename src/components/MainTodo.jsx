import AddForm from "./AddForm";
import TodoList from "./TodoList";

function MainTodo() {
  return (
    <>
      <main className="container">
        <h1 className="text-center my-5">TODO APP</h1>
        <h6 className="text-muted my-3">Add TODO</h6>
        <AddForm></AddForm>
        <h6 className="text-muted my-3">TODO List</h6>
        <TodoList></TodoList>
      </main>
    </>
  );
}

export default MainTodo;
