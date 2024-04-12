import React from "react";
interface IPrimaryButton {
  className?: string;
  children: React.ReactNode;
}
const PrimaryButton: React.FC<IPrimaryButton> = ({ className, children }) => {
  return (
    <button className={`rounded-16 py-2 px-4 text-button ${className}`}>
      {children}
    </button>
  );
};

export default PrimaryButton;
