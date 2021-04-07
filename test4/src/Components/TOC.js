import React, { Component } from 'react';

class TOC extends Component {
    render() {
        let lists = [];
        let data = this.props.data;
        for(let i = 0; i < data.length; i++){
            lists.push(
            <li key={data[i].id}>
              <a
                href={"/content/" + data[i].id}
                data-id={data[i].id}
                onClick={function(e){
                  this.props.onChangePage(e.target.dataset.id);
                  e.preventDefault();
                }.bind(this)}
              >
              {data[i].title}
              {/* 배열로 이루어진 data(contents)의 내용을 반복문을 통해 출력.*/}
              </a>
            </li>)
        }
      return (
        <nav>
            <ul>
                {lists}
            </ul>
        </nav>
      );
    }
  }

export default TOC;