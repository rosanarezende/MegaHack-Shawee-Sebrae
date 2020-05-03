import React, { Component } from 'react';
import styled from 'styled-components';
import BackArrow from '../../img//back.png';
import Typography from '@material-ui/core/Typography';

const StyledDiv = styled.div`
  display: flex;
  width: 100vw;
  height: 44px;
  align-items: center;
  border-bottom: 1px solid grey;
  justify-content: center;
  img {    
    width: 23px;
    height: 24px;
    position: absolute;
    left: 16px;
  }
`

export default function HeaderNav(props) {

  return (
    <StyledDiv>
      <img onClick={props.onClick} src={BackArrow} style={{ display: props.display }}></img>
      <Typography type="h6">
        {props.textHeader}
      </Typography>
      {/* <StyledP> {props.textHeader} </StyledP> */}
    </StyledDiv>
  )
}
