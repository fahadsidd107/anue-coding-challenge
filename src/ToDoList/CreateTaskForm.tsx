import React, { useState } from "react";
import Input from "../Inputs/Input";
import Button from "../components/Buttons/Button";
import { useTaskStore } from "@/hooks/useTaskStore";
import useDarkModeStore from "../hooks/useDarkModeStore";
import { Plus } from 'lucide-react';

const CreateTaskForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const addTask = useTaskStore((state) => state.addTask);
  const { isDarkMode, toggleDarkMode } = useDarkModeStore(); 

  const onClickHandler = () => {
    addTask({
      title,
      description,
      isCompleted: false,
    });
    setTitle("");
    setDescription("");
  };
  return (
    <div className={`mt-4 flex w-[40vw] gap-4 bg-slate-200 justify-start rounded-3xl p-4 border-solid border-2 ${
      isDarkMode ? "shadow-customDark bg-gray-700  " : "shadow-customLight bg-green-300"
    }`}>
      <Input
        value={title}
        placeholder="Title"
        isRequired
        onChangeHandler={(e) => setTitle(e.target.value)}
      />
      <Input
        value={description}
        placeholder="Description"
        isRequired
        onChangeHandler={(e) => setDescription(e.target.value)}
      />
      <Button  onClickHandler={onClickHandler} icon={<Plus size={16} />} />
    </div>
  );
};

export default CreateTaskForm;
