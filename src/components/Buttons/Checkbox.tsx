import React from "react";
import { Check } from "lucide-react";

interface Props {
  checked: boolean;
  id: number;
  handleCheck: (id: number) => void;
}

const CheckBox: React.FC<Props> = ({ checked, handleCheck, id }) => {
  const getStyles = () => {
    return checked
      ? "bg-green-400 border-green-700"
      : "border-gray-300 bg-white";
  };

  return (
    <label className="flex items-center gap-2 cursor-pointer">
      <div
        className={`h-6 w-6 rounded-full border-2 flex items-center justify-center ${getStyles()}`}
        onClick={() => handleCheck(id)}
      >
        {checked && <Check size={14} className="text-white font-bold" />}
      </div>
      <span className="text-sm hidden">{String(checked)}</span>
    </label>
  );
};

export default CheckBox;
