import React, { Component } from 'react';

class About extends Component {
  constructor(props){
    super(props);
    this.state={
      content: "bbb"
    }
  }
    render() {
      return (
        <div className="container">
          {this.state.content}
          {this.props.title}
          {this.props.desc}
        </div>
      );
    }
  }

export default About;