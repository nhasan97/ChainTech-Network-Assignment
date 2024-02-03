import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { BiLogoGoogle } from "react-icons/bi";
import "./Login.css";
import useAuth from "../../hooks/useAuth";
import { saveUserData } from "../../api/api";
import { GoogleAuthProvider } from "firebase/auth";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const { register, handleSubmit } = useForm();
  const [showPass, setShowPass] = useState(false);
  const { loginWithEmailAndPassword, signInWithGoogle } = useAuth();

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/home";

  const toastobj = {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    transition: Bounce,
  };

  const onSubmit = (data) => {
    loginWithEmailAndPassword(data.email, data.pass)
      .then((result) => {
        toast.success("Login successful", toastobj);
        console.log(result.user);
        navigate(from, { replace: true });
      })
      .catch((err) => {
        toast.error(err.message, toastobj);
      });
  };

  const handleLoginWithGoogle = () => {
    const provider = new GoogleAuthProvider();

    signInWithGoogle(provider)
      .then(async (result) => {
        if (result?.user?.email) {
          const dbResponse = await saveUserData(result?.user);
          console.log(dbResponse);
          navigate(from, { replace: true });
        }
      })
      .catch((err) => {
        toast.error(err.message, toastobj);
      });
  };
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
            <Link className="" to="/home">
              Create a New Account
            </Link>
          </p>
          <p className="">Or sign in with</p>
          <button className="btn google-btn" onClick={handleLoginWithGoogle}>
            <BiLogoGoogle className="google-icon"></BiLogoGoogle>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
