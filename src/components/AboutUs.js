import { Component } from "react";
import React from "react";
import User from "./User";
class AboutUs extends Component {
  constructor() {
    super();
    this.state = {
      userInfo: {
        name: "",
        location: "",
      },
    };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/divyaatluri");
    const jsonData = await data.json();
    this.setState({
      userInfo: jsonData,
    });
  }

  render() {
    const { name, location } = this.state.userInfo;

    return (
      <div>
        <h2> AboutUs Page</h2>
        <User name={name} location={location} />
      </div>
    );
  }
}

export default AboutUs;
