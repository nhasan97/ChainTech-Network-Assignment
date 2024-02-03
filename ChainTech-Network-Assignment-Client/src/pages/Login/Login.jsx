import { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { BiLogoGoogle } from "react-icons/bi";

const Login = () => {
  const { register, handleSubmit } = useForm();
  const [showPass, setShowPass] = useState(false);

  //==================== Login Using Email and Password ====================
  const onSubmit = (data) => {};

  return (
    <div className="">
      <div className="">
        <div className="">
          <form onSubmit={handleSubmit(onSubmit)} className="">
            <h1 className="">Login</h1>

            <div className="">
              <div
                className="
              "
              >
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

            <div className="">
              <div
                className="
              "
              >
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
              <span className="" onClick={() => setShowPass(!showPass)}>
                {showPass ? (
                  <i className="fa-solid fa-eye-slash"></i>
                ) : (
                  <i className="fa-solid fa-eye"></i>
                )}
              </span>
            </div>

            <input type="submit" value="Sign In" className="" />
          </form>

          <div className="">
            <p className="">
              New here?
              <Link className="" to="/register">
                Create a New Account
              </Link>
            </p>
            <p className="">Or sign in with</p>
            <BiLogoGoogle className=""></BiLogoGoogle>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
