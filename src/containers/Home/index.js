import React from 'react'
import { connect } from 'react-redux'

import MyBottonNav from '../../components/BottonNav'

import { Typography } from '@material-ui/core'
import * as S from './styles'

function Home(props) {
  const { professionalData } = props
  return (
    <>
      <S.HomeWrapper>

        <Typography align='center' variant='h3' gutterBottom color="primary">
          {professionalData.businessName}
        </Typography>

        <S.DivImg>
          <S.Logo
            src={professionalData.businessImage}
            alt={professionalData.businessName}
          />
        </S.DivImg>

        <Typography align='center' gutterBottom>
          {professionalData.businessAbout}
        </Typography>

      Testando note
      
      </S.HomeWrapper>

      <MyBottonNav />
    </>
  )
}

const mapStateToProps = state => ({
  professionalData: state.professional.professionalData
})

// const mapDispatchToProps = dispatch => ({

// })

export default connect(mapStateToProps)(Home)