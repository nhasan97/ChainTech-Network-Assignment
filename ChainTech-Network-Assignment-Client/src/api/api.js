import axiosSecure from "./axiosSecure";

export const saveUserData = async (user) => {
  const { data } = await axiosSecure.put(`/users/${user?.email}`, user);
  return data;
};

export const getUsersData = async (email) => {
  const response = await axiosSecure.get(`/users?email=${email}`);
  return response.data;
};
