/* eslint-disable jsx-a11y/alt-text */
import eminem from "./img/eminem.jpg";
import React from "react";
class Welcome extends React.Component {
  state = {
    fullName: "",
    bio: "",
    profession: "",
    image: "",
  };
  handleClick = () =>
    this.setState({
      fullName: "amara wajih",
      bio: "student",
      profession: "full stack developer",
      image: eminem,
    });
  render() {
    return (
      <>
        <h1>Hello click here to see my profile</h1>

        <button onClick={this.handleClick}> ClickMe</button>
        <br />
        <br />
        <h2>
          {this.state.fullName}
          <h2>
            {this.state.bio}
            <h2>{this.state.profession}</h2>
          </h2>
        </h2>
        <div>
          
          <img src={this.state.image} />
        </div>
      </>
    );
  }
}
export default Welcome;
