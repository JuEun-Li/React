import React, { Component } from 'react';

class Content extends Component {
    render() {
        return (
            <div>
                <h3>{this.props.title}</h3>
                {this.props.sub}
            </div>
        );
    }
}

export default Content;