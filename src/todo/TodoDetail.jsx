import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import TodoItem from "./TodoItem";
import ShouldRender from "../util/ShouldRender";
import axios from "axios";
import Loader from "../util/Loader";

function TodoDetail() {
  const [todo, setTodo] = useState(null);
  const [loading, setLoading] = useState(true);

  const params = useParams();

  useEffect(() => {
    const id = params.id;
    const url = `http://localhost:3000/todo/${id}`;
    axios
      .get(url)
      .then((res) => setTodo(res.data), setLoading(false))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="flex justify-center h-42 ml-28 mr-28">
      <ShouldRender when={loading}>
        <Loader />
      </ShouldRender>

      <ShouldRender when={todo}>
        <TodoItem todo={todo} />
      </ShouldRender>
    </div>
  );
}

export default TodoDetail;
