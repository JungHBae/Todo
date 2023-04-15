export const ADD_TASK = "ADD_TASK";
export const DELETE_TASK = "DELETE_TASK";
export const TOGGLE_COMPLETED = "TOGGLE_COMPLETED";

const initialState = {
  tasks: [
    {
      id: 1,
      title: "뭔가 하기 1",
      goal: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
      completed: true,
    },
    {
      id: 2,
      title: "뭔가 하기 2",
      goal: "quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor",
      completed: false,
    },
    {
      id: 3,
      title: "뭔가 하기 3",
      goal: "enderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat",
      completed: false,
    },
  ],
};

export const addTask = (payload) => {
  return {
    type: ADD_TASK,
    payload: payload,
  };
};
export const deleteTask = (payload) => {
  return {
    type: DELETE_TASK,
    payload: payload,
  };
};
export const toggleCompleted = (payload) => {
  return {
    type: TOGGLE_COMPLETED,
    payload: payload,
  };
};
function taskReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TASK:
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };

    case TOGGLE_COMPLETED:
      const updatedTasks = state.tasks.map((task) => {
        if (task.id === action.payload) {
          return { ...task, completed: !task.completed };
        }
        return task;
      });
      return {
        ...state,
        tasks: updatedTasks,
      };

    case DELETE_TASK:
      const filteredTasks = state.tasks.filter((task) => task.id !== action.payload);
      return {
        ...state,
        tasks: filteredTasks,
      };
    default:
      return state;
  }
}

export default taskReducer;
