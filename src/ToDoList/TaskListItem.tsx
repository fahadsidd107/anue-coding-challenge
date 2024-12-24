import { Task } from "@/types/task";
import React from "react";
import CheckBox from "../components/Buttons/Checkbox";
import { useTaskStore } from "@/hooks/useTaskStore";
import useDarkModeStore from "@/hooks/useDarkModeStore";
import { Trash2 } from 'lucide-react';
import { FilePenLine } from 'lucide-react';
import Button from "@/components/Buttons/Button";

const TaskListItem: React.FC<{ task: Task }> = ({ task }) => {
  const { title, description, id, isCompleted } = task;
  const completeTask = useTaskStore((state) => state.completeTask);
   const { isDarkMode, toggleDarkMode } = useDarkModeStore(); 
  return (
    <div className={`flex w-[40vw] gap-4  ${
      isDarkMode ? " bg-gray-600  " : " bg-green-200"
    } justify-start rounded-3xl p-4 items-center`}>
      <CheckBox handleCheck={completeTask} id={id} checked={isCompleted} />
      <div className="flex flex-col">
        <p className="text-[16px]">{title}</p>
        <p className="text-[12px]">{description}</p>
      </div>
      <div className="flex gap-2">
      <Button    icon={<FilePenLine size={18} />} />
      <Button   icon={<Trash2 size={18} />} />
      </div>
    </div>
  );
};

export default TaskListItem;
