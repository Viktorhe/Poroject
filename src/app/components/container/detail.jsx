import React from 'react';

class Detail extends React.Component {
    // eslint-disable-next-line
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div className="detail">
                <div className="info">
                    <div className="eventDate">
                        <b>{this.props.eventDate}</b>
                    </div>
                    <hr/>
                    <div className="eventTitle">
                        <b>#{this.props.id} {this.props.title}</b>
                    </div>
                    <div className="eventTitle">
                        <br/>
                    </div>
                    <div className="went">
                        <b>{this.props.went}</b> <font color='gray'>went</font>
                    </div>
                </div>
                <div className="separator">
                    <br/>
                </div>
                <div className="view">
                    <button className="viewButton" onClick={() => alert('View Detail')} >View</button>
                </div>
            </div>
      );
  }
}

export default Detail;
