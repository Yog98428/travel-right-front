// import Profile  from "../../model/profile";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootStore } from "../../store";
import Profile from "../../model/profile";
import { register, clearProfileError } from "../../store/action/profile";
import { Redirect } from "react-router";
import { Link } from "react-router-dom";
import axios from "axios";
import { registerApi } from "../../utility/apis";

const Signup = () => {
  // const { loading, success, error, process } = useSelector(
  //   (state: RootStore) => state.profile
  // );
  const [loading, setloading] = useState(false);

  // const dispatch = useDispatch();
  const [users, setUsers] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [registerError, setregisterError] = useState(null);

  let name, value;
  const handleInput = (x: any) => {
    console.log(x);
    name = x.target.name;
    value = x.target.value;
    setUsers({ ...users, [name]: value });
  };

  const PostDate = async (e: any) => {
    e.preventDefault();
    try {
      setloading(true);
      const response = await axios.post(
        registerApi,
        {
          email: users.email,
          password: users.password,
          confirmPassword: users.confirmPassword,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (!response.data.success) {
        setloading(false);
        console.log(response.data);
        setregisterError(response.data.message);
      }
      setloading(false);
      return <Redirect to="/signin" />;
    } catch (err) {
      setloading(false);
      setregisterError(err);
    }

    // dispatch(register(users.email, users.password, users.confirmPassword));
    // const {email, password, confirmPassword} = user;
  };
  return (
    <>
      <div
        className="card"
        style={{ width: "30rem ", padding: "2rem", margin: "4rem auto" }}
      >
        <form>
          <h3>Sign Up</h3>

          <div className="form-group">
            <label>Email address</label>
            <input
              type="email"
              name="email"
              id="email"
              className="form-control"
              placeholder="Enter email"
              onChange={handleInput}
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              name="password"
              id="password"
              className="form-control"
              placeholder="Enter password"
              onChange={handleInput}
            />
          </div>
          <div className="form-group">
            <label>Confirm Password </label>
            <input
              type="confirmPassword"
              name="confirmPassword"
              id="confirmPassword"
              className="form-control"
              placeholder="Confirm password"
              onChange={handleInput}
            />
          </div>

          {registerError && (
            <p className="text-error alert-danger">{registerError} </p>
          )}
          <button
            type="submit"
            onClick={PostDate}
            className="btn btn-primary btn-block"
          >
            {loading ? <>Loading...</> : <>Submit</>}
          </button>
          <p className="already-account text-right">
            already <Link to="/signin">account?</Link>
          </p>
        </form>
      </div>
    </>
  );
};

export default Signup;
