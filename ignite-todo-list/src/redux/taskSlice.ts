import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";


export interface Task {
  id: string;
  name: string;
  isChecked: boolean;
  priority: number;
}

interface TaskState {
  items: Task[];
}

const initialState: TaskState = {
  items: [],
};

const taskSlice = createSlice({
  name: "task",
  initialState: initialState,
  reducers: {
    addTask: (state, action: PayloadAction<Task>) => {
      const task = action.payload;
      const newTask: Task = {
        ...task,
        id: uuid(),
      };
      state.items.push(newTask);
    },
    deleteTask: (state, action: PayloadAction<{ id: string }>) => {
      const { id } = action.payload;
      state.items = state.items.filter((task) => task.id !== id);
    },
    toggleCheck: (state, action: PayloadAction<{ id: string }>) => {
      const { id } = action.payload;
      const task = state.items.find((task) => task.id === id);
      if (task) {
        task.isChecked = !task.isChecked;
      }
    },
    updateTask: (state, action: PayloadAction<{ id: string; name: string }>) => {
      const { id, name } = action.payload;
      const task = state.items.find((task) => task.id === id);
      if (task) {
        task.name = name;
      }
    },
    setPriority: (state, action: PayloadAction<{ id: string; priority: number }>) => {
      const { id, priority } = action.payload;
      const task = state.items.find((task) => task.id === id);
      if (task) {
        task.priority = priority;
      }
    },
  },
});

export const { addTask, deleteTask, toggleCheck, updateTask, setPriority } = taskSlice.actions;
export default taskSlice.reducer;
