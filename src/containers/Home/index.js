import React from 'react'
import { connect } from 'react-redux'

import MyBottonNav from '../../components/BottonNav'
import MyPageTitle from '../../components/PageTitle'

import { Typography, CardHeader, Avatar, CardContent } from '@material-ui/core'
import * as S from './styles'

function Home(props) {
  const { professionalData } = props
  return (
    <>
      <MyPageTitle pageTitle='Home' />
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

        <Typography align='center' gutterBottom variant="overline">
          {professionalData.businessAbout}
        </Typography>

        <S.CardProfessional>
          <CardHeader
            avatar={
              <Avatar
                src={professionalData.image}
                alt={professionalData.name}
              />
            }
            title={professionalData.name}
          />
          <CardContent>
            <Typography align="justify" variant="caption">
              {professionalData.about}
            </Typography>
          </CardContent>

        </S.CardProfessional>

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