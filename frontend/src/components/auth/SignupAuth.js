import React, { Component } from "react";
import { Mutation } from "react-apollo";
import { SIGNUP_USER } from "../../queries/index.js";
class SignupAuth extends Component {
  state = {
    username: "",
    email: "",
    password: "",
    passwordConfirmation: ""
  };

  handleChange = event => {
    const { name, value } = event.target;
    // console.log(name, ':', value);
    this.setState({
      [name]: value
    });
  };

  render() {
    const { username, email, password, passwordConfirmation } = this.state;
    return (
      <div className="App">
        <h2 className="App">SignupAuth</h2>

        <Mutation mutation={SIGNUP_USER}>
          {() => {
            return (
              <form className="form">
                <label htmlFor="username">
                  Username
                  <input
                    type="text"
                    name="username"
                    id="username"
                    placeholder="Username"
                    onChange={this.handleChange}
                    value={username}
                  />
                  />
                </label>
                <label htmlFor="email">
                  Email
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email"
                    onChange={this.handleChange}
                    value={email}
                  />
                </label>
                <label htmlFor="password">
                  Password
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Password"
                    onChange={this.handleChange}
                    value={password}
                  />
                </label>
                <label htmlFor="passwordConfirmation">
                  Confirm Password
                  <input
                    type="password"
                    name="passwordConfirmation"
                    id="passwordConfirmation"
                    placeholder="Confirm Password"
                    onChange={this.handleChange}
                    value={passwordConfirmation}
                  />
                </label>
                <div>
                  <button type="button" className="button-primary">
                    Signup
                  </button>
                </div>
              </form>
            );
          }}
        </Mutation>
      </div>
    );
  }
}

export default SignupAuth;
