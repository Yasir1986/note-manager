import React, { useState, useEffect } from "react";
import NoteInput from "./NoteInput";

export default function NoteForm({ onSubmit, editingId, currentNote }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    setTitle(currentNote.title || "");
    setContent(currentNote.content || "");
  }, [currentNote]);

  const handleSubmit = () => {
    onSubmit(title, content);
    setTitle("");
    setContent("");
  };

  return (
    <div className="note-form">
      <NoteInput
        type="text"
        placeholder="Title"
        value={title}
        onChange={setTitle}
      />
      <NoteInput
        type="textarea"
        placeholder="Content"
        value={content}
        onChange={setContent}
      />
      <button onClick={handleSubmit}>
        {editingId ? "Update Note" : "Add Note"}
      </button>
    </div>
  );
}
