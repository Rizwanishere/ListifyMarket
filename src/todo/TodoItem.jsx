import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function TodoItem({ todo }) {
  const onDeleteButton = async () => {
    try {
      await axios.delete(`https://cgc-todo-list.onrender.com/todo/${todo._id}`);
    } catch(err) {
      console.log(err);
    }
  }

  return (
    <div className="m-2 ml-8 max-w-sm bg-white border border-gray-200 rounded-lg shadow">
      <Link to={"/todo/" + todo._id}>
        
        <div className="px-5 pb-5">
          <h5 className="text-lg m-4 ml-0 font-bold">
            Title: <span className="font-semibold text-gray-600">{todo.title} </span>
          </h5>
          <div className="text-md font-bold tracking-tight text-gray-900">
            Description: <span className="font-semibold text-gray-600">{todo.description}</span>
          </div>

          <div className="text-md mt-4 font-bold tracking-tight text-gray-900">
            Status: <span className="font-semibold text-gray-600">{todo.status}</span>
          </div>
        </div>
      </Link>    

     <div className="px-5 pb-5">
      <Link to={{ pathname: `/todo/update/${todo._id}`, state: { todoData: todo } }}>
        <button className="mt-2 border border-gray-200 shadow font-serif rounded p-1 hover:bg-gray-100 w-full">Update</button>
      </Link>
     </div>

     <div className="px-5 pb-5">
        <button onClick={onDeleteButton}
        className="border border-gray-200 shadow font-serif rounded p-1 hover:bg-gray-100 w-full"
        >Delete</button>
     </div>      

    </div>
  );
}
export default TodoItem;
