import React from 'react'
import { connect } from 'react-redux'
import MyBottonNav from '../../components/BottonNav'
import ProductItem from '../../components/ProductItem'
import SearchBar from '../../components/SearchBar'

class Produtos extends React.Component {
  constructor(props) {
    super(props)
    this.state = ''
  }

  render() {
    console.log(this.props.local)
    return (
      <>
        <SearchBar />
        <ProductItem />
        <ProductItem />
        <MyBottonNav />
      </>
    )
  }
}


const mapStateToProps = (state) => ({
  local: state.navigation.actualPage
})
const mapDispatchToProps = (dispatch) => ({

})


export default connect(mapStateToProps, mapDispatchToProps)(Produtos) 