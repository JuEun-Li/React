import React, { Component, useState }from "react";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";

import "./App.css";

import Home from "./components/Home";
import About from "./components/About";
import Topic from "./components/Topic";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content_list: [
        { id: 1, title: "list1", desc: "list 입니다." },
        { id: 2, title: "list2", desc: "list 입니다." },
        { id: 3, title: "list2", desc: "list 입니다." },
      ],
      content: { title: "제목입니다", desc: "세부사항입니다." },
    };
  }
  renderMenu() {
    return (
      <div className="menu">
        <NavLink activeClassName="active" to="/" exact>
          Home
        </NavLink>
        <NavLink activeClassName="active" to="/About">
          About
        </NavLink>
        <NavLink activeClassName="active" to="/Topic">
          Topic
        </NavLink>
        {/* a태그를 사용하면 안 된다. 화면이 새로 그려지기때문. */}

        {/* <nav class="navbar navbar-expand-sm navbar-dark bg-dark">
          <a href="#" class="navbar-brand">
            Red Velvet
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#collapsibleNavbar"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="collapsibleNavbar">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a href="#" class="nav-link">
                  공지사항
                </a>
              </li>
              <li class="nav-item">
                <a href="#" class="nav-link">
                  갤러리
                </a>
              </li>
              <li class="nav-item">
                <a href="#" class="nav-link">
                  앨범
                </a>
              </li>
            </ul>
          </div>
        </nav> */}
      </div>
    );
  }
  render() {
    return (
      <Router>
        <div>
          {this.renderMenu()}
          <Route exact path="/" component={Home} />
          <Route
            path="/About"
            component={About}
            title={this.state.content.title}
            desc={this.state.content.desc}
          />
          <Route path="/Topic" component={Topic} />
        </div>
      </Router>
    );
  }
}
export default App;
