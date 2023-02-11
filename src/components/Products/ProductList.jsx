

import React from "react";
import ProductItem from "./ProductItem";
import { products } from "../data/listOfProducts";


const ProductList = () => {
  
    const listOfProducts = products.map ((product) => <ProductItem singleItem={product}/>)
    return <ul>{listOfProducts}</ul>
}

export default ProductList