import React, {useEffect, useState} from "react";
import { Product } from "../components/Product";
import styled from "styled-components";
import { api } from "../api";

export interface ProductTypes{
  id: number;
  title: string;
  price: number;
  image: string;
}


export const Home = (): JSX.Element => {
  
  const [products, setProducts] = useState<ProductTypes[]>([]);

  useEffect(()=>{
    async function getProductsFromAPI() {
      const responseFromAPI = await api.get("/products");

      setProducts(responseFromAPI.data)
    }

    getProductsFromAPI()

  }, [])
  
  
  return (
      <ProductList>
        {products.map(products => {
          return(
          <Product data={products} key={products.id} />
          )
        })}
      </ProductList>
  )
}

const ProductList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  list-style: none;
  grid-gap: 25px;
`;