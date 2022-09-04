import React from "react";

function NoteItemNotActive({ id, title, body, onUnArchived, onDelete }) {
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
      <button onClick={() => onUnArchived(id)} style={{ cursor: "pointer" }}>
        Un Archived
      </button>
    </li>
  );
}

export default NoteItemNotActive;
