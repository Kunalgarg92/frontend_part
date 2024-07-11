import React, { useContext, useState } from "react";
import AuthContext from "../pages/AuthProvider";
import "../styles/Login.css";
import user from "../images/user.png";
import { useNavigate } from "react-router-dom";
import Layout from "../components/Layout";

function Login() {
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   await login(email, password);
  // };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const success = await login(email, password);
    if (success) {
      navigate("/view");
    }
  };

  return (
    <Layout>
      <div className="formDiv">
        <img src={user} alt="Login" className="userImage" />
        <h3 style={{ textAlign: "center", color: "orange" }}>Login</h3>
        <div className="form">
          <form onSubmit={handleSubmit}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit" id="login">
              Login
            </button>
            <input type="checkbox" name="remember" id="remember" />
            Remember me
          </form>
        </div>
      </div>
    </Layout>
  );
}

export default Login;
