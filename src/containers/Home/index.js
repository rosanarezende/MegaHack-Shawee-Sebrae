import React from 'react'
import { connect } from 'react-redux'

import MyBottonNav from '../../components/BottonNav'

import { Typography, CardMedia } from '@material-ui/core'

function Home(props) {
  const { professionalData } = props
  return (
    <>
      <Typography align='center' variant='h3' gutterBottom color="primary">
          {professionalData.businessName}
      </Typography>

      <CardMedia
        image={professionalData.businessImage}
        title={professionalData.businessName}
      />



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