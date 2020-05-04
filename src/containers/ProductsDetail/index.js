import React from 'react'
import { connect } from 'react-redux'

import MyBottonNav from '../../components/BottonNav'
import MyPageTitle from '../../components/PageTitle'
import { PageWrapper, ImgSide, BodyWrapper, TypographyWrapper, ButtonWrapper } from './style'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

import { addToCart } from '../../actions/shopping'
import { push, goBack } from 'connected-react-router'
import { routes } from '../Router'

class ProductDetails extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      alreadyAdd: false
    }
  }

  componentDidMount() {
    const { cartList, product } = this.props
    if (cartList.length > 0) {
      const produtoEncontrado = cartList.filter(cartProduct => {
        return cartProduct.id === product.id
      })
      if (produtoEncontrado.length > 0) {
        this.setState({ alreadyAdd: true })
      }
    }
  }

  handleCart = () => {
    if (this.state.alreadyAdd === false) {
      this.props.addToCart(this.props.product)
      this.setState({
        alreadyAdd: true
      })
    } else {
      this.props.goToCart()
    }
  }

  render() {
    const { product } = this.props
    const { alreadyAdd } = this.state
    return (
      <PageWrapper>
        <MyPageTitle showBack pageTitle='Produtos' />
        <ImgSide src={product.img} />
        <BodyWrapper>
          <TypographyWrapper>
            <Typography color='primary' variant="h5">{product.name}</Typography>
          </TypographyWrapper>
          <TypographyWrapper>
            <Typography variant="h6" align='justify'>{product.value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</Typography>
          </TypographyWrapper>
          <TypographyWrapper>
            <Typography variant="body1" align='justify'>{product.description}</Typography>
          </TypographyWrapper>
          <ButtonWrapper>
            <Button
              variant='contained'
              color={alreadyAdd ? 'primary' : 'secondary'}
              onClick={this.handleCart}
            >
              {alreadyAdd ? "IR PARA O CARRINHO" : 'ADICIONAR AO CARRINHO'}
            </Button>
          </ButtonWrapper>
          {this.state.alreadyAdd &&
            <ButtonWrapper>
              <Button
                variant='contained'
                color='secondary'
                onClick={() => this.props.goBack()}
              > CONTINUAR COMPRANDO
              </Button>
            </ButtonWrapper>
          }
        </BodyWrapper>
        <MyBottonNav />
      </PageWrapper>
    )
  }
}

const mapStateToProps = (state) => ({
  product: state.shopping.productToDetail,
  cartList: state.shopping.cartList
})
const mapDispatchToProps = (dispatch) => ({
  addToCart: (product) => dispatch(addToCart(product)),
  goToCart: () => dispatch(push(routes.carrinho)),
  goBack: () => dispatch(goBack())
})

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetails)