import React, { Component } from 'react';
import { Spin } from 'antd';
import {connect} from 'react-redux';

import * as panelAction from '../actions/panelAction';

import CategoryDetail from './CategoryDetail.js'
import Item from './Item.js'

class Category extends Component {
  openCategoryDetail = () => {
    this.props.addPanel();
  };
  openItem = (a,b) => {
    let itemData = [a,b]
    let panel = {title:"item",component:Item,loading:false}
    // this.props.actions.addItemListPanel(panel)
    // this.props.userActions.loadItemList()
  }
  handleLogin = () => {
    this.props.login()
  }
  render() {
    return (
      <div>
        <Spin spinning={false}>
        <div>
          <button onClick={this.handleLogin}>login</button>
          <button onClick={this.openCategoryDetail}>add panel</button>
        </div>
        </Spin>
      </div>
    )
  }
}

const actions = {
  addPanel: panelAction.addPanel,
  login: panelAction.login
}

const mapStateToProps = (state, props) => {
  return state;
}

export default connect(mapStateToProps, actions)(Category);
