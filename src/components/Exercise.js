import React from "react";
import firebase from "../firestore";

class Exercise extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      procedure: "",
      repeat: "",
      video: "",
    };
  }

  updateInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  addExercise = (e) => {
    e.preventDefault();
    const db = firebase.firestore();

    db.settings({
      timestampsInSnapshots: true,
    });

    db.collection("exercises").add({
      name: this.state.name,
      procedure: this.state.procedure,
      repeat: this.state.repeat,
      video: this.state.video,
    });

    this.setState({
      name: "",
      procedure: "",
      repeat: "",
      video: "",
    });
  };

  render() {
    return (
      <form onSubmit={this.addExercise}>
        <input
          type="text"
          name="name"
          placeholder="Exercise name"
          onChange={this.updateInput}
          value={this.state.name}
        />
        <input
          type="text"
          name="procedure"
          placeholder="Description"
          onChange={this.updateInput}
          value={this.state.procedure}
        />
        <input
          type="text"
          name="repeat"
          placeholder="Repeats"
          onChange={this.updateInput}
          value={this.state.repeat}
        />
        <input
          type="text"
          name="video"
          placeholder="video url"
          onChange={this.updateInput}
          value={this.state.video}
        />
        <button type="submit">Submit</button>
      </form>
    )
  }
}

export default Exercise;
