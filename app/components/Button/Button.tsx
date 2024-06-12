import React from "react";
import "./style.scss";

type ButtonProps = {
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({ onClick, children, className, ...rest }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`btn ${className}
    `}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
