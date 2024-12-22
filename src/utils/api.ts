import { Task } from "../types/task";
import { BASE_URL } from "./constants";


export const getTasks = async (): Promise<Task[]> => {
  const response = await fetch(`${BASE_URL}/tasks`);
  if (!response.ok) throw new Error("Failed to fetch tasks");
  return response.json();
};

export const getOneTask = async (id: number): Promise<Task> => {
  const response = await fetch(`${BASE_URL}/tasks/${id}`);
  if (!response.ok) throw new Error(`Failed to fetch task with id ${id}`);
  return response.json();
};

export const addTask = async (task: Omit<Task, "id">): Promise<Task> => {
  const response = await fetch(`${BASE_URL}/tasks`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(task),
  });
  if (!response.ok) throw new Error("Failed to add task");
  return response.json();
};

export const editTask = async (
  id: number,
  updatedTask: Partial<Task>
): Promise<Task> => {
  const response = await fetch(`${BASE_URL}/tasks/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(updatedTask),
  });
  if (!response.ok) throw new Error("Failed to update task");
  return response.json();
};

export const deleteTask = async (id: number): Promise<void> => {
  const response = await fetch(`${BASE_URL}/tasks/${id}`, {
    method: "DELETE",
  });
  if (!response.ok) throw new Error("Failed to delete task");
};

export const deleteAllTasks = async (): Promise<void> => {
  const response = await fetch(`${BASE_URL}/tasks`, {
    method: "DELETE",
  });
  if (!response.ok) throw new Error("Failed to delete all tasks");
};
