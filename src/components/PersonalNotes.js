import React from "react";

import { getInitialData } from "../utils";

import NoteList from "./NoteList";
import NoteInput from "./NoteInput";
import NoteSearch from "./NoteSearch";
import NoteSearchResult from "./NoteSearchResult";

class PersonalNotes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: getInitialData(),
      onSearch: getInitialData(),
    };

    this.onAddNote = this.onAddNote.bind(this);
    this.onDeleteNote = this.onDeleteNote.bind(this);
    this.onArchivedNote = this.onArchivedNote.bind(this);
    this.onUnArchivedNote = this.onUnArchivedNote.bind(this);
    this.onSearchNote = this.onSearchNote.bind(this);
  }

  onAddNote({ title, body }) {
    this.setState((prevState) => {
      return {
        data: [
          ...prevState.data,
          {
            id: +new Date(),
            title,
            body,
            createdAt: +new Date(),
            archived: false,
          },
        ],
      };
    });
  }

  onDeleteNote(id) {
    const data = this.state.data.filter((item) => item.id !== id);
    this.setState({ data });
  }

  onArchivedNote(id) {
    const filterIndex = this.state.data.findIndex((item) => item.id === id);
    const filter = this.state.data.find((item) => item.id === id);

    let data = this.state.data;
    const payload = {
      id: filter.id,
      title: filter.title,
      body: filter.body,
      createdAt: filter.createdAt,
      archived: true,
    };
    data.splice(filterIndex, 1, payload);

    this.setState({ data });
  }

  onUnArchivedNote(id) {
    const filterIndex = this.state.data.findIndex((item) => item.id === id);
    const filter = this.state.data.find((item) => item.id === id);

    let data = this.state.data;
    const payload = {
      id: filter.id,
      title: filter.title,
      body: filter.body,
      createdAt: filter.createdAt,
      archived: false,
    };
    data.splice(filterIndex, 1, payload);

    this.setState({ data });
  }

  onSearchNote(title) {
    const data = this.state.data.filter((item) => item.title.includes(title));
    if (title.length) {
      this.setState({ onSearch: this.state.data });
    }
    this.setState({ onSearch: data });
  }

  render() {
    return (
      <div>
        <div className=".note-app__header">
          <h1>Notes</h1>
        </div>
        <hr />
        <div className="note-app__body">
          <h2>Cari Catatan</h2>
          <NoteSearch eventTitle={this.onSearchNote} />
          <NoteSearchResult data={this.state.onSearch} />
          <hr />

          <h2>Buat Catatan</h2>
          <NoteInput addNote={this.onAddNote} />
          <hr />
          <NoteList
            data={this.state.data}
            onDelete={this.onDeleteNote}
            onArchived={this.onArchivedNote}
            onUnArchived={this.onUnArchivedNote}
          />
        </div>
      </div>
    );
  }
}

export default PersonalNotes;
