import React from "react";

const Button = ({ handleClick, name, disabled }) => {
  return (
    <div
      className={
        name === "submit" ? "note-editor__submit" : `display-notes__${name}`
      }
    >
      <button
        className={`btn btn--${name}`}
        onClick={handleClick}
        disabled={disabled}
      >
        {name}
      </button>
    </div>
  );
};

export default Button;
