"use client";

import React, { useEffect, useState } from "react";
import { useTaskStore } from "../../hooks/useTaskStore";

const DebugPage = () => {
  const { tasks, fetchTasks, addTask, editTask, deleteTask, deleteAllTasks } = useTaskStore();
  const [newTaskTitle, setNewTaskTitle] = useState("");
  const [newTaskDescription, setNewTaskDescription] = useState("");

  useEffect(() => {
    // Fetch tasks when the page loads
    fetchTasks().catch((err) => console.error("Error fetching tasks:", err));
  }, [fetchTasks]);

  const handleAddTask = async () => {
    if (newTaskTitle.trim() === "" || newTaskDescription.trim() === "") {
      console.error("Task title or description cannot be empty");
      return;
    }
    try {
      const task = { title: newTaskTitle, description: newTaskDescription, isCompleted: false };
      await addTask(task);
      console.log("Task added successfully!");
      setNewTaskTitle(""); // Reset input fields
      setNewTaskDescription("");
    } catch (error) {
      console.error("Error adding task:", error);
    }
  };

  const handleEditTask = async (id: number) => {
    // Prompt for title, description, and completion status
    const updatedTitle = prompt("Edit Task Title", "");
    const updatedDescription = prompt("Edit Task Description", "");
    const updatedCompleted = window.confirm("Is this task completed?");

    if (updatedTitle && updatedTitle !== "") {
      const updatedTask = {
        title: updatedTitle,
        description: updatedDescription || "", // Default to an empty string if no description is entered
        isCompleted: updatedCompleted, // Boolean based on confirmation
      };

      try {
        await editTask(id, updatedTask);  // Pass updated task to editTask function
        console.log("Task updated successfully!");
      } catch (error) {
        console.error("Error updating task:", error);
      }
    } else {
      alert("Title cannot be empty.");
    }
  };

  const handleDeleteTask = async (id: number) => {
    try {
      await deleteTask(id);
      console.log("Task deleted successfully!");
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };

  const handleDeleteAllTasks = async () => {
    try {
      await deleteAllTasks();
      console.log("All tasks deleted successfully!");
    } catch (error) {
      console.error("Error deleting all tasks:", error);
    }
  };

  return (
    <div>
      <h1>Debugging Zustand and API Integration</h1>

      {/* Input fields for adding a new task */}
      <div>
        <input
          type="text"
          value={newTaskTitle}
          onChange={(e) => setNewTaskTitle(e.target.value)}
          placeholder="Enter task title"
        />
        <input
          type="text"
          value={newTaskDescription}
          onChange={(e) => setNewTaskDescription(e.target.value)}
          placeholder="Enter task description"
        />
        <button onClick={handleAddTask}>Add Task</button>
      </div>

      {/* Button to delete all tasks */}
      <button onClick={handleDeleteAllTasks}>Delete All Tasks</button>

      <h2>Tasks</h2>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <strong>{task.title}</strong> - {task.description || "No description"} -{" "}
            {task.isCompleted ? "Completed" : "Incomplete"}

            {/* Buttons for updating and deleting each task */}
            <button onClick={() => handleEditTask(task.id)}>Update</button>
            <button onClick={() => handleDeleteTask(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DebugPage;
