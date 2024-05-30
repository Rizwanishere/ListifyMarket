import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Error from "../util/Error";
import ShouldRender from "../util/ShouldRender";
import { FaGithub, FaGoogle } from "react-icons/fa";

function Signup() {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const [submitError, setSubmitError] = useState(false);
  const [submitErrorMessage, setSubmitErrorMessage] = useState("");
  const navigate = useNavigate();

  const validateInput = (name, value) => {
    let errorMsg = "";

    if (name === "firstName" || name === "lastName") {
      if (!value) {
        errorMsg = "This field is required";
      } else if (value.length < 3) {
        errorMsg = "Must be at least 3 characters";
      }
    }

    if (name === "email") {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!value) {
        errorMsg = "This field is required";
      } else if (!emailPattern.test(value)) {
        errorMsg = "Invalid email address";
      }
    }

    if (name === "password") {
      if (!value) {
        errorMsg = "This field is required";
      } else if (value.length < 6) {
        errorMsg = "Must be at least 6 characters";
      }
    }

    setErrors((prevErrors) => ({ ...prevErrors, [name]: errorMsg }));
  };

  const onInputChange = (evt) => {
    const { name, value } = evt.target;
    setUser({ ...user, [name]: value });
    validateInput(name, value);
  };

  const onSignup = async (evt) => {
    evt.preventDefault();
    try {
      const url = "https://cgc-nodejs.onrender.com/users/signup";
      await axios.post(url, user);
      navigate("/signin");
    } catch (error) {
      setSubmitError(true);
      setSubmitErrorMessage(error.response?.data || "Internal Server Error");
    }
  };

  const isFormValid = () => {
    return (
      Object.values(errors).every((error) => !error) &&
      Object.values(user).every((value) => value)
    );
  };

  return (
    <div className="flex items-center justify-center mt-8 mb-8 bg-white shadow-lg rounded border border-primary">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md w-[380px]">
        <ShouldRender when={submitError}>
          <Error msg={submitErrorMessage} />
        </ShouldRender>
        <h1 className="font-bold text-2xl mb-8 text-center">
          Create Your Account
        </h1>

        <div className="flex flex-col space-y-4 mb-4">
          <button className="flex items-center justify-center bg-white text-black border border-gray-300 px-4 py-2 rounded focus:outline-none">
            <FaGithub className="mr-2 text-primary" /> Sign up with GitHub
          </button>
          <button className="flex items-center justify-center bg-white text-black border border-gray-300 px-4 py-2 rounded focus:outline-none">
            <FaGoogle className="mr-2 text-primary" /> Sign up with Google
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

        <form onSubmit={onSignup}>
          <div className="mb-4">
            <label className="block mb-1 font-semibold">First Name</label>
            <input
              name="firstName"
              type="text"
              value={user.firstName}
              onChange={onInputChange}
              className="block border border-gray-300 w-full rounded p-2"
              required
            />
            <ShouldRender when={errors.firstName}>
              <div className="text-sm text-red-500 mt-1">
                {errors.firstName}
              </div>
            </ShouldRender>
          </div>

          <div className="mb-4">
            <label className="block mb-1 font-semibold">Last Name</label>
            <input
              name="lastName"
              type="text"
              value={user.lastName}
              onChange={onInputChange}
              className="block border border-gray-300 w-full rounded p-2"
              required
            />
            <ShouldRender when={errors.lastName}>
              <div className="text-sm text-red-500 mt-1">{errors.lastName}</div>
            </ShouldRender>
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
            <ShouldRender when={errors.email}>
              <div className="text-sm text-red-500 mt-1">{errors.email}</div>
            </ShouldRender>
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
            <ShouldRender when={errors.password}>
              <div className="text-sm text-red-500 mt-1">{errors.password}</div>
            </ShouldRender>
          </div>

          <div className="mb-4">
            <button
              type="submit"
              className="w-full bg-primary hover:bg-secondary text-white py-2 rounded focus:outline-none"
              disabled={!isFormValid()}
            >
              Sign Up
            </button>
          </div>
        </form>

        <div className="text-center mt-4">
          <p className="text-gray-500">
            Already have an account?{" "}
            <Link to="/signin" className="text-primary hover:text-secondary">
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signup;
