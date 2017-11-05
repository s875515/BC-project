import { Tabs, Button } from 'antd';
const TabPane = Tabs.TabPane;
import React, { Component } from 'react';
import {connect} from 'react-redux';

class Laybel extends React.Component {
  render() {
    let panelContainerStyle = {
      margin: '0',
    	padding: '0',
    	float: 'left',
    	listStyle: 'none',
    	height: '32px',
    	borderBottom: '1px solid #333',
    	width: '100%',
    }
    let panelStyle = {
      float: "left",
    	marginLeft: "5px",
    	cursor: "pointer",
    	padding: "0px 21px",
    	height: "31px",
    	lineHeight: "31px",
    	borderTop: "1px solid #333",
    	borderLeft: "1px solid #333",
      borderRight: "1px solid #333",
    	borderBottom: "none",
      borderRadius: '5px',
    	// backgroundColor: "#666",
    	// color: "#ccc",
    	overflow: "hidden",
    	position: "relative"
    }
    return(
      <div style={panelContainerStyle}>
        {
          this.props.panelList.map((panel,index) =>{
            return(
              <li style={panelStyle} key={index}>{panel.title}</li>
            )
          })
        }
      </div>
    )
  }
}

function mapStateToProps(state, props) {
  return {
    panelList: state.panelList
  };
}

export default connect(mapStateToProps)(Laybel);;
