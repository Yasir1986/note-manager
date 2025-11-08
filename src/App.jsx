import React, { useState } from "react";
import "./App.css";
import NoteManager from "../src/components/NoteManager";
import NoteForm from "../src/components/NotForm";

export default function App() {
  const [notes, setNotes] = useState([]);
  const [editingId, setEditingId] = useState(null);

  const handleAddOrUpdate = (title, content) => {
    if (!title.trim() || !content.trim()) return;

    if (editingId !== null) {
      setNotes((prev) =>
        prev.map((note) =>
          note.id === editingId ? { ...note, title, content } : note
        )
      );
      setEditingId(null);
    } else {
      setNotes((prev) => [...prev, { id: Date.now(), title, content }]);
    }
  };

  const handleEdit = (id) => {
    setEditingId(id);
  };

  const handleDelete = (id) => {
    setNotes((prev) => prev.filter((n) => n.id !== id));
  };

  const currentNote = notes.find((n) => n.id === editingId) || {
    title: "",
    content: "",
  };

  return (
    <div className="app">
      <h1>📝 Note Manager</h1>
      <NoteForm
        onSubmit={handleAddOrUpdate}
        editingId={editingId}
        currentNote={currentNote}
      />
      <NoteManager
        notes={notes}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </div>
  );
}
