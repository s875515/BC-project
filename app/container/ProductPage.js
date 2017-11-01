import React, { Component } from 'react';
import { Layout,Menu,Icon  } from 'antd';
import WorkArea  from './WorkArea.js'
import Laybel  from './Laybel.js'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as userActions from '../actions/user-action.js';

const { Header } = Layout;

class ProductPage extends Component {
  componentWillMount() {
    this.props.actions.loadCategory()
  }
  render() {
    return (
      <div>
        {
          (this.props.status.view)?
          <div>
            <Header style={{height:"30px",padding:"0px",background:"none",marginBottom:"10px"}}>
              <Laybel/>
            </Header>
            <WorkArea/>
          </div>:null
        }
      </div>
    )
  }
}
const mapStateToProps  = (state, props) => {
  return {
    status:state.page
  }
}
const mapDispatchToProps = (dispatch) => {
  return{
    actions: bindActionCreators(userActions, dispatch)
  }
}

export default  connect(mapStateToProps,mapDispatchToProps)(ProductPage);
