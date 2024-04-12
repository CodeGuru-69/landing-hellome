import React, { ReactNode } from "react";
interface IDescription {
  title: string;
  children: ReactNode;
  icon?: string;
}
const Description: React.FC<IDescription> = ({ title, children, icon }) => {
  return (
    <div>
      <div className="flex items-center gap-1">
        <h3 className="font-clash-bold text-[2.5rem] leading-title">
          {title}
          {`${icon && ":"}`}
        </h3>
        <img src={icon} alt="icon" />
      </div>
      <h6 className="text-body font-clash-variable tracking-4 leading-body pl-[25px] font-regular">
        {children}
      </h6>
    </div>
  );
};

export default Description;
