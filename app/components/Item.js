import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import ItemDetail from './ItemDetail.js'

class Item extends Component {
  addItemDetailPanel = (title) => {
    let panel = {title:title,component:ItemDetail,index:this.props.index}
    // this.props.actions.addItemDetailPanel(panel)
  }
  render() {
    return (
      <div>
        item123555
      </div>
    )
  }
}

const actions = {}

const mapStateToProps = (state, props) => {
  return {
    panelList:state.panel
  };
}

export default connect(mapStateToProps, actions)(Item);
