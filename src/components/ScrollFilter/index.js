import React from 'react'
import { NavWrapper, ListWrapper, ListItem } from './style'


export default function FilterScroll(props) {
  console.log(props.selected)
  return (
    <NavWrapper>
      <ListWrapper>
        <ListItem value="1" color={props.selected === 'Cabelo'} onClick={() => props.handleClick("Cabelo")}>Cabelo</ListItem>
        <ListItem value="2" color={props.selected === 'Pele'} onClick={() => props.handleClick("Pele")}>Pele</ListItem>
        <ListItem value="3" color={props.selected === 'Mão'} onClick={() => props.handleClick("Mão")}>Mão</ListItem>
        <ListItem value="4" color={props.selected === 'Corpo'} onClick={() => props.handleClick("Corpo")}>Corpo</ListItem>
        <ListItem value="5" color={props.selected === 'Maquiagem'} onClick={() => props.handleClick("Maquiagem")}>Maquiagem</ListItem>
      </ListWrapper>
    </NavWrapper>
  )
}