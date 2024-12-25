import React from "react";
import useDarkModeStore from "../hooks/useDarkModeStore";

interface Props {
  label?: string;
  placeholder: string;
  onChangeHandler: React.ChangeEventHandler<HTMLInputElement>;
  value: string;
  isRequired: boolean;
}
const Input: React.FC<Props> = ({
  label,
  placeholder,
  onChangeHandler,
  value,
  isRequired,
}) => {

    const { isDarkMode } = useDarkModeStore(); 
  return (
    <div className="w-full">
      {label ?? (
        <label
          htmlFor="input"
          className="block text-sm font-medium text-gray-900 dark:text-white"
        >
          {label}
        </label>
      )}
      <input
        type="text"
        id="input"
        className={`border border-gray-700 text-gray-900 text-sm rounded-lg focus:ring-blue-500
         focus:border-blue-500 block w-full p-2.5
          text-black ${isDarkMode ? "bg-indigo-100 placeholder:text-slate-700" : "bg-blue-100 placeholder:text-slate-700" } `}
        placeholder={placeholder}
        onChange={onChangeHandler}
        value={value}
        required={isRequired}
      />
    </div>
  );
};

export default Input;
