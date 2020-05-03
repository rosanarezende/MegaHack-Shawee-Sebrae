import styled from 'styled-components'
import { Typography, Button } from '@material-ui/core'

export const CartWrapper = styled.div`
    margin: 2rem 2rem 5rem;
`

export const ProducstTitle = styled(Typography)`
    margin: 2rem 0 1rem;
`

export const DivValue = styled.div`
    margin-bottom: 2rem;
`

export const DivSubTotal = styled.div`
    display: flex;
    justify-content: space-between;
`

export const DivTotal = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 1rem 0 0;
`

export const Title = styled(Typography)`
    margin: 16px 0 8px;
    border-bottom: 1px solid black;
    font-size: 16px;
    letter-spacing: -0.39px;
`

export const FormWrapper = styled.form`
`

export const Text = styled(Typography)`
    font-size: 16px;
    height: 16px;
    letter-spacing: -0.4px;
    margin-bottom: 8px;
    color: ${props => props.red ? "#e8222e" : "#000000"};
    text-align: ${props => props.right && "right"};
    font-weight: ${props => props.bold && "bold"};
`

export const PayementOptionBoxWrapper = styled.div`
    display: flex;
    align-items: center;
`

export const RadioButtonWrapper = styled.input`
    width: 24px;
    height: 24px;
    margin-right: 8px;
    margin-bottom: 11px;
`
export const ConfirmButtonWrapper = styled(Button)`
    width: 100%;
    height: 42px;
    border-radius: 2px;
    background-color: ${props => props.color};
    margin: ${props => props.marginTop} 0 16px 0;
    /* margin-bottom: 64px; */
`