import React from 'react';
// import '../../App.css';
import logo from '../../logo.svg';
import image from '../../logo2.png';

class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      date : 0,
      defaultLogo : true,
      currentLogo : logo
    }
  }
  add(){
    let now = this.state.date
    this.setState({
      date : now + 1
    })
  }
  subtract(){
    let now = this.state.date
    if(now > 0){
      this.setState({
        date : now - 1
      })
    }
    else
      alert('Ups')
  }
  displayLogo(){
    let useDefault = this.state.defaultLogo
    let current = this.state.currentLogo
    if(this.state.defaultLogo){
      this.setState({
        defaultLogo : false,
        currentLogo : image
      })
    }
    else{
      this.setState({
        defaultLogo : true,
        currentLogo : logo
      })
    }
  }
  render(){
    return (
      <div className="header">
        <div className="headerLogo width-20" onClick={() => this.displayLogo()}>
          <img src={this.state.currentLogo} className="App-logo" alt="logo" />
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
            {this.state.date}
            <button className="joinButton" onClick={() => alert("Join Us")}>Join Us</button>
            <button onClick={() => this.add()}>Add</button>
            <button onClick={() => this.subtract()}>subtract</button>
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
