import React, { Component } from 'react';

class Subject extends Component {
    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                {this.props.sub}
    
                <h1>{this.props.title2}</h1>
                {this.props.sub2}
                {/* state로 받아온 값을 또 다시 props로 받아옴. */}
            </div>
        );
    }
}

export default Subject;