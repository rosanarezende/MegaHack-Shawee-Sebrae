import React from 'react'
import { Wrapper, ImgSide, InfoSide, Title, Price } from './style'

function ProductItem(props) {
  const { service } = props

  return (
    <Wrapper>
      <ImgSide src={service.img} />
      <InfoSide>
        <Title>{service.name}</Title>
        <Price>
          {service.value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
        </Price>
      </InfoSide>
    </Wrapper>
  )
}

export default ProductItem