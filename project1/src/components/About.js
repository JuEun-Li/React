import React, { Component } from 'react';
import './css/about.css';
import { Button } from 'reactstrap';

class About extends Component {
  constructor(props){
    super(props);
    this.state={
      mode: 'read',
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
      let data = this.state.content;
      let lists = [];

      for(let i = 0; i < data.length; i++) {
        lists.push(data[i].desc);
      }
      // if(this.mode === 'welcome') {
      //   for(let i = 0; i < data.length; i++) {
      //     this.setState({
      //       lists
      //     })
      //   }
      // }

      return (
        <div className="container">
        <div className="top-bar rounded">
        <h3>This is About</h3>
        </div>

        {this.props.title}
        {this.props.desc}
        
        <Button type="button" className="btn-shape"
          onClick={this.ChangePage.bind(this)}
        >button1</Button>
        <div>{lists[0]}</div><br/>

        <Button type="button" className="btn-shape"
          onClick={this.ChangePage.bind(this)}
        >button2</Button>
        <div>{lists[1]}</div><br/>

        <Button type="button" className="btn-shape"
          onClick={this.ChangePage.bind(this)}
        >button3</Button>
          <div>{lists[2]}</div><br/>

          <ul>
            <li><a href="/create">create</a></li>
            <li><a href="/update">update</a></li>
            <li><input type="button" value="delete"></input></li>
          </ul>
        </div>
      );
    }
  }

export default About;