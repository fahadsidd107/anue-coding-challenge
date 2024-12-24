import { Task } from "@/types/task";
import React from "react";
import TaskListItem from "./TaskListItem";
import { useTaskStore } from "@/hooks/useTaskStore";
import CreateTaskForm from "./CreateTaskForm";

const TaskListContainer = () => {
  const tasks = useTaskStore((state) => state.tasks);
  return (
    <div className="flex flex-col gap-6">
      <CreateTaskForm />
      {tasks.map((task) => (
        <TaskListItem task={task} key={`TaskListItem-${task.id.toString()}`} />
      ))}
    </div>
  );
};

export default TaskListContainer;
