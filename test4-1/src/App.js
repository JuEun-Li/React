import React, { Component } from 'react';

import Subject from './Components/Subject';
import TOC from './Components/TOC';
import Content from "./Components/Content";

class App extends Component {
    constructor(props) {
        super(props);
        this.state= {
            mode:'read',
            selected_content_id:2,
            subject:{title:'WEB' ,sub: "world wide web!"},
            welcome:{title:'welcome', desc:'hello react!'},
            contents:[
                {id: 1, title:'HTML', desc:'html is hypertext..'},
                {id: 2, title:'CSS', desc:'CSS is for design'},
                {id: 3, title:'JS', desc:'JS is for interactive'},
            ]
        }
    }
    render() {
        let _title,_desc = null;

        if(this.state.mode === 'welcome') {
            _title = this.state.welcome.title;
            _desc = this.state.welcome.desc;
        }
        else if(this.state.mode === 'read') {
            for(let i = 0; i <this.state.contents.length; i++) {
                let data = this.state.contents[i];
                if(data.id === this.state.selected_content_id) {
                    _title = data.title;
                    _desc = data.desc;
                    break;
                }
            } 
        }
        return (
            <div>
                <Subject 
                title= {this.state.subject.title}
                sub={this.state.subject.sub}
                onChangePage={function(){
                    this.setState({
                        mode: 'welcome'
                    });
                }.bind(this)}
                >
                </Subject>
                <TOC 
                    onChangePage={function() {
                        this.setState({mode: 'read'});
                    }.bind(this)}
                    data={this.state.contents}>
            
                </TOC>
                <Content title={_title} sub={_desc}></Content>
            </div>
        );
    }
}

export default App;