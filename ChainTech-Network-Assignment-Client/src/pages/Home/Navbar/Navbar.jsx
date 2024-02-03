import useAuth from "../../../hooks/useAuth";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { AiOutlineLogin, AiOutlineLogout } from "react-icons/ai";
import { ToastContainer, toast } from "react-toastify";

const Navbar = () => {
  const { user, logoutUser } = useAuth();

  const handleLogout = () => {
    logoutUser()
      .then()
      .catch((err) => {
        toast.error(err.message, {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      });
  };
  return (
    <div className="navbar">
      <div></div>

      <div>
        {user?.email ? (
          <div className="flex justify-center items-center gap-2">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src={user.photoURL} />
              </div>
            </label>
            <p className="border-l-2 p-2">{user.displayName}</p>
            <button
              className="btn btn-circle border-none bg-[#ff5c11dc] text-white hover:text-[#323484]"
              onClick={handleLogout}
            >
              <AiOutlineLogout className="text-2xl"></AiOutlineLogout>
            </button>
          </div>
        ) : (
          <div className="flex justify-center items-center gap-2">
            <Link
              className="btn border-none bg-[#ff5c11dc] text-white hover:text-[#323484]"
              to="/login"
            >
              <AiOutlineLogin className="text-2xl"></AiOutlineLogin>
            </Link>
            <Link
              className="btn border-none bg-[#ff5c11dc] text-white hover:text-[#323484]"
              to="/"
            >
              Register
            </Link>
          </div>
        )}
      </div>
      <ToastContainer />
    </div>
  );
};

export default Navbar;
