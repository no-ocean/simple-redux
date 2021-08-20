export const taskReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_TASK":
      return [...state, action.tasks];
    default:
      return state;
  }
};
