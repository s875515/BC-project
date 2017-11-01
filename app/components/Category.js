import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as PanelActions from '../actions/panel-action.js';
import * as userActions from '../actions/user-action.js';
import CategoryDetail from './CategoryDetail.js'
import Item from './Item.js'
import { Spin } from 'antd';

class Category extends Component {
  openCategoryDetail = () => {
    let payload =
    {
      loading:false,
      title:"Category Detail",
      component:CategoryDetail,
    }
    this.props.actions.addPanel(payload)
  };
  openItem = (a,b) => {
    let itemData = [a,b]
    let panel = {title:"item",component:Item,loading:false}
    this.props.actions.addItemListPanel(panel)
    // this.props.userActions.loadItemList()
  }
  createID = () => {
    console.log(_.uniqueId())
  }

  render() {
    let {parameter} = this.props
    return (
      <div>
        <Spin spinning={parameter.loading}>
        <div>
          <button onClick={this.openCategoryDetail}>open Category Detail</button>
          <button onClick={this.openItem.bind(this,"itemA","itemB")}>open item list</button>
          <button onClick={this.openItem.bind(this,"itemC","itemD")}>open anoitem list</button>
          <button onClick={this.createID}>test</button>
        </div>
        {
          this.props.categorys.map((category,index) => {
            return (
              <li key={index}>{category}</li>
            )
          })
        }
        </Spin>
      </div>
    )
  }
}

const mapStateToProps = (state, props) => {
  return {
    categorys:state.category
  }
}
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(PanelActions, dispatch),
    userActions: bindActionCreators(userActions, dispatch)
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Category);
