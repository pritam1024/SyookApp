import React from "react";
import RenderNotes from "./renderNote";

const DisplayNotes = ({ notes, handleEdit, handleDelete }) => {
  return (
    <div className="display-notes">
      {notes.length > 0 ? (
        <>
          <h1 className="display-notes__heading">ALL NOTES</h1>
          <RenderNotes
            notes={notes}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
          />
        </>
      ) : (
        ""
      )}
    </div>
  );
};

export default DisplayNotes;
