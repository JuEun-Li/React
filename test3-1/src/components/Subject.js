import React, { Component } from "react";

class Subject extends Component {
  render() {
    return (
      <div>
        <div>
          <h1>
            <a
              href="/"
              onClick={function (e) {
                e.preventDefault();
                this.props.onChangePage(); // 함수 호출
              }.bind(this)}
            >
              {this.props.title}
            </a>
          </h1>
          {this.props.sub}
        </div>
      </div>
    );
  }
}

export default Subject;
