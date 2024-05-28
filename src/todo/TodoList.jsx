import { useEffect, useState } from "react";
import axios from "axios";
import Error from "../util/Error";
import ShouldRender from "../util/ShouldRender";
import TodoItem from "./TodoItem";
import { Link } from "react-router-dom";
import Loader from "../util/Loader";

function TodoList() {
  const [todo, setTodo] = useState([]);
  const [hasError, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [metadata, setMetadata] = useState({});
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState(null);
  const [direction, setDirection] = useState(null);

  const onPrev = () => {
    if (page > 1) setPage(page - 1);
  };
  const onNext = () => {
    if (page < metadata.pages) setPage(page + 1);
  };

  const fetchData = async () => {
    const url = `https://cgc-todo-list.onrender.com/todo/page/${page}/size/6?search=${search}&sort=${sort}&direction=${direction}`;
    try {
      const res = await axios.get(url);
      setTodo(res.data.data);
      setMetadata(res.data.metadata);
      setError(false);
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [page, search, sort, direction]);

  const onTextChange = (evt) => {
    setSearch(evt.target.value);
  };

  const onSearch = () => {
    fetchData();
  };

  const onEnter = (evt) => {
    if (evt.keyCode === 13) fetchData();
  };

  const onSortChange = (evt) => {
    const sortStrings = evt.target.value;
    const tokens = sortStrings.split(":");
    setSort(tokens[0]);
    setDirection(tokens[1]);
  };

  const refresh = () => {
    fetchData();
  };

  return (
    <div>
      <div className="flex m-2 justify-center absolute top-20 left-0 right-0">
        <h1 className="flex text-2xl mt-1.5 p-1 py-6 px-3">
          Tasks
        </h1>

        <button
          onClick={onPrev}
          className="text-white bg-primary hover:bg-secondary mt-7 mb-10 mr-2 text-black p-1.5 rounded"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15.75 19.5 8.25 12l7.5-7.5"
            />
          </svg>
        </button>
        <h1 className="mt-9 text-gray-500 text-sm">
          {page} of {metadata.pages} (Total: {metadata.rows})
        </h1>
        <button
          onClick={onNext}
          className="text-white bg-primary hover:bg-secondary mt-7 mb-10 ml-2 text-black p-1.5 rounded"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m8.25 4.5 7.5 7.5-7.5 7.5"
            />
          </svg>
        </button>

        <div className="mt-7 ml-5">
          <label
            for="default-search"
            className="sr-only mb-1 text-sm font-medium"
          >
            Search
          </label>
          <div className="relative">
            <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3">
              <svg
                class="h-4 w-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              onKeyUp={onEnter}
              onChange={onTextChange}
              type="text"
              id="default-search"
              className="block w-full rounded-lg border p-2 ps-10 text-sm text-black"
              placeholder="Search title.."
            />
            <button
              onClick={onSearch}
              type="submit"
              className="absolute text-white bg-primary hover:bg-secondary bottom-1 end-2.5 rounded-lg px-3 py-1 text-sm font-medium text-black"
            >
              Search
            </button>
          </div>
        </div>

        <div>
          <select
            onChange={onSortChange}
            className="h-9 ml-3 mt-7 border border-black rounded"
          >
            <option>Sort</option>
            <option value="_id:asc">Oldest First</option>
            <option value="_id:desc">Latest First</option>
            <option value="status:asc">Completed First</option>
            <option value="status:desc">Pending First</option>
          </select>
        </div>

        <div>
          <Link
            to="/todo/new"
            className="flex text-white bg-primary p-1 pl-2 pr-2 mt-7 ml-5 hover:bg-secondary rounded text-black"
          >
            Add
          </Link>
        </div>
      </div>

      <ShouldRender when={loading}>
        <Loader />
      </ShouldRender>

      <ShouldRender when={hasError}>
        <Error />
      </ShouldRender>

      <div className="grid container flex items-center justify-center py-36 ">
        {todo.map((todo) => (
          <TodoItem todo={todo} onDelete={refresh}/>
        ))}
      </div>
    </div>
  );
}
export default TodoList;
