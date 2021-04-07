import React, { Component } from 'react';
import TOC from './Components/TOC';
import Subject from './Components/Subject';
import Content from './Components/Content';

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
    let _title, _desc = null;
    if(this.state.mode === 'welcome') {
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
    } // welcome 일 때 내용 변경
    else if(this.state.mode === 'read') {
      let i = 0;
      // for(let i = 0; i < this.state.contents.length; i++){
        while(i < this.state.contents.length) {
        let data = this.state.contents[i];
        if(data.id === this.state.selected_content_id){
          _title = data.title;
          _desc = data.desc;
          break;
        } // 선택 된 값에 따라 내용 변경
        i = i + 1;
      }

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
              selected_content_id:Number(id)
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