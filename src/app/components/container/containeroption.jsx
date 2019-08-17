import React from 'react';
class ContainerOption extends React.Component{
  // eslint-disable-next-line
  constructor(props) {
    super(props)
  }
  render(){
    // eslint-disable-next-line
    if(this.props.haveDetail == true && this.props.showDetail == false)
      return(
        <button className="transButton" onClick={() => this.props.setShowDetail(true)}>See all</button>
      )
    else
      return (
        <div>&nbsp;</div>
      )
  }
}
export default ContainerOption;