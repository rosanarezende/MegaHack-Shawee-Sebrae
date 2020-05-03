import styled from 'styled-components'
import { Card, CardMedia } from '@material-ui/core'

export const CardProduct = styled(Card)`
    margin: 1rem auto;
    display: flex;
    min-height: 100px;
    max-width: 800px;
`

export const CardImageProduct = styled(CardMedia)`
    width: 150px;
    min-height: 100px;
`