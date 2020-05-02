import React from 'react'
import SearchIcon from '@material-ui/icons/Search'
import { Wrapper, Icon, Input } from './style';



class SearchBar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      input: ''
    }
  }

  render() {
    return (
     <Wrapper>
       <Icon><SearchIcon /></Icon>
       <Input placeholder='Search...'></Input>
     </Wrapper>
    )
  }
}

export default SearchBar


