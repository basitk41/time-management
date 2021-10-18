import React from "react";
import styles from "./Login.module.css";

const Login = () => {
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
          />
        </div>
        <div className="form-group mb-3">
          <input
            type="password"
            className={`form-control ${styles.formControl}`}
            placeholder="Enter Password"
          />
        </div>
        <button className={styles.loginBtn}>Login</button>
        <p>
          If don't have account
          <span>SignUp?</span>
        </p>
      </div>
    </div>
  );
};

export default Login;
