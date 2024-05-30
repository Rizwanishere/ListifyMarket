import axios from "axios";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Error from "../util/Error";
import ShouldRender from "../util/ShouldRender";
import UserContext from "../Contexts/UserContext";
import { FaGithub, FaGoogle } from "react-icons/fa";

function Login() {
  const [user, setUser] = useState({ email: "", password: "" });
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  const { setLoggedin } = useContext(UserContext);

  const onInputChange = (evt) => {
    const newUser = { ...user, [evt.target.name]: evt.target.value };
    setUser(newUser);
  };
  const onLogin = async (evt) => {
    evt.preventDefault();
    try {
      const url = "https://cgc-nodejs.onrender.com/users/signin";
      const res = await axios.post(url, user);
      localStorage.setItem("token", res.data.token);
      navigate("/product");
      setLoggedin(true);
    } catch (error) {
      setError(true);
    }
  };

  return (
    <div className="flex items-center justify-center mt-8 mb-8 bg-white shadow-lg rounded border border-primary">
      <form
        onSubmit={onLogin}
        className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md"
      >
        <ShouldRender when={error}>
          <Error msg="Invalid Username or Password" />
        </ShouldRender>
        <h1 className="font-bold text-2xl mb-8 text-center">
          Sign In to Your Account
        </h1>

        <div className="flex flex-col space-y-4 mb-4">
          <button className="flex items-center justify-center bg-white text-black border border-gray-300 px-4 py-2 rounded focus:outline-none">
            <FaGithub className="mr-2 text-primary" /> Sign in with GitHub
          </button>
          <button className="flex items-center justify-center bg-white text-black border border-gray-300 px-4 py-2 rounded focus:outline-none">
            <FaGoogle className="mr-2 text-primary" /> Sign in with Google
          </button>
        </div>

        <div className="relative my-4">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-white text-gray-500">Or</span>
          </div>
        </div>

        <div className="mb-4">
          <label className="block mb-1 font-semibold">Email</label>
          <input
            name="email"
            type="email"
            value={user.email}
            onChange={onInputChange}
            className="block border border-gray-300 w-full rounded p-2"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block mb-1 font-semibold">Password</label>
          <input
            name="password"
            type="password"
            value={user.password}
            onChange={onInputChange}
            className="block border border-gray-300 w-full rounded p-2"
            required
          />
        </div>

        <div className="mb-4">
          <button
            type="submit"
            className="w-full bg-primary hover:bg-secondary text-white py-2 rounded focus:outline-none"
          >
            Sign In
          </button>
        </div>

        <div className="text-center mt-4">
          <p className="text-gray-500">
            Don't have an account?{" "}
            <a href="/signup" className="text-primary">
              Sign Up
            </a>
          </p>
        </div>
      </form>
    </div>
  );
}
export default Login;