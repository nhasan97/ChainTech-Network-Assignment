import { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { BiLogoGoogle } from "react-icons/bi";
import "./Login.css";

const Login = () => {
  const { register, handleSubmit } = useForm();
  const [showPass, setShowPass] = useState(false);

  //==================== Login Using Email and Password ====================
  const onSubmit = (data) => {};

  return (
    <div className="login-container">
      <div className="login-form-container">
        <form onSubmit={handleSubmit(onSubmit)} className="login-form">
          <h1 className="">Login</h1>

          <div className="input-holder">
            <div className="input-icon-holder">
              <i className="fa-solid fa-envelope"></i>
            </div>
            <input
              type="email"
              id="in2"
              {...register("email")}
              placeholder="Email"
              required
              className=""
            />
          </div>

          <div className="input-holder">
            <div className="input-icon-holder">
              <i className="fa-solid fa-key"></i>
            </div>

            <input
              type={showPass ? "text" : "password"}
              id="in3"
              {...register("pass")}
              placeholder="Password"
              required
              className=""
            />
            <span className="eye-icon" onClick={() => setShowPass(!showPass)}>
              {showPass ? (
                <i className="fa-solid fa-eye-slash"></i>
              ) : (
                <i className="fa-solid fa-eye"></i>
              )}
            </span>
          </div>

          <input type="submit" value="Sign In" className="btn" />
        </form>
        <div className="other-option-container">
          <p className="">
            New here?
            <Link className="" to="/register">
              Create a New Account
            </Link>
          </p>
          <p className="">Or sign in with</p>
          <button className="btn google-btn">
            <BiLogoGoogle className="google-icon"></BiLogoGoogle>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
