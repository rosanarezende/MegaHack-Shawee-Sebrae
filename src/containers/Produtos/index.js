import React from 'react'
import { connect } from 'react-redux'
import MyBottonNav from '../../components/BottonNav'

class Produtos extends React.Component {
  constructor(props) {
    super(props)
    this.state = ''
  }

  render() {
    console.log(this.props.local)
    return (
      <>
        <p>Olá</p>
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