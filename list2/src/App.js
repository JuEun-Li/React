import React, { Component } from 'react';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { count: 0};
    }

    increase() {
        let i = this.state.count; // 상태 멤버 변수 값 읽기
        this.setState({count: i + 1}); // 상태 멤버 변수 값 변경
    }

    decrease() {
        let i = this.state.count;
        this.setState({count: i - 1});
    }
    render() {
        return (
            <div>
                <h1>count: {this.state.count} </h1>
                <button type="button" onClick={this.increase.bind(this) }>++</button>
                <button type="button" onClick={this.decrease.bind(this) }>--</button>
            </div>
        );
    }
}

export default App;