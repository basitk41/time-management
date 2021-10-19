import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getUsers, logout } from "../../Store/Actions";
const Dashboard = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.User.users);
  useEffect(() => {
    dispatch(getUsers());
    //eslint-disable-next-line
  }, []);
  return (
    <div>
      <p style={{ textAlign: "right" }}>
        <Link
          to="/login"
          onClick={() => dispatch(logout())}
          className="btn btn-info"
        >
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
