import { Component } from "react";
import React from "react";

class User extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { name, location } = this.props;
    return (
      <div>
        <h3>User details : </h3>
        <p>Name : {name}</p>
        <p>Location : {location}</p>
      </div>
    );
  }
}

export default User;
