import React, { Fragment, useEffect, useState } from "react";

const ListProductsInCart = ({ product }) => {
  // const [product_name, setName] = useState(product.product_name);
  // const [product_description, setDescription] = useState(product.product_description);
  // const [product_price, setPrice] = useState(product.product_price);
  // const [product_image, setImage] = useState(product.product_image);

  // const getProduct = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const body = {
  //       product_name,
  //       product_description,
  //       product_price,
  //       product_image,
  //     };
  //     const response = await fetch(
  //       `http://localhost:5000/products/${product.product_id}`
  //     );
  //     window.location = "http://localhost:3000/user_cart";
  //   } catch (error) {
  //     console.error(error.message);
  //   }
  // };

  // useEffect(() => {
  //   getProduct();
  // }, []);

  // return (
  //   <Fragment>
  //     <table className="table mt-5 text-center">
  //       <thead>
  //         <tr>
  //           <th>Name</th>
  //           <th>Description</th>
  //           <th>Price</th>
  //         </tr>
  //       </thead>
  //       <tbody>
  //         <tr key={product.product_id}>
  //           <td>{product.product_name}</td>
  //           <td>{product.product_description}</td>
  //           <td>{product.product_price}</td>
  //           <td>
  //             <img
  //               src={product.product_image}
  //               width="100"
  //               height="100"
  //               alt="product_image"
  //             />
  //           </td>
  //         </tr>
  //         ))}
  //       </tbody>
  //     </table>
  //   </Fragment>
  // );
  return 0;
};

export default ListProductsInCart;
