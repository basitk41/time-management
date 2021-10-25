import React, { useState } from "react";
import styles from "./Register.module.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { register } from "../../Store/Actions";
const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [valid, setValid] = useState(false);
  const dispatch = useDispatch();
  const handleSubmit = () => {
    if (name && email && password) {
      dispatch(register({ name, email, password }));
      setValid(false);
      setName("");
      setEmail("");
      setPassword("");
    } else {
      setValid(true);
    }
  };
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
          {valid && !name ? (
            <span className={styles.errorMessage}>
              Please enter your name *
            </span>
          ) : null}
        </div>
        <div className="form-group mb-3">
          <input
            type="text"
            className={`form-control ${styles.formControl}`}
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {valid && !email ? (
            <span className={styles.errorMessage}>
              Please enter valid email *
            </span>
          ) : null}
        </div>
        <div className="form-group mb-3">
          <input
            type="password"
            className={`form-control ${styles.formControl}`}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {valid && !password ? (
            <span className={styles.errorMessage}>Please enter password *</span>
          ) : null}
        </div>
        <button className={styles.btn} onClick={handleSubmit}>
          Sign up
        </button>
        <p>
          If already have account
          <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
