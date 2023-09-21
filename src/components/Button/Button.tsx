import React from "react";
import styles from "./Button.module.css";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  buttonType: "primary" | "secondary";
  isLarge?: boolean;
  isXlarge?: boolean;
  isSmall?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  isLarge,
  isXlarge,
  isSmall,
  buttonType,
}) => {
  return (
    <button
      onClick={onClick}
      className={`
        ${styles.button} 
        ${buttonType === "primary" && styles.primary}
        ${buttonType === "secondary" && styles.secondary}
        ${isLarge && styles.large}
        ${isXlarge && styles.xLarge}
        ${isSmall && styles.small}
    `}
    >
      {children}
    </button>
  );
};

export default Button;
