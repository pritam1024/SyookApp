import React from "react";
import Title from "./title";
import Description from "./description";
import Button from "./submit";

const NoteEditor = ({ handleChange, handleSubmit, note }) => {
  const { title, description } = note;
  return (
    <div className="note-editor">
      <Title handleChange={handleChange} title={title} />
      <Description handleChange={handleChange} description={description} />
      <Button
        handleClick={handleSubmit}
        name="submit"
        disabled={!title && !description}
      />
    </div>
  );
};

export default NoteEditor;
