import {React, Component} from 'react';
import './home.css';
import Timer from './timer.component';

class HomeComponent extends Component {
  constructor () {
    super ();
    this.state = {};
  }

  render () {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark">
          <a className="navbar-brand primary-color" href="#">
            N <span className="secondary-color">&</span> D
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div
            className="collapse navbar-collapse hamburgerView"
            id="navbarNavAltMarkup"
          >
            <div className="navbar-nav text-center">
              <a className="nav-item nav-link" href="#location">Location</a>
              <a className="nav-item nav-link">Menu</a>
              <a className="nav-item nav-link">
                Confirm your Presence
              </a>
            </div>
          </div>
        </nav>

        <div className="col-12 display-name-wrapper d-flex justify-content-center align-items-center text-center">
          <div>
            <p>Nishanth</p>
            <p className="secondary-color">&</p>
            <p>Divya</p>

          </div>
        </div>

        <Timer />

        <div id="location" className="col-12 d-flex justify-content-center align-items-center text-center">
            <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2798.580044638135!2d-73.64134078505008!3d45.45811814187127!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cc9172e1f2873a7%3A0xdc7052006ff9bf92!2sConcordia%20University%20-%20Loyola%20Campus!5e0!3m2!1sen!2sca!4v1631564309790!5m2!1sen!2sca"
            />
        </div>
        
      </div>
    );
  }
}

export default HomeComponent;
