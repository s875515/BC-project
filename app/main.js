import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import configureStore from './store.js';
import { Layout,Menu,Icon  } from 'antd';
import { BrowserRouter as Router,Route,Link,Switch } from 'react-router-dom'

import MainMenu from './components/MainMenu.js'
import ProductPage from './container/ProductPage.js'
import InventoryPage from './container/InventoryPage.js'
import SignInPage from './container/SignInPage.js'

const { Header, Footer, Sider, Content } = Layout;
const store = configureStore();

const App = class App extends Component {
  render() {
    return (
      <Layout style={{height:"940px"}}>
        <Sider>
          <MainMenu/>
        </Sider>
        <Layout>
          <Route exact path="/product" component={ProductPage} />
          <Route exact path="/Inventory" component={InventoryPage} />
        </Layout>
      </Layout>
    );
  }
}

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Switch>
        <Route  path="/signin" component={SignInPage} />
        <Route  path="/" component={App} />
      </Switch>
    </Router>
  </Provider>
  , document.getElementById("container"));
