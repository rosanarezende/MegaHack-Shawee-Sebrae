import React from 'react'
import { push } from "connected-react-router";
import { connect } from 'react-redux'
import { routes } from '../../containers/Router';

import { Wrapper, ImgSide, InfoSide, Title, Price } from './style'
import {setProductToDetail} from '../../actions/professional'

class ProductItem extends React.Component {

  handleClick =() =>{
    this.props.setProductToDetail(this.props.product)
    this.props.goToProductDetail()
  }
  
  render() {
    const { product } = this.props
    return (
      <Wrapper onClick={this.handleClick}>
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
}

const mapDispatchToProps = (dispatch) => ({
  setProductToDetail: (productToDetail) => dispatch(setProductToDetail(productToDetail)),
  goToProductDetail: () => dispatch(push(routes.detalheDeProduto))
})

export default connect (null, mapDispatchToProps)(ProductItem)