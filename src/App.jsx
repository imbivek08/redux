import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { fetchTodos } from "./feature/todo/todoSlice";

function App() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  if (state.todo.isLoading) {
    return <h1>Loading</h1>;
  }
  return (
    <>
      <button onClick={() => dispatch(fetchTodos())}>Fetch Data</button>
      {state.todo.data &&
        state.todo.data.map((e) => <li key={e.id}>{e.title}</li>)}
    </>
  );
}

export default App;
