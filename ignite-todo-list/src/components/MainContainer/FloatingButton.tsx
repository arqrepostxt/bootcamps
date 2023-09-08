import React from "react";
import styles from "./FloatingButton.module.css";


interface FloatingButtonProps {
  onClick: () => void;
  icon: string;
}

const FloatingButton: React.FC<FloatingButtonProps> =  ({ onClick, icon }) => {
  return (
    <button
      onClick={onClick}
      className={styles.fabButton}
      style={{
        borderRadius: "50%",
        width: "40px",
        height: "40px",
        background: "black",
      }}
    >
      {icon}
    </button>
  );
};

export default FloatingButton;
