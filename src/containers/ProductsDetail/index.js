import React from 'react'
import { connect } from 'react-redux'

import MyBottonNav from '../../components/BottonNav'
import { PageWrapper, ImgSide, BodyWrapper } from './style'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

import { addToCart } from '../../actions/shopping'

class ProductDetails extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      alreadyAdd: false
    }
  }

  componentDidMount() {
    const { cartList, product } = this.props
    if (cartList) {
      cartList.forEach(cartProduct => {
        cartProduct.id === product.id ?
          this.setState({ alreadyAdd: true }) :
          this.setState({ alreadyAdd: false })
      })
    }
    this.setState({ alreadyAdd: false })
  }

  render() {
    const { product } = this.props
    const { alreadyAdd } = this.state
    console.log(product)
    return (
      <PageWrapper>
        <ImgSide src={product.img} />
        <BodyWrapper>
          <div>
            <Typography color='primary' variant="h5">{product.name}</Typography>
          </div>
          <div>
            <Typography variant="body1" align='justify'>{product.description}</Typography>
          </div>
        </BodyWrapper>
        <Button variant='contained' color='secondary' disabled={alreadyAdd} >{alreadyAdd ? "bla" : 'ble'}</Button>
        <MyBottonNav />
      </PageWrapper>
    )
  }
}

const mapStateToProps = (state) => ({
  product: state.shopping.productToDetail
})
const mapDispatchToProps = (dispatch) => ({
  addToCart: (product) => dispatch(addToCart(product))
})

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetails)