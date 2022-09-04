import React from "react";

function NoteItemActive({ id, title, body, onArchived, onDelete }) {
  return (
    <li>
      <br />
      <div>title: {title}</div>
      <div>body: {body}</div>
      <button
        onClick={() => onDelete(id)}
        style={{ color: "red", cursor: "pointer" }}
      >
        Delete
      </button>
      <button onClick={() => onArchived(id)} style={{ cursor: "pointer" }}>
        Archive
      </button>
    </li>
  );
}

export default NoteItemActive;
