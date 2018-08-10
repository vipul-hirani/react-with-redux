import React from 'react';
import '../Cart/cart.css';
import _ from 'underscore';
import {If, Then, ElseIf} from 'react-if-elseif-else-render';
import plus from '../../assets/images/plus.svg';
import minus from '../../assets/images/minus.svg';
import Helper from "../../service/Helpers";
import shoppingCart from "../../assets/images/shopping_cart.png";
import {connect} from "react-redux";
import {createSelector} from "reselect";
import {updateCart} from "../../actions/cart-action";

class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sub_total: 0
    };
    this.updateClose = this.updateClose.bind(this);
  }

  componentDidMount() {
    this.cartCalculation()
  }

  cartCalculation(){
    let subtotal = 0;
    this.props.cart.map((value) =>
      subtotal += (value.qty * value.price)
    );
    this.setState({sub_total: subtotal});
  }

  addPlus(data) {
    const cartData = this.props.cart;
    const findProData = _.findWhere(cartData, {id: data.id});

    if (findProData) {
      let index = _.indexOf(_.pluck(cartData, 'id'), findProData.id);
      cartData[index].qty += 1;
      this.setState({sub_total: (this.state.sub_total + cartData[index].price)});
      Helper.setLocalStorageData('cartData', cartData);
      this.props.onCartUpdate(cartData);
    }
  }

  addMinus(data) {
    const cartData = this.props.cart;
    const findProData = _.findWhere(cartData, {id: data.id});
    if (findProData) {
      let index = _.indexOf(_.pluck(cartData, 'id'), findProData.id);
      if (cartData[index].qty > 1) {
        cartData[index].qty -= 1;
        this.setState({sub_total: (this.state.sub_total - cartData[index].price)});
      }
      Helper.setLocalStorageData('cartData', cartData);
      this.props.onCartUpdate(cartData);
    }
  }

  updateClose(key) {
    let cartData = _.reject(this.props.cart, function (d) {
      return d.id === key;
    });
    Helper.setLocalStorageData('cartData', cartData);
    this.props.onCartUpdate(cartData);
    setTimeout(()=>{
      this.cartCalculation();
    })
  }



  render() {
    return (
      <div className="shopping-cart">
        <div className="title">
          Shopping Cart
        </div>
        <If condition={this.props.cart.length}>
          <Then>
            {this.props.cart.map((value, key) =>
              <div className="item" key={key}>
                <div className="buttons close-btn" onClick={() => this.updateClose(value.id)}>
                  <span className="delete-btn"/>
                </div>
                <div className="image item-img">
                  <img src={value.image} alt={value.title} width='50%' height='100%'/>
                </div>
                <div className="description">
                  <span>{value.title}</span>
                </div>
                <div className="quantity">
                  <button className="plus-btn" type="button" name="button" onClick={() => this.addPlus(value)}>
                    <img src={plus} alt="plus"/>
                  </button>
                  <input type="text" name="name" value={value.qty} readOnly/>
                  <button className="minus-btn" type="button" name="button" onClick={() => this.addMinus(value)}>
                    <img src={minus} alt="minus"/>
                  </button>
                </div>
                <div className="total-price">${value.price}</div>
                <div className="total-plus-quantity">${(value.price * value.qty).toFixed(2)}</div>
              </div>
            )}
            <div className="item">
              <div className="sub-total-price"><b>SubTotal({this.props.cart.length} items):
                ${(this.state.sub_total).toFixed(2)}</b></div>
            </div>
          </Then>
          <ElseIf condition={this.props.cart.length === 0 || !this.props.cart}>
            <div className="empty-cart">
              <img src={shoppingCart} width="10%" alt="Shopping Cart"/>
            </div>
            <div className="no-product">No product in cart</div>
          </ElseIf>
        </If>

      </div>
    );
  }
}


const cartSelector = createSelector(
  state => state.cart,
  cart => cart,
);

const mapStateToProps = createSelector(
  cartSelector,
  (cart) => ({
    cart
  })
);

const mapActionToProps = {
  onCartUpdate: updateCart
};

export default connect(mapStateToProps, mapActionToProps)(Cart);