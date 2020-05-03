import React from 'react'

import { goBack } from "connected-react-router"
import { connect } from "react-redux"

import { Wrapper, IconWrapper, PageTitle } from './style'

import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

class MyPageTitle extends React.Component {
  render() {
    return (
      <Wrapper>
        <IconWrapper onClick={this.props.goBack}>
          {this.props.showBack && <ArrowBackIosIcon fontSize="small" />}
        </IconWrapper>
        <PageTitle > {this.props.pageTitle} </PageTitle>
        <IconWrapper />
      </Wrapper>
    )

  }
}

const mapDispatchToProps = (dispatch) => ({
  goBack: () => dispatch(goBack())
})

export default connect(null, mapDispatchToProps)(MyPageTitle)