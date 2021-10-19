import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "../../Services/Axios";
const Dashboard = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios
      .get("/data")
      .then((res) => setUsers(res.data))
      .catch((err) => console.log(err));
  }, []);
  const handleLogout = () => {
    localStorage.removeItem("token");
  };
  return (
    <div>
      <p style={{ textAlign: "right" }}>
        <Link to="/login" onClick={handleLogout} className="btn btn-info">
          Logout
        </Link>
      </p>
      <h1>Dashboard</h1>
      <table className="table table-bordered table-striped table-hover">
        <thead>
          <tr>
            <th>Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.name}>
              <td>{user.name}</td>
              <td>
                <button className="btn">Edit</button>
                <button className="btn btn-danger">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;
