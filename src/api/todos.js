import axios from "axios";

const API_URL = "https://json-server-react.onrender.com/tasks";

// 모든 todos를 가져오는 api
const getTasks = async () => {
  const response = await axios.get(`${API_URL}`);
  return response.data;
};
const getTaskById = async (id) => {
  const response = await axios.get(`${API_URL}/${id}`);
  return response.data;
};
const addTask = async (task) => {
  await axios.post(`${API_URL}`, task);
};
const deleteTask = async (id) => {
  await axios.delete(`${API_URL}/${id}`);
};
const updateDone = async (task) => {
  await axios.patch(`${API_URL}/${task.id}`, { completed: !task.completed });
};
const updateTask = async (task) => {
  await axios.patch(`${API_URL}/${task.id}`, task);
};
export { getTasks, addTask, deleteTask, updateDone, getTaskById, updateTask };
