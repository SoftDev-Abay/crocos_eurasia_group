import React from "react";
import "./style.scss";

type ButtonProps = {
  onClick: () => void;
  children: React.ReactNode;
  className?: string;
};

const Button = ({ onClick, children, className }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`btn ${className}
    `}
    >
      {children}
    </button>
  );
};

export default Button;
