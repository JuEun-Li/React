import React, { Component } from "react";
import TOC from "./components/TOC";
import Subject from "./components/Subject";
import ReadContent from "./components/ReadContent";
import CreateContent from "./components/CreateContent";
import Control from "./components/Control";

class App extends Component {
  constructor(props) {
    super(props);
    this.max_content_id = 3; // 데이터를 추가할 때 id값이 바뀌어야 함.
    this.state = {
        mode:'create',
        selected_content_id:2,
        subject: {title:'WEB', sub:'world wide web!!'},
        welcome: {title: 'welcome', desc:"hello react!"},
        contents: [
            {id: 1, title:'HTML', desc:'HTML is Hypertext...'},
            {id: 2, title:'CSS', desc:'CSS is for design...'},
            {id: 3, title:'JS', desc:'JS is for interactive...'},
        ] // TOC는 목록이다. 속성을 줘야할 값이 여러개 이므로 배열 사용, 단 각 리스트의 항목들은 키값을 가지고 있어야한다.
    } // constructor 내부에서는 위 양식처럼 편하게 데이터들을 정의해줘도 된다.
  }
  render() {
      let _title,_desc,_article=null;

      if(this.state.mode === 'welcome'){
        _title = this.state.welcome.title;
        _desc = this.state.welcome.desc;
        _article = <ReadContent title={_title} desc={_desc}></ReadContent>;
      }      
      else if (this.state.mode === 'read') {
        let i = 0;
        while(i < this.state.contents.length) {
          let data = this.state.contents[i];
          if(data.id === this.state.selected_content_id) {
            _title = data.title;
            _desc = data.desc;
            break;
          }
          i = i + 1;
        }
        _article = <ReadContent title={_title} desc={_desc}></ReadContent>;
      } else if(this.state.mode === 'create') {
        _article = <CreateContent onSubmit={function(_title, _desc) {
          //add content to this.state.contents
          this.max_content_id += 1;
          // this.state.contents.push(
          //   {id:this.max_content_id, title: _title, desc:_desc}
          //   );
          this.state.contents.concat(
            {id:this.max_content_id, title:_title, desc: _desc}
          )
          this.setState({
            contents:this.state.contents
          });
          console.log(_title, _desc);
        }.bind(this)}></CreateContent>
      }
    return (
      <div className="App">
        <Subject
          title={this.state.subject.title}
          sub={this.state.subject.sub}
          onChangePage = {function() {
              this.setState({
                  mode:'welcome'
              }); // mode를 welcome으로 변경하는 매우 간단한 방법..
          }.bind(this)} 
          >
        </Subject>

        <Control onChangeMode={function(_mode) {
          this.setState({
            mode:_mode
          });
        }.bind(this)}>
          
        </Control>

        <TOC 
            onChangePage={function(id) {
            this.setState({
                mode:'read',
                selected_content_id: Number(id)
            });
        }.bind(this)}
        data={this.state.contents}></TOC>
        {/* <ul>
          <li><a href="/create">create</a></li>
          <li><a href="/update">update</a></li>
          <li><input type="button" value="delete"></input></li>
        </ul> */}
        
        {_article}

      </div>
    );
  }
}

export default App;
