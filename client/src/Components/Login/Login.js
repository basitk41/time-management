import React, { useState } from "react";
import axios from "../../Services/Axios";
import { useHistory } from "react-router-dom";
import styles from "./Login.module.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  const handleLogin = () => {
    axios
      .post("/auth/login", { email, password })
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        history.push("/dashboard");
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className={styles.loginWrap}>
      <div className={styles.formWrap}>
        <h1>
          <b>Login</b>
        </h1>
        <div className="form-group mb-3">
          <input
            type="text"
            className={`form-control ${styles.formControl}`}
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group mb-3">
          <input
            type="password"
            className={`form-control ${styles.formControl}`}
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button className={styles.loginBtn} onClick={handleLogin}>
          Login
        </button>
        <p>
          If don't have account
          <span>SignUp?</span>
        </p>
      </div>
    </div>
  );
};

export default Login;
