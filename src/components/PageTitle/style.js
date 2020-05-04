import styled from 'styled-components'

export const Wrapper = styled.div`
  width:100%;
  height: 44px;
  padding:10px 16px;
  display:flex;
  box-shadow: 0 0.5px 0 0 rgba(0, 0, 0, 0.25);
  border-bottom: 1px solid grey;
  box-sizing: border-box;
`
export const IconWrapper = styled.span`
  width:23px;
  height:24px;
  display: flex;
  justify-content:center;
  align-items:center;
  color: #D12B63;
`
export const PageTitle = styled.h3`
  flex-grow:1;
  text-align:center;
  margin:0;
  color: #D12B63;
  font-family: Roboto;
  font-size: 24px;
  font-weight: normal;
  letter-spacing: -0.39px;
  text-align: center;
  display: flex;
  justify-content:center;
  align-items:center;
`