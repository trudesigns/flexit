import React, { Component } from 'react';

export class Signup extends Component {
  render() {
    return (
      <div>
        <h1>Signup</h1>

        <h3>Form</h3>

        <form method="post" action="#">
          <div className="grid-wrapper">
            <div className="col-6">
              <div className="mb-5">
                <input
                  type="email"
                  name="demo-email"
                  id="demo-email"
                  defaultValue=""
                  placeholder="Email"
                />
              </div>
            </div>

            <div className="col-12">
              <div className="mb-5">
                <input
                  type="text"
                  name="demo-password"
                  id="demo-password"
                  defaultValue=""
                  placeholder="Password"
                />
              </div>
            </div>

            <div className="col-6">
              <ul className="actions">
                <li>
                  <input type="submit" value="Sign in" className="special" />
                </li>
              </ul>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default Signup;
