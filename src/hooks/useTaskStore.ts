import { create } from "zustand";
import {
  getTasks,
  addTask,
  editTask,
  deleteTask,
  deleteAllTasks,
  getOneTask,
} from "../utils/api";
import { Task } from "../types/task";
import { showToast } from "../utils/toastutil";

interface TaskState {
  tasks: Task[];
  error: string | null; // Holds error messages
  loading: boolean; // Indicates if a request is in progress
  fetchTasks: () => Promise<void>;
  addTask: (task: Omit<Task, "id">) => Promise<void>;
  editTask: (id: number, updatedTask: Partial<Task>) => Promise<void>;
  deleteTask: (id: number) => Promise<void>;
  deleteAllTasks: () => Promise<void>;
  getOneTask: (id: number) => Promise<void>;
  completeTask: (id: number) => Promise<void>;
}

export const useTaskStore = create<TaskState>((set) => ({
  tasks: [],
  error: null,
  loading: false,

  fetchTasks: async () => {
    set({ loading: true, error: null });
    try {
      const data = await getTasks();
      set({ tasks: data });
    } catch (error) {
      console.error("Failed to fetch tasks:", error);
      set({ error: "Failed to fetch tasks" });
    } finally {
      set({ loading: false });
    }
  },

  addTask: async (task) => {
    set({ error: null });
    try {
      const newTask = await addTask(task);
      set((state) => ({ tasks: [...state.tasks, newTask] }));
      showToast("success", "Task added successfully!");
    } catch (error) {
      console.error("Failed to add task:", error);
      set({ error: "Failed to add task" });
     showToast("error", "Failed to add task");
    }
  },

  editTask: async (id, updatedTask) => {
    set({ error: null });
    try {
      const updated = await editTask(id, updatedTask);
      set((state) => ({
        tasks: state.tasks.map((task) =>
          task.id === id ? { ...task, ...updated } : task
        ),
      }));
      showToast("success", "Task updated successfully!");
    } catch (error) {
      console.error("Failed to edit task:", error);
      set({ error: "Failed to edit task" });
      showToast("error", "Failed to edit task");
    }
  },

  completeTask: async (id) => {
    set({ error: null });
    try {
      const taskToUpdate = useTaskStore.getState().tasks.find(
        (task) => task.id === id
      );
      if (taskToUpdate) {
        const updatedTask = { ...taskToUpdate, isCompleted: !taskToUpdate.isCompleted };
        await editTask(id, updatedTask);
        set((state) => ({
          tasks: state.tasks.map((task) =>
            task.id === id ? { ...task, isCompleted: !task.isCompleted } : task
          ),
        }));
      }
      showToast("success", "Task status changed successfully!");
    } catch (error) {
      console.error("Failed to complete task:", error);
      set({ error: "Failed to complete task" });
      showToast("error", "Failed to change task status");
    }
  },

  deleteTask: async (id) => {
    set({ error: null });
    try {
      await deleteTask(id);
      set((state) => ({
        tasks: state.tasks.filter((task) => task.id !== id),
      }));
      showToast("success", "Task deleted successfully!");
    } catch (error) {
      console.error("Failed to delete task:", error);
      set({ error: "Failed to delete task" });
      showToast("error", "Failed to delete task");
    }
  },

  deleteAllTasks: async () => {
    set({ error: null });
    try {
      await deleteAllTasks();
      set({ tasks: [] });
      showToast("success", "All tasks deleted successfully!");
    } catch (error) {
      console.error("Failed to delete all tasks:", error);
      set({ error: "Failed to delete all tasks" });
      showToast("error", "Failed to delete all tasks");
    }
  },

  getOneTask: async (id) => {
    set({ error: null });
    try {
      const task = await getOneTask(id);
      set((state) => ({
        tasks: state.tasks.map((t) => (t.id === id ? task : t)),
      }));
    } catch (error) {
      console.error(`Failed to fetch task with id ${id}:`, error);
      set({ error: `Failed to fetch task with id ${id}` });
    }
  },
}));

