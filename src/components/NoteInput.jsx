import React from "react";

export default function NoteInput({ type, value, onChange, placeholder }) {
  const handleChange = (e) => {
    e.preventDefault(); 
    onChange(e.target.value);
  };

  if (type === "textarea") {
    return (
      <textarea
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
      />
    );
  }

  return (
    <input
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={handleChange}
    />
  );
}
