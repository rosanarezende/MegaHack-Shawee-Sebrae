import React, { useState } from 'react';
import { connect } from 'react-redux';

import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import { goBack } from 'connected-react-router';
import { signUp } from '../../actions/user';

import HeaderNav from '../../components/HeaderNav';

const Root = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const StyledImg = styled.img`
  height: 200px;
  width: 200px;
  margin-top: 20px;
  margin-bottom: 20px;
  border-radius: 50%;
`

const FormContainer = styled.form`
    width: 90%;
    display: flex;
    flex-direction: column;
`

function SignUp(props) {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [address, setAddress] = useState("")

    const handleSubmit = (ev) => {
        ev.preventDefault()
        props.signUp({ name, email, password, address })
    }

    const { professionalData } = props

    return (
        <Root>
            <HeaderNav
                onClick={() => props.goBack()}
                textHeader={"Cadastro"}
            />

            <StyledImg src={professionalData.businessImage} alt={professionalData.businessName} />

            <FormContainer
                autoComplete="off"
                onSubmit={handleSubmit}
            >

                <TextField
                    name="name"
                    type="text"
                    label="Nome"
                    placeholder="Nome e sobrenome"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    margin="normal"
                    variant="outlined"
                    required
                    pattern={props.pattern}
                />

                <TextField
                    name="email"
                    type="email"
                    label="E-mail"
                    placeholder="email@email.com"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    margin="normal"
                    variant="outlined"
                    required
                    pattern={props.pattern}
                />

                <TextField
                    name="password"
                    type="password"
                    label="Senha"
                    placeholder="Mínimo 6 caracteres"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    margin="normal"
                    variant="outlined"
                    required
                    pattern={props.pattern}
                />

                <TextField
                    name="address"
                    type="address"
                    label="Endereço"
                    placeholder="Endereço completo"
                    value={address}
                    onChange={(event) => setAddress(event.target.value)}
                    margin="normal"
                    variant="outlined"
                    required
                    pattern={props.pattern}
                />

                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                >
                    Cadastrar
                </Button>

            </FormContainer>
        </Root>
    )
}

const mapStateToProps = state => ({
    professionalData: state.professional.professionalData
})

const mapDispatchToProps = dispatch => ({
    goBack: () => dispatch(goBack()),
    signUp: (user) => dispatch(signUp(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)