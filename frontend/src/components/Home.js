import React, { Component } from 'react';
import pic03 from '../assets/images/pic03.jpg';
import pic08 from '../assets/images/pic08.jpg';
import pic09 from '../assets/images/pic09.jpg';
import pic10 from '../assets/images/pic10.jpg';
export class Home extends Component {
  render() {
    return (
      <div>
        <h3>Image</h3>

        <h2>Select Your Workout</h2>

        <div className="box alt">
          <div className="grid-wrapper">
            <div className="col-4">
              <span className="image fit">
                <img src={pic08} alt="" />
              </span>
            </div>
            <div className="col-4">
              <span className="image fit">
                <img src={pic09} alt="" />
              </span>
            </div>
            <div className="col-4">
              <span className="image fit">
                <img src={pic10} alt="" />
              </span>
            </div>
            <div className="col-4">
              <span className="image fit">
                <img src={pic10} alt="" />
              </span>
            </div>
            <div className="col-4">
              <span className="image fit">
                <img src={pic08} alt="" />
              </span>
            </div>
            <div className="col-4">
              <span className="image fit">
                <img src={pic09} alt="" />
              </span>
            </div>
          </div>
        </div>

        <h2>Select Your Bodypart</h2>

        <div className="box alt">
          <div className="grid-wrapper">
            <div className="col-4">
              <span className="image fit">
                <img src={pic09} alt="" />
              </span>
            </div>
            <div className="col-4">
              <span className="image fit">
                <img src={pic10} alt="" />
              </span>
            </div>
            <div className="col-4">
              <span className="image fit">
                <img src={pic08} alt="" />
              </span>
            </div>
            <div className="col-4">
              <span className="image fit">
                <img src={pic09} alt="" />
              </span>
            </div>
            <div className="col-4">
              <span className="image fit">
                <img src={pic10} alt="" />
              </span>
            </div>
            <div className="col-4">
              <span className="image fit">
                <img src={pic08} alt="" />
              </span>
            </div>
          </div>
        </div>
        <ul className="actions">
          <li>
            <a href="/" className="button">
              Get Started
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Home;
