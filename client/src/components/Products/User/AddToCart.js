import React, { Fragment, useState } from "react";
import Cookies from "js-cookie";

const user_name_cookie = Cookies.get("user_name");


const AddToCart = ({ product }) => {
  const [quantity, setQuantity] = useState("");

  const getProduct = async (e) => {
    // e.preventDefault();
    var cartInfo = [];
    try {
      const response = await fetch(
        `http://localhost:5000/products/${product.product_id}`
      );
      const data = await response.json();
      cartInfo.push(data["product_name"], data["product_id"]);
      return cartInfo;
    } catch (error) {
      console.error(error.message);
    }
  };

  const addToCart = async (e) => {
    // e.preventDefault();
    try {
      const cartInfo = await getProduct(e);
      const product_name = cartInfo[0];
      const product_id = cartInfo[1];
      const user_name = user_name_cookie;
      const body = { product_name, product_id, quantity, user_name }
      const response = await fetch("http://localhost:5000/shopping_cart", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    } catch (error) {}
  };

  return (
    <Fragment>
      <button
        onClick={(e) => getProduct(e)}
        type="button"
        class="btn btn-warning"
        data-toggle="modal"
        data-target={`#id${product.product_id}`}
      >
        Add to Cart
      </button>

      <div class="modal" id={`id${product.product_id}`}>
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h4 class="modal-title">Add to cart</h4>
              <button type="button" className="close" data-dismiss="modal">
                &times;
              </button>
            </div>

            <div class="modal-body">
              <input
                placeholder="quantity"
                type="number"
                min="0"
                className="form-control"
                onChange={(e) => setQuantity(e.target.value)}
              />
            </div>

            <div class="modal-footer">
              <button
                type="button"
                className="btn btn-warning"
                data-dismiss="modal"
                onClick={(e) => addToCart(e)}
              >
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default AddToCart;
