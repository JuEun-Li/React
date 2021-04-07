import React, { Component } from 'react';
import './css/home.css'
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            content: { title:"hello", sub: "nice to meet you"},
            content_list: [
                {id: 1, title:"list1", desc: "list 입니다."},
                {id: 2, title:"list2", desc: "list 입니다."},
                {id: 3, title:"list2", desc: "list 입니다."}
            ],
            count1: 0,
            count2: 0,
            count3: 0,
        };
    }

    increase1() {
        let i = this.state.count1;
        this.setState({
            count1 : i + 1
        })
    }
    decrease1() {
        let i = this.state.count1;
        this.setState({
            count1 : i - 1
        })
        if( i === 0) {
            this.setState({
                count1: 0 // 0 아래로 값을 내리지는 못함
            })
        }
    }

    increase2() {
        let i = this.state.count2;
        this.setState({
            count2 : i + 1
        })
    }
    decrease2() {
        let i = this.state.count2;
        this.setState({
            count2 : i - 1
        })
        if( i === 0) {
            this.setState({
                count2: 0 // 0 아래로 값을 내리지는 못함
            })
        }
    }

    increase3() {
        let i = this.state.count3;
        this.setState({
            count3 : i + 1
        })
    }
    decrease3() {
        let i = this.state.count3;
        this.setState({
            count3 : i - 1
        })
        if( i === 0) {
            this.setState({
                count3: 0 // 0 아래로 값을 내리지는 못함
            })
        }
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
          <div className="container">
            <h1>page1</h1>
                <ul>
                    <li>{this.state.content.title}</li>
                    <li>{this.state.content.sub}</li>
                    <li>{this.props.data}</li>
                </ul>
            <div>
                <div>
                    <div className="box-display">
                        <div className="box col-lg-4">box1</div><br/>
                        {this.state.count1}<br/>

                        <button type="button" onClick={this.increase1.bind(this)}>++
                        </button>

                        <button type="button" onClick={this.decrease1.bind(this)}>--</button><br/>          
                    </div>

                    <div className="box-display">
                        <div className="box col-lg-4">box2</div><br/>
                        {this.state.count2}<br/>
                        <button type="button" onClick={this.increase2.bind(this)}>++</button>
                        <button type="button" onClick={this.decrease2.bind(this)}>--</button><br/>
                    </div>  

                    <div className="box-display">
                        <div className="box col-lg-4">box3</div><br/>
                        {this.state.count3}<br/>
                        <button type="button" onClick={this.increase3.bind(this)}>++</button>
                        <button type="button" onClick={this.decrease3.bind(this)}>--</button><br/>
                    </div>
                </div> 
            </div>    
          </div>
      );
    }
  }
export default Home;