import React, { useState } from "react";
import "./App.css";

export default function App() {
  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [editingId, setEditingId] = useState(null);

  const handleAddNote = () => {
    if (!title.trim() || !content.trim()) return;

    if (editingId !== null) {
      setNotes(
        notes.map((note) =>
          note.id === editingId ? { ...note, title, content } : note
        )
      );
      setEditingId(null);
    } else {
      setNotes([...notes, { id: Date.now(), title, content }]);
    }

    setTitle("");
    setContent("");
  };

  const handleEdit = (id) => {
    const note = notes.find((n) => n.id === id);
    setTitle(note.title);
    setContent(note.content);
    setEditingId(id);
  };

  const handleDelete = (id) => {
    setNotes(notes.filter((n) => n.id !== id));
  };

  return (
    <div className="app">
      <h1>📝 Note Manager</h1>

      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button onClick={handleAddNote}>
        {editingId ? "Update Note" : "Add Note"}
      </button>

      <div className="notes">
        {notes.map((note) => (
          <div key={note.id} className="note">
            <h2>{note.title}</h2>
            <p>{note.content}</p>
            <div className="buttons">
              <button onClick={() => handleEdit(note.id)}>Edit</button>
              <button onClick={() => handleDelete(note.id)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
