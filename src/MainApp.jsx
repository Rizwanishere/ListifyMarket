import { Routes, Route } from "react-router-dom";

import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import NotFound from "./NotFound";
import UserList from "./User/UserList";
import ProductHome from "./Products/ProductHome";
import ProductDetails from "./Products/ProductDetails";
import TodoList from "./todo/TodoList";
import TodoDetail from "./todo/TodoDetail";
import NewTodo from "./todo/NewTodo";
import UpdateTodo from "./todo/UpdateTodo";
import Login from "./User/Login";
import Signup from "./User/Signup";

function MainApp() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product" element={<ProductHome />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/todo" element={<TodoList />} />
        <Route path="/todo/:id" element={<TodoDetail />} />
        <Route path="/todo/new" element={<NewTodo />} />
        <Route path="/todo/update/:id" element={<UpdateTodo />} />
        <Route path="/signin" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}
export default MainApp;
