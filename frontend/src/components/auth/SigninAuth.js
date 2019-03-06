import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Mutation } from "react-apollo";
import { SIGNIN_USER_MUTATION } from "../../queries";
import Error from "../Error";
import PropTypes from "prop-types";

const initialState = {
  username: "",
  password: ""
};

class SigninAuth extends Component {
  static propTypes = {
    history: PropTypes.object.isRequired,
    refetch: PropTypes.func.isRequired
  };

  state = {
    ...initialState
  };

  clearState = () => {
    this.setState({
      ...initialState
    });
  };

  handleChange = event => {
    const { name, value } = event.target;
    // console.log(name, ':', value);
    this.setState({
      [name]: value
    });
  };

  handleSubmit = (event, signinUser) => {
    const { history, refetch } = this.props;
    event.preventDefault();
    signinUser().then(({ data }) => {
      // console.log(data);
      // console.log(data.data.signinUser.token);
      localStorage.setItem("token", data.signinUser.token);
      refetch();
      this.clearState();
      history.push("/");
    });
  };

  validateForm = () => {
    const { username, password } = this.state;
    const isInvalid = !username || !password;

    return isInvalid;
  };

  render() {
    const { username, password } = this.state;
    return (
      <div className="App">
        <h2 className="App">SigninAuth</h2>

        <Mutation
          mutation={SIGNIN_USER_MUTATION}
          variables={{ username, password }}
        >
          {(signinUser, { data, loading, error }) => {
            return (
              <form
                className="form"
                onSubmit={event => this.handleSubmit(event, signinUser)}
              >
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

                <div>
                  <button
                    type="submit"
                    disabled={loading || this.validateForm()}
                    className="button-primary"
                  >
                    Signin
                  </button>
                  {error && <Error error={error} />}
                </div>
              </form>
            );
          }}
        </Mutation>
      </div>
    );
  }
}

export default withRouter(SigninAuth);
