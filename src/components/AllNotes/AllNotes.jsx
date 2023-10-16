import React, { useState, useEffect } from "react";
import "./AllNotes.css";
const AllNotes = () => {
  const [note, setNote] = useState("");

  useEffect(() => {
    const savedNote = localStorage.getItem("savedNote");
    if (savedNote) {
      setNote(savedNote);
    }
  }, []);

  const handleChange = (e) => {
    const newNote = e.target.value;
    setNote(newNote);
    localStorage.setItem("savedNote", newNote);
  };

  return (
    <div className="notes-box">
      <div id="notes-heading">All Notes</div>
      <textarea className="note-input" value={note} onChange={handleChange} />
    </div>
  );
};

export default AllNotes;
