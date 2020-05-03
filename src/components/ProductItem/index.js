import React from 'react'
import { Wrapper, ImgSide, InfoSide, Title, Price } from './style'

function ProductItem(props) {
  const { product } = props

  return (
    <Wrapper>
      <ImgSide src={product.img} />
      <InfoSide>
        <Title>{product.name}</Title>
        <Price>
          {product.value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
        </Price>
      </InfoSide>
    </Wrapper>
  )
}

export default ProductItem