import React from 'react';
// import '../../App.css';
import logo from '../../logo.svg';

class Header extends React.Component {
  // constructor(props) {
  //   super(props)
  // }
  render(){
    return (
      <div className="header">
        <div className="headerLogo width-20">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <div className="flex-column-space min-width-200px width-30">
          <div className="flex-row-space">
            <h2><b>{this.props.meetupName}</b></h2>
          </div>
          <div className="flex-row-space">
            <div className="text-left width-40">Location</div>
            <div className="text-left width-60">{this.props.location}</div>
          </div>
          <div className="separator">
            &nbsp;
          </div>
          <div className="flex-row-space">
            <div className="text-left width-40">Members</div>
            <div className="text-left width-60">{this.props.members}</div>
          </div>
          <div className="separator">
            &nbsp;
          </div>
          <div className="flex-row-space">
            <div className="text-left width-40">Organizers</div>
            <div className="text-left width-60">{this.props.organizers}</div>
          </div>
          <div className="separator">
            &nbsp;
          </div>
          <div className="flex-row-space">
            <button className="joinButton" onClick={() => alert("Join Us")}>Join Us</button>
          </div>
        </div>
        <div className="">
          &nbsp;
        </div>
        <div className="">
          &nbsp;
        </div>
      </div>
    );
  }
}

export default Header;
