import React, { Component } from 'react';
import {connect} from 'react-redux';

class Item extends Component {
  render() {
    return (
      <div>
        Item Detail view
      </div>
    )
  }
}
function mapStateToProps(state, props) {
  return {
    panelList:state.panel
  };
}

export default connect(mapStateToProps)(Item);
