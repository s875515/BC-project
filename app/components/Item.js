import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as PanelActions from '../actions/panel-action.js';
import ItemDetail from './ItemDetail.js'

class Item extends Component {
  addItemDetailPanel = (title) => {
    let panel = {title:title,component:ItemDetail,index:this.props.index}
    this.props.actions.addItemDetailPanel(panel)
  }
  render() {
    return (
      <div>
        item
      </div>
    )
  }
}
function mapStateToProps(state, props) {
  return {
    panelList:state.panel
  };
}
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(PanelActions, dispatch)
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Item);
