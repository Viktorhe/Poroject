import React from 'react';
import Next from './next';
import About from './about';
import Member from './member';
import List from './lists';

class Content extends React.Component {
  constructor(props) {
    super(props)
    this._name = this.props.name;
  }
  render(){
    // eslint-disable-next-line
    if(this._name == "nextMeetup"){
      return(
        <Next/>
      )
    }
    // eslint-disable-next-line
    else if(this._name == "aboutMeetup"){
      return(
        <About/>
      )
    }
    // eslint-disable-next-line
    else if(this._name == "memberMeetup"){
      return(
        <Member showDetail={this.props.showDetail} dataMembers={this.props.dataMembers} />
      )
    }
    else{
      return(
        <List showDetail={this.props.showDetail} dataMeetups={this.props.dataMeetups} />
      )
    }
  }
}

export default Content;
