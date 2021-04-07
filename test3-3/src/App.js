import React, { Component } from 'react';

import TOC from './components/TOC';
import Subject from './components/Subject';
import Content from './components/Content';

class App extends Component {
    constructor(props) {
        super(props);
        this.state= {
            subject2:{title2:"subject2", sub2:"subject2 입니다."},
            contents:[
                {id: 1, title:'html', desc:'html is hypertext...'},
                {id: 2, title:'css', desc:'css is for design'},
                {id: 3, title:'js', desc:'js is for interactive'},
            ]
        }
    }
    render() {
        return (
            <div>
                <Subject title="web" sub="world wide web"></Subject>
                <Subject
                    title2={this.state.subject2.title2}
                    sub2={this.state.subject2.sub2} // state에서 받아온 값
                ></Subject>
                  <TOC data={this.state.contents}></TOC>
                <Content></Content>
            </div>
        );
    }
}

export default App;