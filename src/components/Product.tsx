import React from 'react';
import styled from 'styled-components';
import {MdShoppingCart} from 'react-icons/md'

export const Product = () => {
  return (
    <ProductContainer>
      <img src='https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis1.jpg' alt='compra aí'/>
      <h3>Tênis de COrrida</h3>
      <span>300 conto</span>
      <button>
        <div>
          <MdShoppingCart size={16} color="#fff" />
          3
        </div>
        <span>ADICIONAR AO CARRINHO</span>
      </button>
    </ProductContainer>
  )
}

const ProductContainer = styled.li`
  background: #fff;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  padding: 10px;

  img{
    max-width: 180px;
    align-self: center;
  }

  h3{
    font-size: .8rem;
    color: #31333A;
    min-height: 30px;
  }

  > span{
    font-size: 1rem;
    font-weight: bold;
    margin: 5px 0px 10px;
  }

  button{
    background: #E3313C;
    border: none;

    display: flex;
    align-items: center;
    border-radius: 5px;
    color: #fff;
    &:hover{
      background: #E95A63;
    }
    div{
      display: flex;
      align-items: center;
      padding: 10px;
      background: rgba(0, 0, 0, 0.1);
      svg{
        margin-right: 5px;
      }
    }
    span{
      flex: 1;
      text-align: center;
    }
  }
`;