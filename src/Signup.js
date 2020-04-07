import React, { Component } from "react";
// import ReactDOM from "react-dom";
import "./Signup.css";
import logo from "./index.png";
class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "Enter email",
      password: "Password",
      confirmpassword: "Password",
      designer: false,
      maker: false,
      show: false,
      show1: false,
    };
    this.toggleDiv = this.toggleDiv.bind(this);
    this.onCheckChange = this.onCheckChange.bind(this);
  }
  //   handleemail = (event) => {
  //     this.setState({ email: event.target.value });
  //     console.log(event.target.value);
  //   };
  //   handlepassword = (event) => {
  //     this.setState({ password: event.target.value });
  //     console.log(event.target.value);
  //   };

  handlechangeall = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };
  handlesubmit = (event) => {
    // alert(`${this.state.fullname}`);
    // console.log(`${this.state.email},${this.state.password}`);
    alert(JSON.stringify(this.state));
    console.log(JSON.stringify(this.state));
    event.preventDefault();
  };
  onCheckChange = (event) => {
    console.log(event.target.checked);

    this.setState({ [event.target.name]: event.target.checked });
  };
  toggleDiv = () => {
    const { show } = this.state;
    this.setState({ show: !show });
  };
  toggleDiv1 = () => {
    const { show1 } = this.state;
    this.setState({ show1: !show1 });
  };

  render() {
    return (
      <div className="backimg row">
        <div className="loginForm col-sm-4">
          <form className="" onSubmit={this.handlesubmit}>
            <label className="">Email Address</label>
            <br />
            <input
              type="text"
              name="email"
              className=""
              value={this.state.email}
              onChange={this.handlechangeall}
            />
            <br />
            <label className="">Password</label>
            <br />
            <input
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.handlechangeall}
            />
            <br />
            <label className="">Confirm Password</label>
            <br />
            <input
              type="password"
              name="confirmpassword"
              value={this.state.confirmpassword}
              onChange={this.handlechangeall}
            />
            <label className="">Designer</label>
            <input
              type="checkbox"
              name="designer"
              className="pt-5"
              checked={this.state.designer}
              onChange={this.onCheckChange}
              onClick={this.toggleDiv1}
            />
            {this.state.show1 && <Designer />}
            <label className="">Maker</label>
            <input
              type="checkbox"
              name="maker"
              checked={this.state.maker}
              onChange={this.onCheckChange}
              onClick={this.toggleDiv}
            />
            {this.state.show && <Maker />}

            <br />
            <input type="submit" value="Register" className="" />
          </form>
        </div>
        <div className="ml-5 text-white nayaApplogo col-sm-4">
          <img src={logo} className=" pb-3" alt="logo" />
          <h1 className="text-white custom-font">naya</h1>
          <p>
            You are invited to be a part of our ecosystem of designers and
            makers
          </p>
          <p>
            Once registered, you will get notifications on available projects
          </p>
          <p>Create with us!</p>
        </div>
      </div>
    );
  }
}
class Designer extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "1" };
  }
  handlechange = (event) => {
    this.setState({ value: event.target.value });
  };
  handleSubmit = (event) => {
    // alert(`${this.state.value}`);
    console.log(`${this.state.value}`);
    // alert(JSON.stringify(this.state));
    // console.log(JSON.stringify(this.state));
    // event.preventDefault();
  };
  render() {
    return (
      <div className="nayaApplogo ">
        <div className="">
          <form className="nayaApplogo1" onSubmit={this.handleSubmit}>
            <label>
              How much time can you spend on Naya projects per week?
            </label>
            <input
              type="number"
              value={this.state.value}
              onChange={this.handlechange}
            />
            <label>Which of the following best describes you?</label>
            <select
              type="number"
              value={this.state.value}
              onChange={this.handlechange}
            >
              <option value="Furniture">Furniture Designer</option>

              <option value="Architect">Architect</option>
              <option value="Interior">Interior Designer</option>
              <option value="Industrial">Industrial Designer</option>
              <option value="Designer">Designer Maker</option>
              <option value="Other">Other</option>
            </select>
            <label>Education level/type</label>
            <input type="text" name="training"></input>
          </form>
        </div>
      </div>
    );
  }
}
class Maker extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "1" };
  }
  handlechange = (event) => {
    this.setState({ value: event.target.value });
  };
  handleSubmit = (event) => {
    // alert(`${this.state.value}`);
    console.log(`${this.state.value}`);
    // alert(JSON.stringify(this.state));
    // console.log(JSON.stringify(this.state));
    // event.preventDefault();
  };
  render() {
    return (
      <div className="nayaApplogo">
        <div className="">
          <form className="nayaApplogo1" onSubmit={this.handleSubmit}>
            <label>
              How many projects on average do you work on every month?
            </label>
            <select
              type="number"
              value={this.state.value}
              onChange={this.handlechange}
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="3">4</option>
              <option value="3">5</option>
              <option value="3">6</option>
              <option value="3">7</option>
              <option value="3">8</option>
              <option value="3">9</option>
              <option value="10">10+</option>
            </select>
            <label>What kind of materials can you work with?</label>
            <select
              //   type="number"
              value={this.state.value}
              onChange={this.handlechange}
            >
              <option value="Wood">Wood</option>
              <option value="Metal">Metal</option>
              <option value="Glass">Glass</option>
              <option value="Plastic">Plastic</option>
              <option value="Concrete">Concrete</option>
              <option value="Other">Other</option>
            </select>
            <label>Where are your based out of?</label>
            <input type="text" name="location"></input>
          </form>
        </div>
      </div>
    );
  }
}
export default Signup;
