import React from "react";
import styles from "./Input.module.scss";

const Input = ({
  label,
  type = "text",
  name,
  value,
  onChange,
  placeholder,
  error,
  textarea = false,
  rows = 5,
  required = false,
  ...props
}) => {
  const InputComponent = textarea ? "textarea" : "input";
  const inputProps = textarea ? { rows } : { type };
  const errorId = error ? `${name}-error` : undefined;
  const describedBy = error ? errorId : undefined;

  return (
    <div className={styles.inputGroup}>
      {label && (
        <label htmlFor={name}>
          {label}
          {required && <span aria-label="gerekli alan"> *</span>}
        </label>
      )}
      <InputComponent
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`${styles.input} ${textarea ? styles.textarea : ""} ${
          error ? styles.error : ""
        }`}
        aria-invalid={error ? "true" : "false"}
        aria-describedby={describedBy}
        aria-required={required}
        {...inputProps}
        {...props}
      />
      {error && (
        <p
          id={errorId}
          className={styles.errorText}
          role="alert"
          aria-live="polite"
        >
          {error}
        </p>
      )}
    </div>
  );
};

export default Input;
