import React, {Component} from "react";
import InputRange from 'react-input-range';
import _ from 'underscore';
import 'react-input-range/lib/css/index.css'
import {Checkbox, Row, Col} from 'antd';
import Helpers from "../../service/Helpers";
import {connect} from "react-redux";
import {updateCart} from "../../actions/cart-action";
import {createSelector} from "reselect";
import ProductDesign from "./ProductDesign";

class Home extends Component {
  constructor(props) {
    super(props);
    let minPrice = _.min(this.props.products.manData.data, _.property('price'));
    let maxPrice = _.max(this.props.products.manData.data, _.property('price'));
    this.state = {
      activeTab: 'manData',
      size_filter: [],
      price_filter_value: {
        min: minPrice.price,
        max: maxPrice.price
      },
      max_product_price: maxPrice.price + 100,
      manData: this.props.products.manData.data,
      womanData: this.props.products.womanData.data,
      footwearData: this.props.products.footwearData.data,
      bagsData: this.props.products.bagsData.data,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  selectedTab(key) {
    let that = this;
    this.setState({
      activeTab: key,
      size_filter: []
    });
    that.setPrice(that.props.products[key].data)
  }

  setPrice(dataObj) {
    let minPrice = _.min(dataObj, _.property('price'));
    let maxPrice = _.max(dataObj, _.property('price'));
    this.setState({
      price_filter_value: {
        min: minPrice.price,
        max: maxPrice.price
      },
      max_product_price: maxPrice.price + 100,
    });
  }

  priceFilter(value) {
    let that = this;
    that.setState({
      price_filter_value: value,
      [that.state.activeTab]: _.filter(that.props.products[that.state.activeTab].data, (a) => {
        return _.size(that.state.size_filter) > 0 ? (_.size(_.filter(a.size, f => that.state.size_filter.includes(f))) > 0) && (a.price >= value.min && a.price <= value.max) : (a.price >= value.min && a.price <= value.max);
      })
    });
  }

  sizeFilter = (key) => {
    let that = this;
    let price = that.state.price_filter_value;
    let size_filter = _.intersection(key, that.props.products[that.state.activeTab].filter.size);
    that.setState({
      size_filter: size_filter,
      [that.state.activeTab]: _.filter(that.props.products[that.state.activeTab].data, function (value) {
        return _.size(size_filter) > 0 ? (_.size(_.filter(value.size, f => size_filter.includes(f))) > 0) && (value.price >= price.min && value.price <= price.max) : (value.price >= price.min && value.price <= price.max);
      })
    });
  };

  handleSubmit = (data, index) => {
    const cartData = this.props.cart;
    // const cartData = Helpers.getLocalStorageData('cartData');
    const findProData = _.findWhere(cartData, {id: data.id});
    if (findProData) {
      let index = _.indexOf(_.pluck(cartData, 'id'), findProData.id);
      cartData[index].qty += 1;
    } else {
      cartData.push(data);
    }
    let imgtodrag = document.getElementsByClassName('product-men')[index];
    let imgtodragImage = imgtodrag.querySelector('.pro-image-front');

    let disLeft = imgtodrag.getBoundingClientRect().left;
    let disTop = imgtodrag.getBoundingClientRect().top;
    let image = imgtodragImage.cloneNode(true);

    image.style = 'z-index: 1111; width: 100px;opacity:0.5; position:fixed; top:' + disTop + 'px;left:' + disLeft + 'px;transition: left 2s, top 2s, width 2s, opacity 2s cubic-bezier(1, 1, 1, 1)';
    document.body.appendChild(image);

    setTimeout(function () {
      image.style.left = 'calc(95% - 80px)';
      image.style.top = '25px';
      image.style.width = '40px';
      image.style.opacity = '0';
    }, 200);
    this.props.onCartUpdate(cartData);
    Helpers.setLocalStorageData('cartData', cartData);
  };

  render() {
    return (
      <div className="new_arrivals_agile_w3ls_info">
        <div className="container">
          <h3 className="wthree_text_info">New <span>Arrivals</span></h3>
          <div className='col-md-3'>
            <div className='col-md-12'><b>Filter</b></div>
            <div className='col-md-12' style={{marginTop: 25}}>
              <InputRange minValue={0} maxValue={this.state.max_product_price}
                          value={this.state.price_filter_value}
                          onChange={(value) => this.setState({'price_filter_value': value})}
                          onChangeComplete={(value) => this.priceFilter(value)}
              />
            </div>
            <div className='col-md-12' style={{marginTop: 20}}>
              <hr/>
              <b>Size</b></div>
            <div className='col-md-12' style={{marginTop: 10}}>
              <Checkbox.Group defaultValue={[]} style={{width: '100%'}} onChange={this.sizeFilter}>
                <Row>
                  {this.props.products[this.state.activeTab].filter.size.map((value, key) => {
                    return (
                      //<Col span={8} key={key}><Checkbox value={value}>{value}</Checkbox></Col>
                      <Col span={8} key={key}><Checkbox value={value} className="checkbox-custom"/><span>{value}</span></Col>
                    )
                  })}
                </Row>
              </Checkbox.Group>
            </div>
            {/*Company section*/}
            {this.props.products[this.state.activeTab].filter.company && (
              <div>
                <div className='col-md-12' style={{marginTop: 0}}>
                  <hr/>
                  <b>Price</b></div>
                <div className='col-md-12' style={{marginTop: 15}}>
                  <Checkbox.Group defaultValue={[]} style={{width: '100%'}} onChange={this.sizeFilter}>
                    <Row>
                      {
                        this.props.products[this.state.activeTab].filter.company.map((value, key) => {
                          return (
                            <Col span={16} key={key}><label className="checkbox-custom1">
                              <input type="checkbox" hidden/><span>{value}</span></label>
                            </Col>
                          )
                        })
                      }
                    </Row>
                  </Checkbox.Group>
                </div>
              </div>
            )}

            {/*Color filter section*/}
            {this.props.products[this.state.activeTab].filter.color && (
              <div>
                <div className='col-md-12' style={{marginTop: 0}}>
                  <hr/>
                  <b>Color</b></div>
                <div className='col-md-12' style={{marginTop: 15}}>
                  <Checkbox.Group defaultValue={[]} style={{width: '100%'}} onChange={this.sizeFilter}>
                    <div className="row no-gutters">
                      {
                        this.props.products[this.state.activeTab].filter.color.map((value, key) => {
                          return (
                            <div key={key} className="col-sm-3">
                              <label className="checkbox-color">
                                <input type="checkbox" hidden/>
                                <span className={"color"} style={{backgroundColor: value.code}}/>
                              </label>
                            </div>
                          )
                        })
                      }
                      <Col className="col-sm-6"><span className="show-more">+ More</span></Col>
                    </div>
                  </Checkbox.Group>
                </div>
              </div>
            )}
          </div>

          <ul className="resp-tabs-list">
            {
              [{'key': 'manData', 'name': 'Men\'s'},
                {'key': 'womanData', 'name': 'Women\'s'},
                {'key': 'bagsData', 'name': 'Bags'},
                {'key': 'footwearData', 'name': 'Footwear'},
              ].map((value, key) => {
                return <li key={key} className={this.state.activeTab === value.key ? 'active' : ''}
                           onClick={() => this.selectedTab(value.key)}> {value.name}
                </li>
              })
            }
          </ul>

          <div className='col-lg-9'>
            <div id="horizontalTab">
              <ProductDesign addToCart={this.handleSubmit} productData={this.state[this.state.activeTab]}/>
            </div>
          </div>
        </div>
      </div>
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

const mapStateToProps = createSelector(
  productSelector,
  cartSelector,
  (products, cart) => ({
    products,
    cart
  })
);

const mapActionToProps = {
  onCartUpdate: updateCart
};

export default connect(mapStateToProps, mapActionToProps)(Home);