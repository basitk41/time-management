import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import styles from "./Login.module.css";
import { useDispatch } from "react-redux";
import { login } from "../../Store/Actions";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  const dispatch = useDispatch();
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
        <button
          className={styles.loginBtn}
          onClick={() => dispatch(login({ email, password }, history.push))}
        >
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
