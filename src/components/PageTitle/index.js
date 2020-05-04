import React from 'react'
import { goBack, push } from "connected-react-router"
import { connect } from "react-redux"
import { routes } from '../../containers/Router'

import { Wrapper, IconWrapper, PageTitle } from './style'

import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { PowerSettingsNewRounded } from '@material-ui/icons'

class MyPageTitle extends React.Component {
  
  logout = () => {
    localStorage.clear()
    this.props.goToLogin()
  }
  
  render() {

    return (
      <Wrapper>
        <IconWrapper onClick={this.props.goBack}>
          {this.props.showBack && <ArrowBackIosIcon fontSize="small" />}
        </IconWrapper>
        <PageTitle > {this.props.pageTitle} </PageTitle>
        <IconWrapper onClick={this.logout}>
          {this.props.showLogout && <PowerSettingsNewRounded/>}
        </IconWrapper>
      </Wrapper>
    )

  }
}

const mapDispatchToProps = (dispatch) => ({
  goBack: () => dispatch(goBack()),
  goToLogin: () => dispatch(push(routes.login))
})

export default connect(null, mapDispatchToProps)(MyPageTitle)