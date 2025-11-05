import React, { useEffect } from "react";
import styles from "./Modal.module.scss";

const Modal = ({ isOpen, onClose, title, children }) => {
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const modalId = `modal-${title.toLowerCase().replace(/\s+/g, "-")}`;
  const titleId = `${modalId}-title`;
  const contentId = `${modalId}-content`;

  return (
    <div
      className={styles.overlay}
      role="dialog"
      aria-modal="true"
      aria-labelledby={titleId}
      aria-describedby={contentId}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className={styles.modal}>
        <div className={styles.header}>
          <h3 id={titleId}>{title}</h3>
          <button
            className={styles.closeButton}
            onClick={onClose}
            aria-label="Modal'ı kapat"
            type="button"
          >
            <span aria-hidden="true">✕</span>
          </button>
        </div>
        <div id={contentId} className={styles.content}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
