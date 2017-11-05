import React, { Component } from 'react';
import { Spin } from 'antd';
import {connect} from 'react-redux';

import * as panelAction from '../actions/panelAction';

import CategoryDetail from './CategoryDetail.js'
import Item from './Item.js'

class Category extends Component {
  openCategoryDetail = () => {
    console.info("--- qqqq ---")
    this.props.addPanel();
    // let payload =
    // {
    //   loading:false,
    //   title:"Category Detail",
    //   component: CategoryDetail,
    // }
    // this.props.actions.addPanel(payload)
  };
  openItem = (a,b) => {
    let itemData = [a,b]
    let panel = {title:"item",component:Item,loading:false}
    // this.props.actions.addItemListPanel(panel)
    // this.props.userActions.loadItemList()
  }
  render() {
    return (
      <div>
        <Spin spinning={false}>
        <div>
          <button onClick={this.openCategoryDetail}>open Category Detail</button>
          <button onClick={this.openItem.bind(this,"itemA","itemB")}>open item list</button>
          <button onClick={this.openItem.bind(this,"itemC","itemD")}>open anoitem list</button>
        </div>
        </Spin>
      </div>
    )
  }
}

const actions = {
  addPanel: panelAction.addPanel
}

const mapStateToProps = (state, props) => {
  return state;
}

export default connect(mapStateToProps, actions)(Category);
