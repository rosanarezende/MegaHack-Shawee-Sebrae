import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  box-sizing:border-box;
  height:150px;
  width:calc(100% - 30px);
  margin: 10px 15px 20px 15px;
  border-radius:5px;
  box-shadow: 0 2px 4px;
`
export const ImgSide = styled.img`
  width:35%;
  height:100%;
  border-bottom-left-radius:5px;
  border-top-left-radius: 5px;
  object-fit: cover;
`
export const InfoSide = styled.div`
  width: 65%;
  display:flex;
  flex-direction:column;
  background-color: #eee;
  border-bottom-right-radius:5px;
  border-top-right-radius:5px;
`
export const Title = styled.h5`
  margin:0;
  padding: 15px;
  height:50%;
  box-sizing: border-box;
  overflow: hidden;
  text-overflow: ellipsis;
`
export const Price = styled.div`
  width:100%;
  height:50%;
  font-size: 1.5rem;
  font-weight:700;
  color: #D12B63;
  border-bottom-right-radius:5px;
  display:flex;
  align-items:center;
  justify-content:center;
`