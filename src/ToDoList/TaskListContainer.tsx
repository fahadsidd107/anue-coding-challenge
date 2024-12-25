import React, { useState, useEffect } from "react";
import TaskListItem from "./TaskListItem";
import { useTaskStore } from "@/hooks/useTaskStore";
import CreateTaskForm from "./CreateTaskForm";
import EditingModal from "./EditingModal";
import { Task } from "@/types/task";
import SkeletonComponent from "@/components/Skeleton/Skeleton";
import DeletingModal from "./DeleteModal";

const TaskListContainer = () => {
  const tasks = useTaskStore((state) => state.tasks);
  const loading = useTaskStore((state) => state.loading);
  const fetchTasks = useTaskStore((state) => state.fetchTasks);

  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [task, setTask] = useState<Task|null>(null)

  useEffect(() => {
    fetchTasks();
  }, [fetchTasks]);

  return (
    <div className="flex flex-col lg:w-[40vw] md:w-[60vw] w-[90vw] gap-6">
    
      <CreateTaskForm />
      {loading ? (
        <>
          <SkeletonComponent/>
        </>
      ) : (
        <>
          {tasks.map((task) => (
            <TaskListItem task={task} key={`TaskListItem-${task.id.toString()}`} setIsDeleteModalOpen={setIsDeleteModalOpen} setIsEditModalOpen={setIsEditModalOpen} setTask={setTask} />
          ))}
          {isEditModalOpen && task && (
            <EditingModal setIsEditModalOpen={setIsEditModalOpen} task={task} />
          )}
           {isDeleteModalOpen && task && (
            <DeletingModal setIsDeleteModalOpen={setIsDeleteModalOpen} task={task} />
          )}
        </>
      )}
     
    </div>
  );
};

export default TaskListContainer;
