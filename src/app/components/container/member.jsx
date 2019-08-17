import React from 'react';
import Avatar from '../../../myAvatar.svg';

class Member extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      showDetail : false,
      data_member: [...this.props.dataMembers]
    }
  }
  componentDidMount(){
    this.setState({
      showDetail : this.props.showDetail
    })
  }

  render(){
    if(this.state.data_member.length === 0){
      return (
        <div className="memberMeetup">
          <div>
          <img src={Avatar} className="avatar" alt="avatar" />
          </div>
          <div className="aboutMeetup">
          </div>
        </div>
      );
    }
    else{
      if(this.state.showDetail){
        let json_data = [...this.state.data_member]
        json_data.map( (item, idx) => {
          return(
            <div key={idx} className="memberMeetup">
              <div>
              <img src={Avatar} className="avatar" alt="avatar" />
              </div>
              <div className="aboutMeetup">
                Organizers<br/><br/>
                {item.name}
              </div>
            </div>
          )
        })
      }
      else{
        let json_data = [...this.state.data_member]
        let first = json_data.shift()
        return (
          <div className="memberMeetup">
            <div>
            <img src={Avatar} className="avatar" alt="avatar" />
            </div>
            <div className="aboutMeetup">
              Organizers<br/><br/>
              {first.name}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{json_data.length} others.
            </div>
          </div>
        )
      }
    }
  }
}

export default Member;
