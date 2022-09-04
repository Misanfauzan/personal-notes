import React from "react";

class NoteSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
    };

    this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
  }

  onTitleChangeEventHandler(event) {
    this.setState(() => {
      return {
        title: event.target.value,
      };
    });
    this.props.eventTitle(this.state.title);
  }

  render() {
    return (
      <input
        type="text"
        placeholder="Search"
        value={this.state.title}
        onChange={this.onTitleChangeEventHandler}
      />
    );
  }
}

export default NoteSearch;
