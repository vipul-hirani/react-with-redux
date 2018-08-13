import React, {Component} from 'react';
import './App.css';
import Header from "./Component/Header/Header";
import {Route, BrowserRouter, Switch} from "react-router-dom";
import asyncComponent from './service/AsyncComponent';
import {connect} from 'react-redux';
import {createSelector} from 'reselect'

const Home = asyncComponent(() => import('./pages/Home/Home').then(module => module.default));
const Cart = asyncComponent(() => import('./pages/Cart/Cart').then(module => module.default));
const Login = asyncComponent(() => import('./pages/Login/Login').then(module => module.default));


class App extends Component {

  render() {
    console.log(this.props.cart.length);
    return (
      <BrowserRouter>
        <div>
          <Header {...this.props}/>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/login" component={Login}/>
            <Route exact path="/cart"  component={Cart}/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

const productSelector = createSelector(
  state => state.products,
  products => products,
);

const cartSelector = createSelector(
  state => state.cart,
  cart => cart,
);

const userSelector = createSelector(
  state => state.user,
  user => user,
);

const mapStateToProps = createSelector(
  productSelector,
  cartSelector,
  userSelector,
  (products, cart, user) => ({
    products ,
    cart,
    user
  })
);
export default connect(mapStateToProps)(App);