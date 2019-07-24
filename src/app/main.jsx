import React from 'react';
import Axios from 'axios';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Navbar from './components/navbar';
import Header from './components/header';
// import About from './components/container/about';
// import Member from './components/container/member';
// import List from './components/container/lists';
import Footer from './components/footer';
import Container from './components/container/container';

class Main extends React.Component{
  constructor(props) {
    super(props)
    // const displayHome = this.displayHome
    // const displayNavBar = this.displayNavBar
    // const displayHeader = this.displayHeader
    // const displayLists = this.displayLists
    // const displayMembers = this.displayMembers
    // const displayAbout = this.displayAbout
  }

  componentWillMount(){
    this.fetching()
    console.log("Will mount");
    
  }
  componentDidMount(){
    console.log("did mount");
  }
  fetching(){
    let opt = {
      method:'get',
      url:'https://jsonplaceholder.typicode.com/posts'

    }
    let request = Axios(opt)
    .then (({data}) => {
      console.log(data);
    })
    .catch(error => {
      console.error(error);
    })
  }

  displayNavBar = () => {
    return(
      <Navbar appName="QTemu" 
      link1="Create Meetup" 
      link2="Explore" 
      link3="Member" 
      link4="About" 
      link5="Login" />
    );
  }
  displayHeader = () => {
    return(
      <Header meetupName="Hactiv8 Meetup" location="Jakarta, Indonesia" members="1,078" 
      organizers="Adhy Wiranata"/>
    )
  }
  displayContainer(name, title, haveDetail){
    if(haveDetail){
      return(
        <Container name={name} title={title} haveDetail={haveDetail}/>
      )
    }else{
      return(
        <Container name={name} title={title} />
      )
    }
  }
  displayHome = () => {
    return(
      <Container name="nextMeetup" title="Next Meetup" />
    )
  }
  displayLists = () => {
    return(
      <Container name="listMeetup" title="Past Meetups" haveDetail="true" />
    )
  }
  displayMembers = () => {
    return(
      <Container name="memberMeetup" title="Members" haveDetail="true" />
    )
  }
  displayAbout = () => {
    return(
      <Container name="aboutMeetup" title="About Meetup" />
    )
  }

  render(){
    
  return (
    <Router>
    <div className="Main">
      <Navbar appName="QTemu" 
        link1="Create Meetup" 
        link2="Explore" 
        link3="Member" 
        link4="About" 
        link5="Login" />
      <Header meetupName="Hactiv8 Meetup" location="Jakarta, Indonesia" members="1,078" 
      organizers="Adhy Wiranata"/>
          <Route exact path="/" component={this.displayHome} />
          <Route path="/explore" component={this.displayLists} />
          <Route path="/member" component={this.displayMembers} />
          <Route path="/about" component={this.displayAbout} />
        {/* <Container name="nextMeetup" title="Next Meetup" />
        <Container name="aboutMeetup" title="About Meetup" />
        <Container name="memberMeetup" title="Members" haveDetail="true" />
        <Container name="listMeetup" title="Past Meetups" haveDetail="true" /> */}
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
    </Router>
  );
  }
}

export default Main;
