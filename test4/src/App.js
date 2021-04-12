import React, { Component } from 'react';
import TOC from './Components/TOC';
import Subject from './Components/Subject';
import ReadContent from './Components/ReadContent';
import Control from './Components/Control';
import CreateContent from './Components/CreateContent';

class App extends Component {
  constructor(props) {
    super(props);
    this.state= {
      mode:'read',
      selected_content_id:2,
      subject: {title: "WEB", sub:'world wide web!'},
      welcome:{title:'welcome', desc:'hello react!'},
      contents: [
        {id: 1, title: 'html', desc:'html is hyper..'},
        {id: 2, title: 'css', desc:'css for design'},
        {id: 3, title: 'js', desc:'js for interactive'}
      ]
    }
  }
  render() {
    let _title, _desc, _article = null;
    if(this.state.mode === 'welcome') {
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
      _article = <ReadContent title={_title} desc={_desc}></ReadContent>
    } // welcome 일 때 내용 변경
    else if(this.state.mode === 'read') {
      let i = 0;
      // for(let i = 0; i < this.state.contents.length; i++){
        while(i < this.state.contents.length) {
        let data = this.state.contents[i];
        if(data.id === this.state.selected_content_id){
          _title = data.title; // data = contents[i]
          _desc = data.desc;
          break;
        } // 선택 된 값에 따라 내용 변경
        i = i + 1;
      }
      _article = <ReadContent title={_title} desc={_desc}></ReadContent>
    }
    else if(this.state.mode === 'create') {
      _article = <CreateContent></CreateContent>
    }
    return (
      <div className="App">
        <Subject 
          title={this.state.subject.title}
          sub={this.state.subject.sub}
          onChangePage= {function(){
            this.setState({mode: 'welcome'});
          }.bind(this)} // 함수로 정의(클릭시 모드를 welcome으로 변경)
          >
        </Subject>
        <TOC 
          onChangePage={function(id){

            this.setState({
              mode:'read',
              selected_content_id:Number(id) // id값은 문자로 들어오게 된다. 강제 형변환 필요
            });
          }.bind(this)}
          data={this.state.contents}>
        </TOC>
        <Control onChangeMode={function(_mode){
          this.setState({
            mode:_mode // 파라미터 _mode에 현재 mode값을 넣는다.
          });
        }.bind(this)}></Control>
        
        { _article }
      </div>
    );
  }
}

export default App;