import React, { Component } from "react";
import Subject from "./components/Subject";
import TOC from "./components/TOC";
import Content from "./components/Content";

class App extends Component {
    // 생성자 constructor
  constructor(props) {
    //render()보다 더 먼저 실행되어 컴포넌트 초기화, 상위 컴포넌트에서 하위로 전송
    super(props);
    //this.state = {} 기본 문법
    this.state = {
      mode: "read",
      selected_content_id:2,
      welcome: { title: "welcome", desc: "Hello react!" },
      subject: { title: "WEB", sub: "world wid web!" },
      contents: [
        { id: 1, title: "html", desc: "html is hypertext.." },
        { id: 2, title: "css", desc: "css is for design" },
        { id: 3, title: "js", desc: "js is for interactive" },
      ],
    };
  }
  render() {
    let _title,
      _desc = null;

    if (this.state.mode === "welcome") {
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
    } else if (this.state.mode === "read") {
        let i = 0;
        while(i < this.state.contents.length){
            let data = this.state.contents[i];
            if(data.id === this.state.selected_content_id) {
                _title = data.title;
                _desc = data.desc;
                break;
            }
            i = i + 1;
        }
      _title = this.state.contents[0].title;
      _desc = this.state.contents[0].desc;
    }
    return (
      <div>
        <Subject
          title={this.state.subject.title}
          sub={this.state.subject.title}
          onChangePage={function() {
              this.setState({mode:'welcome'});
            alert('hihihi');
          }.bind(this)}
        ></Subject>

        {/* <div>
          <h2>
            <a
              href="/"
              onClick={function (e) {
                e.preventDefault();
                //this.state.mode = 'n'으로는 수정 불가
                alert("hi");
                this.setState({
                    mode:'welcome'
                }); 
              }.bind(this)}
            >
              {this.state.subject.title}
            </a>

          </h2>
          {this.state.subject.title}
        </div> */}
        <TOC 
            onChangePage={function(id) {
                this.setState({
                    mode:'read',
                    selected_content_id: Number(id) // number()로 씌어주지 않으면 id값이 문자열로 처리된다.
                });
            }.bind(this)}
             data={this.state.contents}>
        </TOC>

        <Content title={_title} desc={_desc}></Content>
      </div>
    );
  }
}

export default App;
