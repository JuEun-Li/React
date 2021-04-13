import React, { Component } from 'react';

import Subject from './Components/Subject';
import TOC from './Components/TOC';
import Control from './Components/Control';
import ReadContent from './Components/ReadContent';
import CreateContent from './Components/CreateContent';

class App extends Component {
    constructor(props) {
        super(props);
        this.max_content_id = 3; // contents 의 키값을 증가시키기 위한 변수. state값 아님.앞으로 계속 바뀔 수 있기 때문.
        this.state= {
            mode:'create',
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
        let _title,_desc, _article = null;

        if(this.state.mode === 'welcome') {
            _title = this.state.welcome.title;
            _desc = this.state.welcome.desc;
            _article = <ReadContent title={_title} sub={_desc}></ReadContent>
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
            _article = <ReadContent title={_title} sub={_desc}></ReadContent>
        }

        else if(this.state.mode === 'create') {
            _article = <CreateContent onSubmit={function(_title, _desc) {
                // 여기서 content 값 추가하기
                console.log(_title, _desc);
                this.max_content_id = this.max_content_id + 1;
                // content 값이 추가될 때 max content id 값 1 증가, 기존 배열에 하나 더 추가.
                
                let _contents = this.state.contents.concat(
                    {id:this.max_content_id, title:_title, desc:_desc}
                ) 
                // concat: 원본 배열을 변경하지 않은채 새로운 배열을 리턴한다. -> 상태관리에 용이 
                this.setState({
                    contents:_contents 
                    // contents(기존 배열)에 새로운 배열을 넣어준다.(기존 배열이 갱신된다.)
                })
            }.bind(this)}></CreateContent> // create 모드일 때 CreateContent의 내용이 출력됨
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
                    onChangePage={function(id) {
                        this.setState({
                            mode: 'read',
                            selected_content_id: Number(id)
                        });
                    }.bind(this)}
                    data={this.state.contents}>
            
                </TOC>
                <Control onChangeMode={function(_mode){
                    this.setState({
                        mode:_mode // mode를 파라미터 _mode값으로 변경 
                    });
                }.bind(this)}></Control>
                
                {_article}
            </div>
        );
    }
}

export default App;