
import React, {Component} from "react";

export default class App extends Component {

  state = {
    name: "Martin"
  };

  constructor(props) {
    super(props);
  }

  clickHandler(e) {
    e.preventDefault();
    this.setState({
      name: "Joby"
    })
  }

  render(){
    return (
      <a href="https://google.com" onClick={(e) => {this.clickHandler(e)}}>{this.state.name}</a>
    );
  }
}