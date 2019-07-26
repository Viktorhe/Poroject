import React from 'react';
import Detail from './detail';

class List extends React.Component {
  constructor(props){
    super(props);
    this._showdetail = this.props.showDetail ? this.props.showDetail : false
    this.state = {
      showDetail: this._showdetail,
      data : this.props.dataMeetups
    }
  }
  createDetail = () =>{

  }
  render(){
      // return (
      //   <div className="listMeetup">
      //       // <Detail eventDate={this._data[0].eventDate} id={this._data[0].id} title={this._data[0].title}  went={this._data[0].went} />
      //       // <Detail eventDate={this._data[1].eventDate} id={this._data[1].id} title={this._data[1].title}  went={this._data[1].went} />
      //       // <Detail eventDate={this._data[2].eventDate} id={this._data[2].id} title={this._data[2].title}  went={this._data[2].went} />
      //   </div>
      // );
      return (
        <div className="listMeetup">
            <Detail showDetail={this.state.showDetail} data={this.state.data} />
        </div>
      );
  }
}

export default List;
