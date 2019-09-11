import React from "react";

const Description = ({ handleChange, description }) => {
  return (
    <div className="note-editor__description">
      <textarea
        name="description"
        placeholder="Description"
        onChange={handleChange}
        value={description}
      />
    </div>
  );
};

export default Description;
