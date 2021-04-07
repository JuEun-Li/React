import React, { Component } from 'react';

class Subject extends Component {
    render() {
      return(
        <div>
          <h2><a href="/subject" onClick={function(e){
            e.preventDefault();
            this.props.onChangePage(); // props로 onChangePage함수 호출하는 방법
          }.bind(this)}>{this.props.title}</a></h2>
          {this.props.sub}
        </div>
      );
    }
  }
  

export default Subject;