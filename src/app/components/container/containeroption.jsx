import React from 'react';
class ContainerOption extends React.Component{
  // constructor(props) {
  //   super(props)
  // }
  render(){
    // eslint-disable-next-line
    if(this.props.haveDetail == "true")
      return(
        <button className="transButton" onClick={() => alert('See Detail')}>See all</button>
      )
    else
      return (
        <div>&nbsp;</div>
      )
  }
}
export default ContainerOption;