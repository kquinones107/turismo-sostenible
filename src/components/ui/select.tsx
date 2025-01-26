import React, { useState } from "react";

interface SelectProps {
  options: string[];
  placeholder: string;
}

export const Select: React.FC<SelectProps> = ({ options, placeholder }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const selectOption = (option: string) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div className="relative w-full">
      {/* Trigger */}
      <button
        onClick={toggleDropdown}
        className="w-full px-4 py-2 border border-gray-300 rounded-md text-left bg-white"
      >
        {selectedOption || placeholder}
      </button>

      {/* Dropdown Content */}
      {isOpen && (
        <div className="absolute mt-1 w-full bg-white border border-gray-300 rounded-md shadow-lg z-10">
          {options.map((option, index) => (
            <div
              key={index}
              onClick={() => selectOption(option)}
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