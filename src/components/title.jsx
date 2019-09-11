import React from "react";

const Title = ({ handleChange, title }) => {
  return (
    <div className="note-editor__Title">
      <input
        name="title"
        type="text"
        placeholder="Title"
        onChange={handleChange}
        value={title}
      />
    </div>
  );
};

export default Title;
