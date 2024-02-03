import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { BiLogoGoogle } from "react-icons/bi";

const Register = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
  const [showPass, setShowPass] = useState(false);

  //==================== Register Using Email and Password ====================
  const onSubmit = async (data) => {};

  return (
    <div className="">
      <div className="">
        <div className="">
          <form className="" onSubmit={handleSubmit(onSubmit)}>
            <h1 className="">Sign UP</h1>

            <div className="">
              <div className="">
                <i className=""></i>
              </div>
              <input
                id="in1"
                type="text"
                {...register("name", { required: true })}
                placeholder="Name"
                className=""
              />
              {errors.name?.type === "required" && (
                <p className="text-red-500">Name is required</p>
              )}
            </div>

            <div className="">
              <div className="">
                <i className=""></i>
              </div>
              <input
                id="in2"
                type="email"
                {...register("email", { required: true })}
                placeholder="Email"
                className=""
              />
              {errors.email?.type === "required" && (
                <p className="">Email is required</p>
              )}
            </div>

            <div className="">
              <div className="">
                <i className=""></i>
              </div>
              <input
                id="in3"
                type={showPass ? "text" : "password"}
                {...register("pass", {
                  required: true,
                  minLength: 6,
                  maxLength: 20,
                  pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                })}
                placeholder="Password"
                className=""
              />
              <span className="" onClick={() => setShowPass(!showPass)}>
                {showPass ? (
                  <i className="fa-solid fa-eye-slash"></i>
                ) : (
                  <i className="fa-solid fa-eye"></i>
                )}
              </span>
              {errors.pass?.type === "required" && (
                <p className="">Password is required</p>
              )}
              {errors.pass?.type === "minLength" && (
                <p className="">
                  Password has to be at least 6 characters long
                </p>
              )}
              {errors.pass?.type === "pattern" && (
                <p className="">
                  <ul className="list-disc">
                    Password must have at least
                    <li>1 uppercase letter</li>
                    <li>1 lowercase letter</li>
                    <li>1 digit</li>
                    <li>1 special character</li>
                  </ul>
                </p>
              )}
            </div>

            <div className="">
              <label className="">
                <span className="">Pick your profile picture</span>
              </label>
              <input type="file" {...register("photo")} className="" />
            </div>

            <input type="submit" value="Sign Up" className="" />
          </form>

          <div className="">
            <p className="">
              Already registered?
              <Link className="" to="/login">
                Go to log in
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

export default Register;
