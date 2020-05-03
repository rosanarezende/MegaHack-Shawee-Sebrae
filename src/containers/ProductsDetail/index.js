import React from 'react'
import { connect } from 'react-redux'

import MyBottonNav from '../../components/BottonNav'

class ProductDetails extends React.Component {
  constructor(props) {
    super(props)
    this.state = ''
  }

  render() {
    const { product } = this.props
    console.log(product)
    return (
      <MyBottonNav />
    )
  }
}

const mapStateToProps = (state) => ({
  product: state.professional.productToDetail
})
const mapDispatchToProps = (dispatch) => ({

})
export default connect(mapStateToProps, mapDispatchToProps)(ProductDetails)