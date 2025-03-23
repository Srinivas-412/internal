import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";

const Notes = () => {
  const [note, setNote] = useState(localStorage.getItem("note") || "");

  // Auto-save notes to local storage
  useEffect(() => {
    localStorage.setItem("note", note);
  }, [note]);

  // Word count function
  const wordCount = note.trim().split(/\s+/).filter(Boolean).length;

  return (
    <div style={styles.container}>
      <h2>Auto-Saving Notes App</h2>
      <textarea
        style={styles.textarea}
        value={note}
        onChange={(e) => setNote(e.target.value)}
        placeholder="Write your notes here..."
      />
      <p>Word Count: {wordCount}</p>

      <h3>Preview (Markdown Supported)</h3>
      <div style={styles.preview}>
        <ReactMarkdown>{note}</ReactMarkdown>
      </div>
    </div>
  );
};

// Inline styles
const styles = {
  container: { maxWidth: "600px", margin: "20px auto", textAlign: "center" },
  textarea: {
    width: "100%",
    height: "200px",
    padding: "10px",
    fontSize: "16px",
  },
  preview: {
    border: "1px solid #ddd",
    padding: "10px",
    textAlign: "left",
    minHeight: "100px",
  },
};

export default Notes;
