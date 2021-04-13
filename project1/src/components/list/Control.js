import React, { Component } from "react";
// 생성, 수정, 삭제 링크 구현 - 클릭시 모드가 변경 된다.

class Control extends Component {
  render() {
    return (
      <div>
        <ul>
          <li>
            <a href="/create" onClick={function(e) {
                e.preventDefault();
                this.props.onChangeMode('create');
            }.bind(this)}>create</a>
          </li>
          <li>
            <a href="/update" onClick={function(e) {
                e.preventDefault();
                this.props.onChangeMode('update');
            }.bind(this)}>update</a>
          </li>
          <li>
            <input type="button" value="delete" onClick={function(e) {
                e.preventDefault();
                this.props.onChangeMode('delete');
            }.bind(this)}></input>
          </li>
        </ul>
      </div>
    );
  }
}

export default Control;
