import React, { Component } from 'react';
import {connect} from 'react-redux';

class Panel extends Component {
  render() {
    let panelStyle = {
      // width:"40%",
      height:"890px",
      flex:"0 0 auto",
      // display:"inline-block",
      boxShadow:" -1px -1px 10px #999",
      marginLeft:"5px",
      // position:"relative",
      // animationName: "move",
      // animationTimingFunction: 'ease-in-out',
      // animationDuration: '0.6s',
      // animationDelay: '0.0s',
      // animationIterationCount: 1,
      // animationDirection: 'normal',
      // animationFillMode: 'forwards'
    }

    let headerStyle = {
      color:"#5BC2D8",
      backgroundColor:"#D9EDF8",
      borderColor:"#ddd",
      padding:"10px 0px"
    }
    return (
      <div style={panelStyle}>
        <div style={headerStyle}>
          {this.props.title}
        </div>
        {this.props.children}
      </div>
    )
  }
}
function mapStateToProps(state, props) {
  return {
    panelList:state.panel
  };
}

export default connect(mapStateToProps)(Panel);
