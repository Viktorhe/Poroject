import React from 'react';

import ContainerOption from './containeroption';
import Content from './content';

class Container extends React.Component{
  // eslint-disable-next-line
  constructor({name,title,haveDetail,dataMeetups,dataMembers}) {
    super()
    this.state ={
      showDetail : false,
      name:name,
      title:title,
      haveDetail:haveDetail,
      dataMembers:dataMembers,
      dataMeetups:dataMeetups
    }
  }
  
  render(){
    return (
      <div className="container">
          <div className="containerBar">
            <div className="containerTitle">
              <h2>{this.state._title}</h2>
            </div>
            <div className="containerOption">
              <ContainerOption haveDetail={this.state.haveDetail} showDetail={this.state.showDetail} setShowDetail={(e) => this.setState({showDetail : e})} />
            </div>
          </div>
            <Content name={this.state.name} showDetail={this.state.showDetail} dataMembers={this.state.dataMembers} dataMeetups={this.state.dataMeetups} />
      </div>
    )
  }
}

export default Container;
