import React from "react";
import { Product } from "../components/Product";
import styled from "styled-components";

export const Home = (): JSX.Element => {
  return (
    <div>
      <ProductList>
        <Product/>
        <Product/>
        <Product/>
        <Product/>
        <Product/>
        <Product/>
      </ProductList>
    </div>
  )
}

const ProductList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  list-style: none;
  grid-gap: 25px;
`;