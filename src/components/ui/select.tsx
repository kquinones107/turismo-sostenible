import React, { useState } from "react";

interface SelectProps {
  options: string[];
  placeholder: string;
  onChange?: (value: string) => void;
}

export const Select: React.FC<SelectProps> = ({ options, placeholder, onChange }) => {
  const [selected, setSelected] = useState(placeholder);
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (option: string) => {
    setSelected(option);
    setIsOpen(false);
    if (onChange) onChange(option);
  };

  return (
    <div className="relative w-full">
      <button
        className="w-full px-4 py-2 border border-gray-300 rounded-md text-left bg-white"
        onClick={() => setIsOpen(!isOpen)}
      >
        {selected}
      </button>

      {isOpen && (
        <div className="absolute mt-1 w-full bg-white border border-gray-300 rounded-md shadow-lg z-10">
          {options.map((option, index) => (
            <div
              key={index}
              onClick={() => handleSelect(option)}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

