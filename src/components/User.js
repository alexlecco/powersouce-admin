import React from 'react';
import firebase from "../firestore";

class User extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      fullname: '',
      status: false
    };
  }

  updateInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  addUser = e => {
    e.preventDefault();
    const db = firebase.firestore();
    
    db.settings({
      timestampsInSnapshots: true
    });

    db.collection('users').add({
      fullname: this.state.fullname,
      email: this.state.email,
      status: false
    });

    this.setState({
      fullname: '',
      email: '',
      status: false
    });
  };

  render() {
    return (
      <form onSubmit={this.addUser}>
        <input
          type="text"
          name="fullname"
          placeholder="Full name"
          onChange={this.updateInput}
          value={this.state.fullname}
        />
        <input
          type="email"
          name="email"
          placeholder="email"
          onChange={this.updateInput}
          value={this.state.email}
        />
        <button type="submit">Submit</button>
      </form>
    )
  }
}
export default User