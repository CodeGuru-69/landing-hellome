import React from "react";

interface ICategoryButton {
  title: string;
  isSelected: boolean;
  onClick?: () => void;
}

const CategoryButton: React.FC<ICategoryButton> = ({
  title,
  isSelected = false,
  onClick,
}) => {
  return (
    <button
      className={`${
        isSelected
          ? "font-clash-semibold bg-custom-gray-300"
          : "font-clash-medium bg-transparent"
      } text-button p-2 text-center rounded-8`}
      onClick={onClick}
    >
      {title}
    </button>
  );
};

export default CategoryButton;
