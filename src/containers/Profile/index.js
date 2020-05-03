import React from 'react'
import { connect } from 'react-redux'
import MyBottonNav from '../../components/BottonNav'
import { PageWrapper } from './style'

class Profile extends React.Component {

  render() {
    return (
      <PageWrapper>

        <MyBottonNav />
      </PageWrapper>
    )
  }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = (dispatch) => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(Profile)