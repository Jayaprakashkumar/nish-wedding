import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import HomeComponent from './home.component';
import ConfirmPresense from './confirmPresence';
import Menu from './menu';


function App() {
  return (
    <div className="App">
      <Router>
        <nav className="navbar navbar-expand-lg navbar-dark">
          <Link className="navbar-brand primary-color" to="/home">
            N <span className="secondary-color">&</span> D
          </Link>
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
              {/* <Link className="nav-item nav-link" to="/location">Location</Link> */}
              <a className="nav-item nav-link" href="/home#location">Location</a>
              <Link className="nav-item nav-link" to="/menu">Menu</Link>
              <Link className="nav-item nav-link" to="/ourStory">
                Our Story
              </Link>
            </div>
          </div>
        </nav>

        <>
          <Switch>
          <Route exact path="/">
              <HomeComponent />
            </Route>
            <Route  path="/home">
              <HomeComponent />
            </Route>
            <Route path="/home:location">
              <HomeComponent />
            </Route>
            <Route path="/menu">
              <Menu />
            </Route>
            <Route path="/ourStory">
              <ConfirmPresense />
            </Route>
          </Switch>
        </>
      </Router>



    </div>
  );
}

export default App;
