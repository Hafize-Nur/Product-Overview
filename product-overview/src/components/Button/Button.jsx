import React from "react";
import styles from "./Button.module.scss";

const Button = ({
  children,
  variant = "primary",
  onClick,
  type = "button",
  className = "",
  ariaLabel,
  ...props
}) => {
  return (
    <button
      className={`${styles.button} ${styles[variant]} ${className}`}
      type={type}
      onClick={onClick}
      aria-label={
        ariaLabel || (typeof children === "string" ? children : undefined)
      }
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
