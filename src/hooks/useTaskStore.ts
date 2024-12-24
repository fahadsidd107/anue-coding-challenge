import { create } from "zustand";
import { getTasks, addTask, editTask, deleteTask,deleteAllTasks,getOneTask } from "../utils/api";
import { Task } from "../types/task";

interface TaskState {
  tasks: Task[];
  fetchTasks: () => Promise<void>;
  addTask: (task: Omit<Task, "id">) => Promise<void>;
  editTask: (id: number, updatedTask: Partial<Task>) => Promise<void>;
  deleteTask: (id: number) => Promise<void>;
  deleteAllTasks: () => Promise<void>;
  getOneTask: (id: number) => Promise<void>; 
}

export const useTaskStore = create<TaskState>((set) => ({
  tasks: [],

  fetchTasks: async () => {
    const data = await getTasks();
    set({ tasks: data });
  },

  addTask: async (task) => {
    const newTask = await addTask(task);
    set((state) => ({ tasks: [...state.tasks, newTask] }));
  },

  editTask: async (id, updatedTask) => {
    await editTask(id, updatedTask);
    set((state) => ({
      tasks: state.tasks.map((task) =>
        task.id === id ? { ...task, ...updatedTask } : task
      ),
    }));
  },

  deleteTask: async (id) => {
    await deleteTask(id);
    set((state) => ({
      tasks: state.tasks.filter((task) => task.id !== id),
    }));
  },

  deleteAllTasks: async () => {
    await deleteAllTasks(); // Call the API to delete all tasks
    set((state) => ({
      tasks: [], // Clear all tasks from local state (empty array)
    }));
  },

  getOneTask: async (id) => {
    const task = await getOneTask(id); // Fetch the task from the backend
    set((state) => ({
      tasks: state.tasks.map((t) => (t.id === id ? task : t)), // Update the task in the local state
    }));
  }
}));

interface DarkModeState {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

const useDarkModeStore = create<DarkModeState>((set) => ({
  isDarkMode: false, // Initial state
  toggleDarkMode: () => set((state) => ({ isDarkMode: !state.isDarkMode })),
}));

export default useDarkModeStore;

