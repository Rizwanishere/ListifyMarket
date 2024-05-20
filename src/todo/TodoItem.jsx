import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
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
    <div className="flex max-w p-5 border shadow rounded-lg mb-3 items-center justify-between space-x-24">
      <Link to={"/todo/" + todo._id}>
        
        <div className="px-5 pb-5">
          <h5 className="text-lg m-4 ml-0 font-bold">
            Title: <span className="font-semibold text-gray-600">{todo.title} </span>
          </h5>
          <div className="text-md font-bold tracking-tight text-gray-900">
            Description: <span className="font-semibold text-gray-600">{todo.description}</span>
          </div>

          <div className="text-md mt-4 font-bold tracking-tight text-gray-900">
            Status:{' '}
            <span className={`${todo.status === 'completed' ? 'text-green-500' : todo.status === 'in-progress' ? 'text-yellow-500' : 'text-red-500'}`}>{todo.status}</span>
          </div>
        </div>
      </Link>    

     <div className="flex mt-4 justify-end">
      <Link to={{ pathname: `/todo/update/${todo._id}`, state: { todoData: todo } }}>
        <button className="border border-gray-200 shadow rounded p-2 hover:bg-gray-100"><FontAwesomeIcon icon={faEdit} /></button>
      </Link>
      <button onClick={onDeleteButton}
        className=" ml-2 border border-gray-200 shadow rounded p-2 mb-3 hover:bg-gray-100"
        ><FontAwesomeIcon icon={faTrash} /></button>
     </div>

    </div>
  );
}
export default TodoItem;
