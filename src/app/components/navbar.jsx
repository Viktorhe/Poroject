import React from 'react';

class NavBar extends React.Component{
//   constructor(props) {
//       super(props)
//   }
  render(){
    return (
      <div className="navbar">
        <nav className="appName">
            <button className="transButton" onClick={() => window.location.reload()}><b>{this.props.appName}</b></button>
        </nav>
        <nav className="link">
            <button className="transButton" onClick={() => alert(this.props.link1)}>{this.props.link1}</button>
        </nav>
        <nav className="link">
            <button className="transButton" onClick={() => alert(this.props.link2)}>{this.props.link2}</button>
        </nav>
        <nav className="link">
            &nbsp;
        </nav>
        <nav className="link">
            &nbsp;
        </nav>
        <nav className="link">
            &nbsp;
        </nav>
        <nav className="link">
            &nbsp;
        </nav>
        <nav className="link">
            &nbsp;
        </nav>
        <nav className="link">
            &nbsp;
        </nav>
        <nav className="link">
            &nbsp;
        </nav>
        <nav className="link">
            &nbsp;
        </nav>
        <nav className="link">
            &nbsp;
        </nav>
        <nav className="link">
            &nbsp;
        </nav>
        <nav className="link">
            &nbsp;
        </nav>
        <nav className="link">
            &nbsp;
        </nav>
        <nav className="link">
            &nbsp;
        </nav>
        <nav className="link">
            <button className="transButton" onClick={() => alert(this.props.link3)}>{this.props.link3}</button>
        </nav>
      </div>
    );
  }
}

export default NavBar;
