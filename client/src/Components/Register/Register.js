import React, { useState } from "react";
import styles from "./Register.module.css";
import { Link } from "react-router-dom";
const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className={styles.Register}>
      <div className={styles.registerWrap}>
        <h1>Sign up</h1>
        <div className="form-group mb-3 mt-4">
          <input
            type="text"
            className={`form-control ${styles.formControl}`}
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-group mb-3">
          <input
            type="text"
            className={`form-control ${styles.formControl}`}
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group mb-3">
          <input
            type="text"
            className={`form-control ${styles.formControl}`}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button className={styles.btn}>Sign up</button>
        <p>
          If already have account
          <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
