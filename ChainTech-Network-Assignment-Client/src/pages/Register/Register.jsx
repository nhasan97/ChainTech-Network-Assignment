import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { BiLogoGoogle } from "react-icons/bi";
import "./Register.css";

const Register = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
  const [showPass, setShowPass] = useState(false);

  const genders = ["Male", "Female", "Other"];

  //==================== Register Using Email and Password ====================
  const onSubmit = async (data) => {};

  return (
    <div className="reg-container">
      <div className="reg-form-container">
        <form className="reg-form" onSubmit={handleSubmit(onSubmit)}>
          <h1 className="">Sign UP</h1>

          <div className="input-container">
            <div className="four-input-divider">
              <div className="input-holder">
                <div className="input-icon-holder">
                  <i className="fa-solid fa-signature"></i>
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

              <div className="input-holder">
                <div className="input-icon-holder">
                  <i className="fa-solid fa-envelope"></i>
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

              <div className="input-holder">
                <div className="input-icon-holder">
                  <i className="fa-solid fa-key"></i>
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
                <span
                  className="eye-icon"
                  onClick={() => setShowPass(!showPass)}
                >
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

              <div className="input-holder">
                <label className="input-icon-holder">
                  <i className="fa-solid fa-image"></i>
                </label>
                <input type="file" {...register("photo")} className="" />
              </div>
            </div>

            <div className="four-input-divider">
              <div className="input-holder">
                <div className="input-icon-holder">
                  <i className="fa-solid fa-signature"></i>
                </div>
                <input
                  id="in1"
                  type="text"
                  {...register("cell", { required: true })}
                  placeholder="Phone Number"
                  className=""
                />
                {errors.name?.type === "required" && (
                  <p className="text-red-500">Name is required</p>
                )}
              </div>

              <div className="input-holder">
                <div className="input-icon-holder">
                  <i className="fa-solid fa-d"></i>
                </div>
                <select
                  type="text"
                  {...register("gender")}
                  placeholder="Gender"
                  required
                  className=""
                >
                  {genders.map((gender) => (
                    <option key={gender}>{gender}</option>
                  ))}
                </select>
              </div>

              <div className="input-holder">
                <div className="input-icon-holder">
                  <i className="fa-regular fa-calendar-days"></i>
                </div>
                <input
                  type="date"
                  id="in4"
                  {...register("birthday")}
                  placeholder="Birthday"
                  required
                  className=""
                />
              </div>

              <div className="input-holder">
                <div className="input-icon-holder">
                  <i className="fa-solid fa-signature"></i>
                </div>
                <input
                  id="in1"
                  type="text"
                  {...register("address", { required: true })}
                  placeholder="Address"
                  className=""
                />
                {errors.name?.type === "required" && (
                  <p className="text-red-500">Name is required</p>
                )}
              </div>
            </div>
          </div>

          <input type="submit" value="Sign Up" className="btn reg-btn" />
        </form>

        <div className="other-option-container">
          <p className="">
            Already registered?
            <Link className="" to="/login">
              Go to log in
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

export default Register;
