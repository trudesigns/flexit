import React, { Component } from 'react';

export class Signin extends Component {
  render() {
    return (
      <div>
        <h1>Signin</h1>

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

            <div className="col-6">
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

            <div className="col-12">
              <div className="select-wrapper mb-5">
                <select name="demo-category" id="demo-category">
                  <option defaultValue="">- Category -</option>
                  <option value="1">Female</option>
                  <option value="1">Male</option>
                </select>
              </div>
            </div>
            <div className="col-4">
              <div className="mb-5">
                <input
                  type="radio"
                  id="demo-priority-low"
                  name="demo-priority"
                  defaultChecked
                />
                <label htmlFor="demo-priority-low">Agree to terms</label>
              </div>
            </div>

            <div className="col-12">
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

export default Signin;
