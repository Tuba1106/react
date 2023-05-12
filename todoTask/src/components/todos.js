import axios from "../axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function Todos() {
  const { id } = useParams();
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const response = await axios.get("/todo");
      const data = response.data.data;
      const userTodos = data.filter((el) => {
        return el.taskId === id;
      });
      setTodos([...userTodos]);
    };
    getData();
  }, []);

  const addTodo = async () => {
    try {
      const response = await axios.post("/todo", {
        taskId: id,
        todo: todo,
      });
      const data = response.data.data.todo;
      setTodos([...todos, data]);
      console.log(todos);
    } catch (err) {
      console.log(err);
    }
  };
  const DeleteBtn = async () => {
    const res = await axios.delete(`/tasks/${id}`);
    res.data && window.location.replace("/");
  };

  return (
    <div>
      <button onClick={DeleteBtn}>delete task</button>
      <input
        onChange={(e) => {
          setTodo(e.target.value);
        }}
        placeholder="new todo"
      />
      <button onClick={addTodo}>submit</button>
      {todos.map((el) => (
        <>
          <p>{el.todo}</p>
        </>
      ))}
    </div>
  );
}

export default Todos;
