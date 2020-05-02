import React, { Component, useEffect } from 'react';
import styled from 'styled-components';
import LogoImg from '../../img/logo-joana-beauty.png';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import { routes } from '../Router/index';
// import { getProfile } from '../../actions/users';

const MainContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #EFD6EF;
  display: flex;
  justify-content: center;
  align-items: center;
`

const StyledImg = styled.img`
  height: 281px;
  width: 281px;
`

function InitialScreen(props) {
    useEffect(
        () => {
            //         const token = window.localStorage.getItem('token')
            //         if (token) {
            //             props.getProfile()
            //             props.goHome()
            //         } else {
            //             props.goToLogin()
            //         }s
        }, []
    )

    return (
        <MainContainer>
            <StyledImg src={LogoImg} alt="Logo Joana Beauty" />
        </MainContainer>
    );
}

const mapDispatchToProps = dispatch => ({
    goToLogin: () => dispatch(push(routes.login)),
    // getProfile: () => dispatch(getProfile()),
    goHome: () => dispatch(push(routes.home))
})

export default connect(null, mapDispatchToProps)(InitialScreen)