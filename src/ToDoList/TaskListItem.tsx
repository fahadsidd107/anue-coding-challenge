import React, { useState, useRef } from "react";
import CheckBox from "../components/Buttons/Checkbox";
import { Trash2, ChevronDown, ChevronUp, FilePenLine } from "lucide-react";
import { Task } from "../types/task";
import useDarkModeStore from "../hooks/useDarkModeStore";
import { useTaskStore } from "../hooks/useTaskStore";
import Button from "../components/Buttons/Button";

interface Props {
  task: Task;
  setIsEditModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setIsDeleteModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setTask: React.Dispatch<React.SetStateAction<Task | null>>;
}

const TaskListItem: React.FC<Props> = ({
  task,
  setTask,
  setIsEditModalOpen,
  setIsDeleteModalOpen,
}) => {
  const { title, description, id, isCompleted } = task;
  const completeTask = useTaskStore((state) => state.completeTask);
  const { isDarkMode } = useDarkModeStore();

  // State to manage the accordion toggle
  const [isDescriptionVisible, setIsDescriptionVisible] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null); // Ref for the content

  return (
    <div
      className={`flex flex-col w-full ${isDarkMode ? "bg-gray-600" : "bg-green-200"
        } rounded-3xl p-4`}
    >
      {/* Task Header with Title, Checkbox, and Buttons */}
      <div className="flex justify-between items-center">
        <div className="flex gap-4 items-center">
          <CheckBox handleCheck={completeTask} id={id} checked={isCompleted} />
          <p className="text-[16px]">{title}</p>
        </div>
        <div className="flex gap-2">
          {/* Accordion Button */}
          {description && (
            <Button
              onClickHandler={() => setIsDescriptionVisible(!isDescriptionVisible)}
              icon={isDescriptionVisible ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
            />
          )}
          {/* Edit Button */}
          {!isCompleted && <Button icon={<FilePenLine size={18} onClick={() => {
            setIsEditModalOpen(true);
            setTask(task);
          }} />} />}
          {/* Delete Button */}
          <Button
            onClickHandler={() => {
              setIsDeleteModalOpen(true);
              setTask(task);
            }}
            icon={
              <Trash2
                size={18}

              />
            }
          />
        </div>
      </div>

      <div
        ref={contentRef}
        className={`overflow-hidden transition-all duration-300 ${isDescriptionVisible ? "mt-2" : ""
          }`}
        style={{
          maxHeight: isDescriptionVisible
            ? `${contentRef.current?.scrollHeight}px`
            : "0",
        }}
      >
        <div className="text-[12px]">{description}</div>
      </div>
    </div>
  );
};

export default TaskListItem;
