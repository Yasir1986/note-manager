import React from "react";

export default function NoteManager({ notes, onEdit, onDelete }) {
  return (
    <div className="notes">
      {notes.length === 0 ? (
        <p>No notes yet. Add one above!</p>
      ) : (
        notes.map((note) => (
          <div key={note.id} className="note">
            <h2>{note.title}</h2>
            <p>{note.content}</p>
            <div className="buttons">
              <button onClick={() => onEdit(note.id)}>Edit</button>
              <button onClick={() => onDelete(note.id)}>Delete</button>
            </div>
          </div>
        ))
      )}
    </div>
  );
}
