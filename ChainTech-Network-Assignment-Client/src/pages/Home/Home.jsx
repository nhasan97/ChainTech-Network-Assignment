import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import Loading from "../Loading";
import axiosSecure from "../../api/axiosSecure";

const Home = async () => {
  const { user, loading } = useAuth();
  const [fetcheduser, setUser] = useState([]);

  console.log(user?.email);
  useEffect(() => {
    axiosSecure.get(`/users?email=${user?.email}`).then((data) => {
      setUser(data.data);
      console.log(data.data);
    });
  }, []);

  if (loading) {
    return <Loading></Loading>;
  } else {
    return <div>home</div>;
  }
};

export default Home;
