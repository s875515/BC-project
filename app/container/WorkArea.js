import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Layout} from 'antd';
import {connect} from 'react-redux';

import Category from '../components/Category.js'
import CategoryDetail from '../components/CategoryDetail.js'
import Panel from '../components/Panel.js'

const {Content } = Layout;

class WorkArea extends Component {
  render() {
    return (
      <Content style={{overflow:"auto", whiteSpace:"nowrap", display:"flex"}}>
        {
          this.props.panelList.map((panel,index) => {
            return(
            <Panel key={index} title={panel.title}>
              <panel.component index={index} parameter={panel}/>
            </Panel>
            )
          })
        }
      </Content>
    )
  }
}
function mapStateToProps(state, props) {
  return {
    panelList:state.panel
  };
}

export default connect(mapStateToProps)(WorkArea);
