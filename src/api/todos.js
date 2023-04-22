import axios from "axios";

// 모든 todos를 가져오는 api
const getTasks = async () => {
  const response = await axios.get("https://json-server-react.onrender.com/tasks");
  return response.data;
};
const getTaskById = async (id) => {
  const response = await axios.get(`https://json-server-react.onrender.com/tasks/${id}`);
  return response.data;
};
const addTask = async (task) => {
  await axios.post("https://json-server-react.onrender.com/tasks", task);
};
const deleteTask = async (id) => {
  await axios.delete(`https://json-server-react.onrender.com/tasks/${id}`);
};
const updateDone = async (task) => {
  await axios.patch(`https://json-server-react.onrender.com/tasks/${task.id}`, { completed: !task.completed });
};
const updateTask = async (task) => {
  await axios.patch(`https://json-server-react.onrender.com/tasks/${task.id}`, task);
};
export { getTasks, addTask, deleteTask, updateDone, getTaskById, updateTask };
