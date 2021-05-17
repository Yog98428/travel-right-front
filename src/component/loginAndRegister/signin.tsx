import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Redirect} from "react-router";
import {Link} from "react-router-dom";
import {RootStore} from "../../store";
import {login} from "../../store/action/profile";

const Signin = () => {
  const {loading, success, error} = useSelector(
    (state: RootStore) => state.profile
  );
  const dispatch = useDispatch();
  const [users, setUsers] = useState({email: "", password: ""});

  if (success) {
    return <Redirect to="/" />;
  }
  let name, value;
  const handleInput = (x: any) => {
    console.log(x);
    name = x.target.name;
    value = x.target.value;
    setUsers({...users, [name]: value});
  };

  const PostData = async (e: any) => {
    dispatch(login(users.email, users.password));
  };
  return (
    <>
      <div
        className="card"
        style={{width: "30rem ", padding: "2rem", margin: "4rem auto"}}
      >
        <form>
          <h3>Sign In</h3>

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
            <div className="custom-control custom-checkbox">
              <input
                type="checkbox"
                className="custom-control-input"
                id="customCheck1"
              />
              <label className="custom-control-label" htmlFor="customCheck1">
                Remember me
              </label>
            </div>
          </div>
          {error && <p className="text-error alert-danger">{error} </p>}
          <button
            type="submit"
            onClick={PostData}
            className="btn btn-primary btn-block"
          >
            {loading ? <>Loading...</> : <>Submit</>}
          </button>
          <p className="forgot-password text-right">
            <Link to="/loginAndRegisterPage">Create new Account</Link>
          </p>
        </form>
      </div>
    </>
  );
};

export default Signin;
