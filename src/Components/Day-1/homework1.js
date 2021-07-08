import React from "react";
 
class homework1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      a: 111,
      b: 555,
      c: {
        c1: 123,
        c2: 456,
        c3: 789,
        c4: 980
      }
    };
  }

  //changed vlaues fuction
  changeData = () => {
    console.log(this.state.a);
    this.setState({
      a: 999,
      c: {
        ...this.state.c,
        c1: 654,
        c3: 980
      }
    });
    console.log(this.state.a);
    console.log(this.state.b);
    console.log(this.state.c.c1);
  };

  render() {
    console.log(this.state);
    return (
      <div className="App">
        <h1>Initial data stored in State</h1>
        <p>Value of "a" is {this.state.a} </p>
        <p>Value of "b" is {this.state.b} </p>
        <p> "c" is a object with having values name ..c1 , c2 ,c3 , c4</p>
        <p>Value of "c1" is {this.state.c.c1} </p>
        <p>Value of "c2" is {this.state.c.c2} </p>
        <p>Value of "c3" is {this.state.c.c3} </p>
        <p>Value of "c4" is {this.state.c.c4} </p>
        <p>Click below to see the changes</p>
        <button onClick={this.changeData}>ChangeData</button>
      </div>
    );
  }
}
export default homework1;