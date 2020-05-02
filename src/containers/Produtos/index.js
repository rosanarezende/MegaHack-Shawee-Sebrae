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
    const { services } = this.props
    console.log(this.props.local)

    return (
      <>
        <SearchBar />
        
        {services.map(service => (
          <ProductItem service={service}/>
        ))}

        <MyBottonNav />
      </>
    )
  }
}


const mapStateToProps = (state) => ({
  local: state.navigation.actualPage,
  services: state.professional.services,
})
const mapDispatchToProps = (dispatch) => ({

})


export default connect(mapStateToProps, mapDispatchToProps)(Produtos) 