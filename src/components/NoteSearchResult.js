import React from "react";

function ContactList({ data }) {
  return (
    <>
      <div>
        <ul>
          {data.map((item) => (
            <div>title: {item.title}</div>
          ))}
        </ul>
      </div>
      <br />
    </>
  );
}

export default ContactList;
