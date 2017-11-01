import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as userActions from '../actions/user-action.js';
import {bindActionCreators} from 'redux';

class CategoryDetail extends Component {
  editCategory = () => {
    this.props.actions.editCategory()
  }
  render() {
    return (
      <div>
        Category Detail view
        <button onClick={this.editCategory}>edit Category Detail</button>
      </div>
    )
  }
}
// function mapStateToProps(state, props) {
//   return {
//     panelList:state.panel
//   };
// }
const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(userActions, dispatch)
  }
}

export default connect(null,mapDispatchToProps)(CategoryDetail);
