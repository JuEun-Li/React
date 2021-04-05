import React, { Component } from 'react';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            content: { title:"hello", sub: "nice to meet you"},
            content_list: [
                {id: 1, title:"list1", desc: "list 입니다."},
                {id: 2, title:"list2", desc: "list 입니다."},
                {id: 3, title:"list2", desc: "list 입니다."}
            ]
        };
    }
    render() {
        let data = null;
        let _title, _desc = null;

        for(let i = 0; i < this.state.content_list.length; i++) {
            data = this.state.content_list[i];
            if(data.id === this.state.selected_content_id) {
                _title = data.title;
                _desc = data.desc;
                break;
            }
        }
        _title = this.state.content_list[0].title;
        _desc = this.state.content_list[0].desc;
      return (
          <div>
            <h1>첫 페이지 입니다</h1>
                <ul>
                    <li>{this.state.content.title}</li>
                    <li>{this.state.content.sub}</li>
                    <li>{this.props.data}</li>
                </ul>
                
          </div>
      );
    }
  }
export default Home;