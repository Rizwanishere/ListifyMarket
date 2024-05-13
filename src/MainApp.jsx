import { Routes, Route } from "react-router-dom";

import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import NotFound from "./NotFound";
import UserList from "./User/UserList";
import ProductList from "./Product/ProductList";
import ProductDetail from "./Product/ProductDetail";
import NewProduct from "./Product/NewProduct";
import TodoList from "./todo/TodoList";
import TodoDetail from "./todo/TodoDetail";
import NewTodo from "./todo/NewTodo";
import UpdateTodo from "./todo/UpdateTodo";

function MainApp() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/products/new" element={<NewProduct/>}></Route>
        <Route path="/todo" element={<TodoList />} />
        <Route path="/todo/:id" element={<TodoDetail />} />
        <Route path="/todo/new" element={<NewTodo />} />
        <Route path="/todo/update/:id" element={<UpdateTodo />} />
        <Route path="/users" element={<UserList />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}
export default MainApp;
