import React from "react";
import PropTypes from 'prop-types';

const ProductDesign = ({addToCart, productData}) => (
  <div className="resp-tabs-container">
    {productData.map((value, key) => {
      return <div className="col-md-4 product-men" key={key}>
        <div className="men-pro-item simpleCart_shelfItem">
          <div className="men-thumb-item">
            <img src={value.image} alt={value.title}
                 className="pro-image-front"/>
            <span className="product-new-top">New</span>
            <img src={value.image} alt={value.title}
                 className="pro-image-back"/>
          </div>
          <div className="item-info-product ">
            <h4><a href="">{value.title}</a></h4>
            <div className="info-product-price">
              <span className="item_price">{value.price}</span>
              <del>{value.discount_price}</del>
            </div>
            <div
              className="snipcart-details top_brand_home_details item_add single-item hvr-outline-out button2">
              <fieldset>
                <input type="submit" name="submit" defaultValue="Add to cart"
                       className=" button add-to-cart" onClick={() => addToCart(value, key)}/>
              </fieldset>
            </div>
          </div>
        </div>
      </div>
    })}
    <div className="clearfix"/>
  </div>
);

ProductDesign.propTypes = {
  addToCart: PropTypes.func.isRequired,
  productData: PropTypes.array.isRequired
};

export default ProductDesign;
