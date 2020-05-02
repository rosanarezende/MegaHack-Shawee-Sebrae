import React from 'react'
import { Wrapper, ImgSide, InfoSide, Title, Price } from './style'

function ProductItem(props) {
  return (
    <Wrapper>
      <ImgSide src={'https://picsum.photos/200/200'} />
      <InfoSide>
        <Title>Produto A qualquer ser quser venf onowef oifi owiuhnf uih0f owenhif wnfwu</Title>
        <Price>
          R$ 1.500,00
        </Price>
      </InfoSide>
    </Wrapper>
  )
}

export default ProductItem