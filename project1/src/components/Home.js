import React, { Component } from 'react';
import './css/home.css';
import { Button } from 'reactstrap';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mode:'read',
            content: { title:"sub_title, ", sub: "부가설명입니다."},
            content_list: [
                {id: 1, title:"list1", desc: "list1 입니다."},
                {id: 2, title:"list2", desc: "list2 입니다."},
                {id: 3, title:"list3", desc: "list3 입니다."}
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
    reset() {
        this.setState({
            count1: 0,
            count2: 0,
            count3: 0
        })
    } // 모든 수량 초기화

    render() {
        let lists = [];
        let data = this.state.content_list;
        for(let i = 0; i < data.length; i++){
            lists.push(<li key={data[i].id}>{data[i].title} {data[i].desc}</li>)
        }
      return (
          <div className="container">
            <h1>page1</h1>
                <ul>
                    {lists}
                </ul>

            <div>
                {this.state.content.title} 
                {this.state.content.sub}
            </div>

            <div>
                <div>
                    <div className="box-display">
                        <div className="box col-lg-4 rounded">box1</div><br/>
                        {this.state.count1}<br/>

                        <Button color="success" type="button" onClick={this.increase1.bind(this)}>++
                        </Button>

                        <Button type="button" onClick={this.decrease1.bind(this)}>--</Button><br/>          
                    </div>

                    <div className="box-display">
                        <div className="box col-lg-4 rounded">box2</div><br/>
                        {this.state.count2}<br/>
                        <Button  color="success" type="button" onClick={this.increase2.bind(this)}>++</Button>
                        <Button type="button" onClick={this.decrease2.bind(this)}>--</Button><br/>
                    </div>  

                    <div className="box-display">
                        <div className="box col-lg-4 rounded">box3</div><br/>
                        {this.state.count3}<br/>
                        <Button color="success" type="button" onClick={this.increase3.bind(this)}>++</Button>
                        <Button type="button" onClick={this.decrease3.bind(this)}>--</Button><br/>
                    </div>
                </div> 
            </div>

            총 수량: {this.state.count1 + this.state.count2 + this.state.count3 }   <br/> 
            
            <Button color="info" type="button" onClick={this.reset.bind(this)}>reset</Button>
          </div>
      );
    }
  }
export default Home;