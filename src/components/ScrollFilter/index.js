import React from 'react'
import { NavWrapper, ListWrapper, ListItem } from './style'


export default function FilterScroll(props) {
  console.log(props.selected)
  return (
    <NavWrapper>
      <ListWrapper>
        <ListItem value="1" active={props.selected === 'Cabelo'} onClick={() => props.handleClick("Cabelo")}>Cabelo</ListItem>
        <ListItem value="2" active={props.selected === 'Pele'} onClick={() => props.handleClick("Pele")}>Pele</ListItem>
        <ListItem value="3" active={props.selected === 'Mão'} onClick={() => props.handleClick("Mão")}>Mão</ListItem>
        <ListItem value="4" active={props.selected === 'Corpo'} onClick={() => props.handleClick("Corpo")}>Corpo</ListItem>
        <ListItem value="5" active={props.selected === 'Maquiagem'} onClick={() => props.handleClick("Maquiagem")}>Maquiagem</ListItem>
      </ListWrapper>
    </NavWrapper>
  )
}