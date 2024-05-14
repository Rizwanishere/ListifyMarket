import React, { useState, useEffect } from "react";
import axios from "axios";
import Error from "../util/Error";
import ShouldRender from "../util/ShouldRender";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function UpdateTodo() {
  const { id } = useParams();
  const [todo, setTodo] = useState({
    title: "",
    description: "",
    status: "",
  });
  const [hasError, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchTodo = async () => {
      try {
        const url = `https://cgc-todo-list.onrender.com/todo/${id}`;
        const response = await axios.get(url);
        const todoData = response.data;
        setTodo({
          title: todoData.title,
          description: todoData.description,
          status: todoData.status,
        });
      } catch (error) {
        setError(true);
      }
    };

    fetchTodo();
  }, [id]);

  const onInputChange = (evt) => {
    const newState = { ...todo, [evt.target.name]: evt.target.value };
    setTodo(newState);
  };

  const onSubmitBtn = async (evt) => {
    evt.preventDefault();
    try {
      const url = `https://cgc-todo-list.onrender.com/todo/${id}`;
      await axios.patch(url, todo);
      setSuccess(true);
      setTimeout(() => {
        navigate("/todo");
      }, 1000);
    } catch (error) {
      setError(true);
    }
  };

  return (
    <div className="m-2 p-2">
      <ShouldRender when={success}>
        <div className="py-2 mx-auto my-4 w-1/2 bg-green-500 text-white rounded text-center font-semibold">
          Successfully updated task
        </div>
      </ShouldRender>

      <ShouldRender when={hasError}>
        <Error msg="Failed to update task, Please try again" />
      </ShouldRender>

      <h1 className="text-2xl flex justify-center mb-10 font-serif">
        Update Task
      </h1>

      <div className="flex flex-col">
        <label
          className="block flex justify-center text-xl mt-4 py-1 font-serif"
          htmlFor="editTodo"
        >
          Title
        </label>
        <input
          name="title"
          type="text"
          placeholder="Edit todo"
          value={todo.title}
          onChange={onInputChange}
          className="block mx-auto mt-2 font-serif border border-gray-500 p-1 w-1/2 rounded"
        />
      </div>

      <div className="flex flex-col">
        <label className="block flex justify-center text-xl mt-8 py-1 font-serif">
          Description
        </label>
        <input
          name="description"
          value={todo.description}
          onChange={onInputChange}
          className="border block mx-auto mt-1 font-serif border-gray-500 p-1 w-1/2 rounded"
          placeholder="Description"
          type="text"
        />
      </div>

      <div className="flex flex-col">
        <label className="block flex justify-center text-xl mt-8 py-1 font-serif">
          Status
        </label>
        <select
          name="status"
          value={todo.status}
          onChange={onInputChange}
          className="border block mx-auto mt-1 font-serif border-gray-500 p-1 w-1/2 rounded"
        >
          <option value="">Select</option>
          <option value="in-progress">In progress</option>
          <option value="pending">Pending</option>
          <option value="completed">Completed</option>
        </select>
      </div>

      <button
        type="submit"
        onClick={onSubmitBtn}
        className="block mx-auto font-serif mt-8 border border-black rounded px-4 py-1.5"
      >
        Update
      </button>
    </div>
  );
}

export default UpdateTodo;
