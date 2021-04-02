import React, { Component } from 'react';

class Subject extends Component {
    // class안의 함수는 function() 생략
    render() {
        return (
            <div>
                <h2><a href="/" onClick={function(e) {
                    e.preventDefault();
                    this.props.onChangePage();
                }.bind(this)}>{this.props.title}</a></h2>
                {this.props.sub}
            </div>
        );
    }
}

export default Subject;