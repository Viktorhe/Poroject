import React from 'react';
import Avatar from '../../../myAvatar.svg';

class Member extends React.Component {
  // constructor(props){
  //   super(props)

  // }
  render(){
    return (
      <div className="memberMeetup">
        <div>
        <img src={Avatar} className="avatar" alt="avatar" />
        </div>
        <div className="aboutMeetup">
          Organizers<br/><br/>
          Adhy Wiranata&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4 others.
        </div>
      </div>
    );
  }
}

export default Member;
