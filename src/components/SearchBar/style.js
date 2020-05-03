import styled from 'styled-components'

export const Wrapper = styled.div`
  height:30px;
  width:100%;
  border: solid 1px rgb(143, 10, 163);
  border-radius: 15px;
  box-sizing:border-box;
  display:flex;
  justify-content:flex-start;
  align-items:center;
  background-color: #fff5ff;
  box-shadow: 0px 0px 10px #aaa inset;
`
export const Icon = styled.span`
  width:50px;
  box-sizing:border-box;
  color: rgb(143, 10, 163);
  padding-left:10px;
  display:flex;
  justify-content:space-between;
  align-items:center;
`
export const Input = styled.input`
  width: calc(100% - 55px);
  box-sizing:border-box;
  border:none;
  background-color: transparent;
  color: rgb(143, 10, 163);
  font-style:italic;
`