import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import { routes } from '../Router/index';
// import { getProfile } from '../../actions/users';

import { MainContainer, StyledImg } from './styles'

function InitialScreen(props) {
    
    useEffect(() => {
            const token = window.localStorage.getItem('token')
            if (token) {
                const timer = setTimeout(() => {
                    // props.getProfile()
                     props.goHome()
                  }, 1000);
                  return () => clearTimeout(timer);
            } else {
                const timer = setTimeout(() => {
                    props.goToLogin()
                  }, 1000);
                  return () => clearTimeout(timer);
            }
        }, [props])

    const { professionalData } = props

    return (
        <MainContainer>
            <StyledImg src={professionalData.businessImage} alt={professionalData.businessName} />
        </MainContainer>
    );
}

const mapStateToProps = state => ({
    professionalData: state.professional.professionalData
})

const mapDispatchToProps = dispatch => ({
    goToLogin: () => dispatch(push(routes.login)),
    // getProfile: () => dispatch(getProfile()),
    goHome: () => dispatch(push(routes.home))
})

export default connect(mapStateToProps, mapDispatchToProps)(InitialScreen)