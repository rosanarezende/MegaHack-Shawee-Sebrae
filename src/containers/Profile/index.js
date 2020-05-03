import React from 'react'
import { connect } from 'react-redux'
import MyBottonNav from '../../components/BottonNav'

class Profile extends React.Component {

  render() {
    return(
      <MyBottonNav />
    )
  }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = (dispatch) => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(Profile)