import useDarkModeStore from "@/hooks/useDarkModeStore";
import React from "react";

interface Props {
  label?: string;
  onClickHandler?: () => void;
  icon?: React.ReactNode;
}

const Button: React.FC<Props> = ({ label, onClickHandler,icon }) => {
    const { isDarkMode, toggleDarkMode } = useDarkModeStore(); 

  return (
    <button
      type="button"
      onClick={onClickHandler}
      className={`ext-white ${isDarkMode ? "bg-blue-700 hover:bg-blue-800" : "bg-green-700 hover:bg-green-800 text-white"}  focus:ring-4
       focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none dark:focus:ring-blue-800`}
    >
      {icon}
      {label}
    </button>
  );
};

export default Button;
