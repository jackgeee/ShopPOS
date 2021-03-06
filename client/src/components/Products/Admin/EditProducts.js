import React, { Fragment, useState } from "react";
import Button from "@material-ui/core/Button";
import EditIcon from "@material-ui/icons/Edit";

const EditProducts = ({ product }) => {
  const [product_name, setName] = useState(product.product_name);
  const [product_description, setDescription] = useState(
    product.product_description
  );
  const [product_price, setPrice] = useState(product.product_price);
  const [product_image, setImage] = useState(product.product_image);

  const updateProduct = async (e) => {
    e.preventDefault();
    try {
      const body = {
        product_name,
        product_description,
        product_price,
        product_image,
      };
      const response = await fetch(
        `http://localhost:5000/products/${product.product_id}`,
        {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        }
      );
      window.location = "http://localhost:3000/products";
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <Fragment>
      <meta
        name="viewport"
        content="minimum-scale=1, initial-scale=1, width=device-width"
      />
      <Button
        endIcon={<EditIcon />}
        variant="outlined"
        size="sm"
        data-toggle="modal"
        data-target={`#id${product.product_id}`}
      >
        Edit
      </Button>

      <div class="modal" id={`id${product.product_id}`}>
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h4 class="modal-title">Edit product</h4>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                onClick={() => {
                  setName(product.product_name);
                  setDescription(product.product_description);
                  setPrice(product.product_price);
                  setImage(product.product_image);
                }}
              >
                &times;
              </button>
            </div>

            <div class="modal-body">
              <input
                type="text"
                className="form-control"
                value={product_name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div class="modal-body">
              <input
                type="text"
                className="form-control"
                value={product_description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            <div class="modal-body">
              <input
                type="text"
                className="form-control"
                value={product_price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>
            <div class="modal-body">
              <input
                type="text"
                className="form-control"
                value={product_image}
                onChange={(e) => setImage(e.target.value)}
              />
            </div>

            <div class="modal-footer">
              <button
                type="button"
                className="btn btn-warning"
                data-dismiss="modal"
                onClick={(e) => updateProduct(e)}
              >
                Edit
              </button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default EditProducts;
