import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Navbar, Nav } from 'react-bootstrap'
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import HomeComponent from './home.component';
import ConfirmPresense from './confirmPresence';
import LoveStory from './LoveStory';
import Menu from './menu';


function App() {
  return (

    <div className="App">
      <Router>
        <Navbar collapseOnSelect bg="dark" variant="dark" expand="lg" sticky="top">
          <Link className="navbar-brand primary-color" to="/home">
            N <span className="secondary-color">&</span> D
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto align-items-center">
              <Nav.Link href="/home#location" >Location</Nav.Link>
              <Nav.Link as={Link} to="/menu" eventKey="/menu">Menu</Nav.Link>
              <Nav.Link as={Link} to="/ourStory" eventKey="/ourStory">Our Story</Nav.Link>
              <Nav.Link as={Link} to="/rsvp" eventKey="/rsvp">Confirm your presence</Nav.Link>

            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Switch>
          <Route exact path="/">
            <HomeComponent />
          </Route>
          <Route path="/home">
            <HomeComponent />
          </Route>
          <Route path="/home:location">
            <HomeComponent />
          </Route>
          <Route path="/menu">
            <Menu />
          </Route>
          <Route path="/ourStory">
            <LoveStory />
          </Route>
          <Route path="/rsvp">
            <ConfirmPresense />
          </Route>
        </Switch>
      </Router>

      <div className="footer d-flex justify-content-between">
        <ul>
          <li><a href="https://www.instagram.com/Jayaprakashkumar_Jp/" target="_blank"><img src="../instagram.png"  className="insta"/></a></li>
          <li><a href="https://www.linkedin.com/in/jayaprakash-kumar-24b05abb" target="_blank"><img src="../linkedln.png" /></a></li>
        </ul>
        <a href="https://jayaprakashkumar.com/" className="pr-2" target="_blank"><img src="../developer.png" /></a>
      </div>
        <p className="small text-center">Copyright 2021 - designed by Jayaprakash</p>
      
    </div>
  );
}

export default App;
