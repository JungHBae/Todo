import { createSlice } from "@reduxjs/toolkit";

//some initial values
const initialState = [
  {
    id: 1,
    title: "뭔가 하기 1",
    goal: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
    completed: true,
  },
  {
    id: 2,
    title: "뭔가 하기 2",
    goal: "quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure",
    completed: false,
  },
];

const todosSlice = createSlice({
  name: "taskReducer",
  initialState,
  reducers: {
    addTask: (state, action) => {
      return [...state, action.payload];
    },
    deleteTask: (state, action) => {
      return state.filter((task) => task.id !== action.payload);
    },
    editTask: (state, action) => {
      return state.map((task) => {
        if (task.id === action.payload.id) {
          return { ...task, title: action.payload.title, goal: action.payload.goal };
        }
        return task;
      });
    },
    toggleCompleted: (state, action) => {
      return state.map((task) => {
        if (task.id === action.payload) {
          return { ...task, completed: !task.completed };
        }
        return task;
      });
    },
  },
});

export const { editTask, deleteTask, addTask, toggleCompleted } = todosSlice.actions;
export default todosSlice.reducer;
