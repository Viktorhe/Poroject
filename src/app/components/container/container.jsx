import React from 'react';
import ContainerOption from './containeroption';
import Content from './content';

class Container extends React.Component{
  // eslint-disable-next-line
  constructor(props) {
    super(props)
  }
  render(){
    return (
      <div className="container">
          <div className="containerBar">
            <div className="containerTitle">
              <h2>{this.props.title}</h2>
            </div>
            <div className="containerOption">
              <ContainerOption haveDetail={this.props.haveDetail}/>
            </div>
          </div>
            <Content name={this.props.name}/>
      </div>
    )
  }
}

export default Container;
