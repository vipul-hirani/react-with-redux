import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import '../src/assets/css/bootstrap.css';
import '../src/assets/css/easy-responsive-tabs.css';
import '../src/assets/css/font-awesome.css';
import '../src/assets/css/jquery-ui.css';
import '../src/assets/css/style.css';
import {Provider} from "react-redux";
import registerServiceWorker from './registerServiceWorker';
import cartReducer from './reducer/cart-reducer'
import productReducer from './reducer/product-reducer'
import {applyMiddleware, combineReducers, compose, createStore} from 'redux'
import JsonData from "./service/jsondata";
import thunk from "redux-thunk";
import Helper from "./service/Helpers";

const allReducer = combineReducers({
  products: productReducer,
  cart: cartReducer
});


const allStoreEnhancers = compose(
  applyMiddleware(thunk),
  window.devToolsExtension && window.devToolsExtension(),
);


const store = createStore(
  allReducer, {
    products: JsonData,
    cart: Helper.getLocalStorageData('cartData')
  },
  allStoreEnhancers
);

ReactDOM.render(<Provider store={store}><App/></Provider>, document.getElementById('root'));
registerServiceWorker();
