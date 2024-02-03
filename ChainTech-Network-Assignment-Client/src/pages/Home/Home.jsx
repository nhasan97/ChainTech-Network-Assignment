import { useEffect, useState } from "react";
import { getUsersData } from "../../api/api";
import useAuth from "../../hooks/useAuth";
import Loading from "../Loading";
import axiosSecure from "../../api/axiosSecure";

const Home = async () => {
  const { user, loading } = useAuth();
  const [fetcheduser, setUser] = useState([]);

  // const dbResponse = await getUsersData(user?.email);
  console.log(user?.email);
  useEffect(() => {
    axiosSecure.get(`/users?email=${user?.email}`).then((response) => {
      // setMyPostedJobs(data);
      console.log(response);
    });
  }, []);
  if (loading) {
    return <Loading></Loading>;
  } else {
    return <div>home</div>;
  }
};

export default Home;
