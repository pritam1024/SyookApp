import React from "react";
import Button from "./submit";
import Image from "./image";

const RenderNotes = ({ notes, handleEdit, handleDelete }) => {
  return (
    <>
      {notes.map((note, index) => {
        return (
          <div className="display-notes__render" key={`note_${index}`}>
            <Image />
            <div className="notes">
              <p className="display-notes__title">{note.title}</p>
              <p className="display-notes__description">{note.description}</p>
            </div>
            <div className="btn__wapper">
              <Button name="edit" handleClick={() => handleEdit(note)} />
              <Button name="delete" handleClick={() => handleDelete(note)} />
            </div>
          </div>
        );
      })}
    </>
  );
};

export default RenderNotes;
