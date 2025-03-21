import axios from "axios";

const API_URL = "http://localhost:3000";

export const registerUser = async (userData) => {
  return axios.post(`${API_URL}/users`, userData);
};

export const loginUser = async (username) => {
  return axios.get(`${API_URL}/users?username=${username}`);
};
