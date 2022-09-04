import React from "react";

import NoteItemActive from "./NoteItemActive";
import NoteItemNotActive from "./NoteItemNotActive";

function ContactList({ data, onDelete, onArchived, onUnArchived }) {
  return (
    <>
      <div>
        <h2>Catatan Aktif</h2>
        <ul>
          {data
            .filter((item) => item.archived === false)
            .map((item, index) => (
              <NoteItemActive
                key={index}
                index={index}
                id={item.id}
                onDelete={onDelete}
                onArchived={onArchived}
                {...item}
              />
            ))}
        </ul>
      </div>
      <br />
      <hr />
      <br />
      <div>
        <h2>Catatan Arsip</h2>
        <ul>
          {data
            .filter((item) => item.archived === true)
            .map((item, index) => (
              <NoteItemNotActive
                key={index}
                index={index}
                id={item.id}
                onDelete={onDelete}
                onUnArchived={onUnArchived}
                {...item}
              />
            ))}
        </ul>
      </div>
    </>
  );
}

export default ContactList;
