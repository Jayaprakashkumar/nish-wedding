import { React, Component } from "react"
import "./home.css"


class HomeComponent extends Component {

    constructor() {
        super();
        this.state = {

        }
    }

    render() {

        return (
            <>
                <nav className="navbar navbar-expand-lg navbar-dark">
                    <a className="navbar-brand primary-color" href="#">N <span className="secondary-color">&</span> D</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse hamburgerView" id="navbarNavAltMarkup">
                        <div className="navbar-nav text-center">
                            <a className="nav-item nav-link" href="#">Location</a>
                            <a className="nav-item nav-link" href="#">Menu</a>
                            <a className="nav-item nav-link" href="#">Confirm your Presence</a>
                            <a className="nav-item nav-link" href="#">Carrer</a>
                            <a className="nav-item nav-link" href="#">Our Story</a>
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
            </>
        )
    }

}



export default HomeComponent;