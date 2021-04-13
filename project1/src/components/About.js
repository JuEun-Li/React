import React, { Component } from 'react';
import './css/about.css';
import { Button } from 'reactstrap';
import Control from './list/Control';
import ReadContent from './list/ReadContent';
import CreateContent from './list/CreateContent';

class About extends Component {
  constructor(props){
    super(props);
    this.max_content_id = 3;

    this.state={
      mode: 'read',
      selected_content_id: 2,
      subject:{title:'WEB' ,sub: "world wide web!"},
      welcome: {title:'Welcome', desc: 'hello react!'},
      content: [
        {id: 1, title: "aaa", desc:"aaa입니다."},
        {id: 2, title: "bbb", desc:"bbb입니다."},
        {id: 3, title: "ccc", desc:"ccc입니다."},
      ]
      }
    }

    ChangePage() {
      this.setState({
        mode :'welcome'
      })
    }
    render() {
      let _title, _desc, _article = null;

      if(this.state.mode === 'welcome') {
        _title = this.state.welcome.title;
        _desc = this.state.welcome.desc;
        _article = <ReadContent title={_title} sub={_desc}></ReadContent>
      }

      else if (this.state.mode === 'read') {
        for(let i = 0; i < this.state.content.length; i++) {
          let data = this.state.content[i];
          if(data.id === this.state.selected_content_id) {
            _title = data.title;
            _desc = data.desc;
            break;
          }
        }
        _article = <ReadContent title={_title} sub={_desc}></ReadContent>
      }
      
      else if (this.state.mode === 'create') {
        _article = <CreateContent onSubmit={function(_title, _desc){
        console.log(_title, _desc);
        this.max_content_id = this.max_content_id + 1;

        let _contents = this.state.contents.concat(
          {id: this.max_content_id, title:_title, desc:_desc}
        )
        this.setState({
          contents:_contents
        })
      }.bind(this)}></CreateContent>
    }
      return (
        <div className="container">
        <div className="top-bar rounded">
        <div>this is..</div>
        </div>
        
        <Button type="button" className="btn-shape"
          onClick={this.ChangePage.bind(this)}
        >button1</Button><br/>
        {_title}<br/>
        {_desc}
       <br/>

        <Button type="button" className="btn-shape"
          onClick={this.ChangePage.bind(this)}
        >button2</Button><br/>
        {_title}<br/>
        {_desc}
        <br/>

        <Button type="button" className="btn-shape"
          onClick={this.ChangePage.bind(this)}
        >button3</Button><br/>
        {_title}<br/>
        {_desc}
        <br/>

        <Control onChangeMode={function(_mode) {
          this.setState({
            mode: _mode // 클릭 시 해당모드가 _mode에 담긴다. 그 것을 mode에 담아 업데이트.
          })
        }.bind(this)}></Control>

        {_article}
        </div>
      );
    }
  }

export default About;