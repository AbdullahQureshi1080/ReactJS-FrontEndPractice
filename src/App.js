import React, { Component } from "react";
import "./App.css";
import Button from "./components/Button";
import Input from "./components/Input";
// import Form from "./components/Form";
// import styles from "./components/Button.module.css"
class App extends Component {
  state = {
    btn: {
      top: "0",
      left: "0px",
      right: "0",
      position: "absolute",
      width: "110px",
      height: "100%",
      background: "linear-gradient(to right, #ff105f, #ffad06)",
      borderRadius: "30px",
      transition: "0.5s",
      justifyContent: "center",
      alignContent: "center",
    },
    regis: { left: "450px" },
    log: { left: "50px" },
  };
  register = () => {
    console.log("yo it happens");
    let newStyleBtn = {
      top: "0",
      left: "110px",
      right: "0",
      position: "absolute",
      width: "110px",
      height: "100%",
      background: "linear-gradient(to right, #ff105f, #ffad06)",
      borderRadius: "30px",
      transition: "0.5s",
      justifyContent: "center",
      alignContent: "center",
    };
    let regisA = { left: "50px" };
    let logA = { left: "-400px" };
    this.setState({ btn: newStyleBtn, regis: regisA, log: logA });
  };
  login = () => {
    console.log("yo it happens");
    let newStyleBtn = {
      top: "0",
      left: "0px",
      right: "0",
      position: "absolute",
      width: "110px",
      height: "100%",
      background: "linear-gradient(to right, #ff105f, #ffad06)",
      borderRadius: "30px",
      transition: "0.5s",
      justifyContent: "center",
      alignContent: "center",
    };
    let regisA = { left: "450px" };
    let logA = { left: "50px" };
    this.setState({ btn: newStyleBtn, regis: regisA, log: logA });
  };

  check = () => {
    alert("It Works");
  };

  render() {
    return (
      <div className="App">
        HERE WE GO !
        <div className="main-wrapper">
          <div className="button-box">
            <div style={this.state.btn}></div>
            <Button className="button" type="button" click={this.login}>
              Sign In
            </Button>
            <Button className="button" type="button" click={this.register}>
              Register
            </Button>
          </div>

          <form style={this.state.log} className="Input">
            <Input value="Enter User ID" type="text"></Input>
            <Input value="Enter Password" type="password"></Input>
            {/* <span>Remember Password</span> */}

            <div className="divForButton">
              {/* <span>Remember password</span> */}
              <Input value = "" type="checkbox" className="checkbox"></Input>
              <Button className="submit-btn" type="button" click={this.check}>Log In</Button>
            </div>
          </form>

          <form style={this.state.regis} className="Input">
            <Input type="text" value="Enter First Name" required></Input>
            <Input type="text" value="Enter Last Name" required></Input>
            <Input type="email" value="Enter Email ID" required></Input>
            <Input type="password" value="Enter Password" required></Input>
            <Input
              type="password"
              value="Enter Confirm Password"
              required
            ></Input>
            <span> I Agree to the Terms and Conditions</span>
            <Input type="checkbox" className="checkbox"></Input>
            <Button type="submit" className="submit-btn" click={this.check}>
              Sign up
            </Button>
          </form>
        </div>
      </div>
    );
  }
}

export default App;
