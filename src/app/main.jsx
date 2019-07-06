import React from 'react';
import Navbar from './components/navbar';
import Header from './components/header';
// import About from './components/container/about';
// import Member from './components/container/member';
// import List from './components/container/lists';
import Footer from './components/footer';
import Container from './components/container/container';

class Main extends React.Component{
  // constructor(props) {
  //   super(props)
  // }
  render(){
    
  return (
    <div className="Main">
        <Navbar appName="QTemu" link1="Create Meetup" link2 = "Explore" link3="Login" />
        <Header meetupName="Hactiv8 Meetup" location="Jakarta, Indonesia" members="1,078" 
          organizers="Adhy Wiranata"/>
        <Container name="nextMeetup" title="Next Meetup" />
        <Container name="aboutMeetup" title="About Meetup" />
        <Container name="memberMeetup" title="Members" haveDetail="true" />
        <Container name="listMeetup" title="Past Meetups" haveDetail="true" />
        <Footer />
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
  }
}

export default Main;
