import React from 'react'
import { connect } from 'react-redux'
import MyBottonNav from '../../components/BottonNav'
import ProductItem from '../../components/ProductItem'
import SearchBar from '../../components/SearchBar'

import { PageWrapper, Header } from './style'
import FilterScroll from '../../components/ScrollFilter'

class Produtos extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      scrollValue: ''
    }
  }

  handleScroll = (newScrollValue) => {
    if (newScrollValue === this.state.scrollValue) {
      this.setState({ scrollValue: "" })
    } else {
      switch (newScrollValue) {
        case "Cabelo":
          this.setState({ scrollValue: "Cabelo" })
          break;
        case "Pele":
          this.setState({ scrollValue: "Pele" })
          break;
        case "Mão":
          this.setState({ scrollValue: "Mão" })
          break;
        case "Corpo":
          this.setState({ scrollValue: "Corpo" })
          break;
        case "Maquiagem":
          this.setState({ scrollValue: "Maquiagem" })
          break;
        default:
          this.setState({ scrollValue: "" })
          break;
      }
    }
  }

  render() {
    const { products } = this.props

    return (
      <PageWrapper>
        <Header>
          <SearchBar />
        </Header>
        <FilterScroll selected={this.state.scrollValue} handleClick={this.handleScroll} />
        {products.map((product, index) => (
          <ProductItem key={index} product={product} />
        ))}
        <MyBottonNav />
      </PageWrapper>
    )
  }
}


const mapStateToProps = (state) => ({
  local: state.navigation.actualPage,
  products: state.professional.products,
})
const mapDispatchToProps = (dispatch) => ({

})


export default connect(mapStateToProps, mapDispatchToProps)(Produtos) 