import styled from 'styled-components'

export const PageWrapper = styled.div`
  min-height: 100vh;
  width:100%;
  background-image: linear-gradient(#ffddff, #fff);
  box-sizing:border-box;
  padding: 0px 0px 60px 0px;
  
`
export const ImgSide = styled.img`
  width:100%;
  height:250px;
  object-fit: cover;
`
export const BodyWrapper = styled.main`
  height:auto;
  width:100%;
  padding: 0 15px;
  & > div{
    margin: 20px 0;
  }
`
export const Header = styled.header`
  height:100px;
  width: 100%;
  background-color: #D12B63;
  display:flex;
  justify-content:center;
  align-items:center;
  padding:15px;
  box-sizing:border-box;
`