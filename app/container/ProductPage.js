import React, { Component } from 'react';
import { Layout,Menu,Icon  } from 'antd';
import WorkArea  from './WorkArea.js'
import Laybel  from './Laybel.js'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

const { Header } = Layout;

class ProductPage extends React.PureComponent {
  render() {
    return (
      <div>
        <Header style={{height:"30px",padding:"0px",background:"none",marginBottom:"10px"}}>
          <Laybel/>
        </Header>
        <WorkArea/>
      </div>
    )
  }
}

export default ProductPage;
