import React, { useState } from "react";
import "./Signup.css";
import { Link, resolvePath } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/login", { email, password })
      .then((result) => {
        console.log(result);
        if (result.data === "success") {
          navigate("/home");
        }
      });
  };
  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="w-50 m-auto mt-5 bg-grey p-5 bg-secondary text-white  rounded-3"
      >
        <div className="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Login
        </button>
        <div className="login mt-3 d-flex">
          <p>New Here?</p>
          <Link to="/" type="submit" className="btn btn-primary ml-3 mb-4">
            Register
          </Link>
        </div>
      </form>
    </>
  );
};

export default Login;
