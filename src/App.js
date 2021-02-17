import React, { Component } from "react";
import "./style.css";
import Person from "./Person/Person";
class App extends Component {
  state = {
    persons: [
      { name: "Max", age: 28 },
      { name: "Monu", age: 27 },
      { name: "Stephanie", age: 26 }
    ],
    otherState: "some other value"
  };
  //property which holds the function
  switchNameHandler = () => {
    // console.log("was clicked")
    //DON"T Do this  this.state.persons[0];.name='Maximlia';
    this.setState({
      persons: [
        { name: "Maxmilia", age: 28 },
        { name: "Monu", age: 27 },
        { name: "Stephanie", age: 20 }
      ]
    });
  };
  render() {
    return (
      <div>
        <h1>I'm devloping react</h1>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
        />
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
        />
      </div>
    );
    //return React.creat
  }
}
export default App;
