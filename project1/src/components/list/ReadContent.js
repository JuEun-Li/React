import React, { Component } from 'react';
// 현재 상태(props) 업데이트 영역

class ReadContent extends Component {
    render() {
        return (
            <div>
                <h3>{this.props.title}</h3>
                {this.props.sub}
            </div>
        );
    }
}

export default ReadContent;