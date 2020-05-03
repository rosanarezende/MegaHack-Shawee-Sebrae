import styled from 'styled-components'

export const NavWrapper = styled.nav`
  margin: 0 auto;
  padding: 0 10px;
  width: 100%;
  white-space: nowrap;
  box-sizing:border-box;
`
export const ListWrapper = styled.ul`
  margin: 0 -10px;
  padding: 0 10px;
  list-style: none;
  display: flex;
  overflow-x: auto;
  -webkit-overflow-scrolling:touch;
  -ms-overflow-style: -ms-autohiding-scrollbar;
  &::-webkit-scrollbar{
    display:none;
  }
`
export const ListItem = styled.li`
  padding: 14px 16px;
  display: block;
  color: black;
  font-weight: bold;
  text-decoration: none;
  text-transform: uppercase;
  font-size: 14px;
  color:${props => props.active ? '#D12B63' : 'rgb(0,0,0)'};
  font-style:${props => props.active ? 'italic' : 'normal'};
` 