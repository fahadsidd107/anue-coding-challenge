import React from "react";
import CheckBox from "../components/Buttons/Checkbox";
import { Trash2 } from 'lucide-react';
import { FilePenLine } from 'lucide-react';
import { Task } from "../types/task";
import useDarkModeStore from "../hooks/useDarkModeStore";
import { useTaskStore } from "../hooks/useTaskStore";
import Button from "../components/Buttons/Button";

interface Props {
  task: Task;
  setIsEditModalOpen: React.Dispatch<React.SetStateAction<boolean>>
  setIsDeleteModalOpen: React.Dispatch<React.SetStateAction<boolean>>
  setTask: React.Dispatch<React.SetStateAction<Task | null>>
}

const TaskListItem: React.FC<Props> = ({ task, setTask, setIsEditModalOpen,setIsDeleteModalOpen }) => {
  const { title, description, id, isCompleted } = task;
  const completeTask = useTaskStore((state) => state.completeTask);
   const { isDarkMode } = useDarkModeStore(); 
  return (
    <div className={`flex w-full gap-4  ${
      isDarkMode ? " bg-gray-600  " : " bg-green-200"
    } justify-between rounded-3xl p-4 items-center`}>
      <div className="flex justify-start gap-4">
      <CheckBox handleCheck={completeTask} id={id} checked={isCompleted} />
      <div className="flex flex-col">
        <p className="text-[16px]">{title}</p>
        <p className="text-[12px]">{description}</p>
      </div>
      </div>
      <div className="flex gap-2">
       {!isCompleted && <Button icon={<FilePenLine size={18} onClick={()=>{
        setIsEditModalOpen(true);
        setTask(task);
       }} />} />}
      <Button   icon={<Trash2 size={18} onClick={()=>{
        setIsDeleteModalOpen(true);
        setTask(task);
       }} />} />
      </div>
    </div>
  );
};

export default TaskListItem;
