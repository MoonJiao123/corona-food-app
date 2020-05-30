import React from 'react';

class Status extends React.Component{

  render(){
    return(
      <div id="status" className={this.props.status}>
        <h1>{this.props.message}</h1>
      </div>
    );
  }

}
export default Status;