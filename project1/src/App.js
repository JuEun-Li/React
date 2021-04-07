import React, { Component } from "react";
import { BrowserRouter as Router, Route,  NavLink } from "react-router-dom";
import './App.css';

import Home from './components/Home';
import About from './components/About';
import Topic from './components/Topic';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            content_list: [
                {id: 1, title:"list1", desc: "list 입니다."},
                {id: 2, title:"list2", desc: "list 입니다."},
                {id: 3, title:"list2", desc: "list 입니다."}
            ]
        }
    }
  renderMenu() {
    return (
      <div className="menu">
        <NavLink activeClassName="active" to="/" exact>Home</NavLink>
        <NavLink activeClassName="active" to="/About">About</NavLink>
        <NavLink activeClassName="active" to="/Topic">Topic</NavLink>

        {/* a태그를 사용하면 안 된다. 화면이 새로 그려지기때문. */}
      </div>
    );
  }
  render() {
    return (
      <Router>
        <div>
          {this.renderMenu()}
          <Route exact path="/" component={Home} />
          <Route path="/About" component={About} />
          <Route path="/Topic" component={Topic} />
        </div>
      </Router>
    );
  }
}
export default App;