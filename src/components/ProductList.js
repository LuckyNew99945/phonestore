import React, { Component } from "react";
import Product from "./Product";
import Title from "./Title";
import { ProductConsumer } from "../Context";
export default class ProductList extends Component {
  render() {
    // console.log(this.state.products);
    return (
      <>
        <div className="py-5">
          <div className="container">
            <Title name="our" title="product" />
            <div className="row">
              <ProductConsumer>
                {value => {
                  // console.log(value);
                  return value.products.map(product => {
                    return <Product key={product.id} product={product} />;
                  });
                }}
              </ProductConsumer>
            </div>
          </div>
        </div>
        {/* <Product /> */}
      </>
    );
  }
}
