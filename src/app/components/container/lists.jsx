import React from 'react';
import Detail from './detail';

class List extends React.Component {
  constructor(props){
    super(props);
    this._data = [
      {
        eventDate:"27 November 2017",
        id:39,
        title:"JakartaJS April Meetup with kumparan",
        went:139
      },
      {
        eventDate:"27 Oktober 2017",
        id:38,
        title:"JakartaJS April Meetup with    Blibli",
        went:113

      },
      {
        eventDate:"27 September 2017",
        id:37,
        title:"JakartaJS April Meetup with Hacktiv8",
        went:110

      }
    ];
  }
  createDetail = () =>{

  }
  render(){
      return (
        <div className="listMeetup">
            <Detail eventDate={this._data[0].eventDate} id={this._data[0].id} title={this._data[0].title}  went={this._data[0].went} />
            <Detail eventDate={this._data[1].eventDate} id={this._data[1].id} title={this._data[1].title}  went={this._data[1].went} />
            <Detail eventDate={this._data[2].eventDate} id={this._data[2].id} title={this._data[2].title}  went={this._data[2].went} />
        </div>
      );
  }
}

export default List;
