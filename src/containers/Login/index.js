import React, { useState } from 'react';
import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
// import { login } from '../../actions/user';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import { routes } from '../Router/index';

const Root = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* background-color: #EFD6EF; */
`

export const StyledImg = styled.img`
  height: 250px;
  width: 250px;
  margin-top: 50px;
  margin-bottom: 30px;
  border-radius: 50%;
`

const Banner = styled.div`
  display: flex;
  justify-content: center;
  border-radius: 50%;  
`

const FormContainer = styled.form`
    width: 90%;
    display: flex;
    flex-direction: column;
`

const TextContainer = styled.div`
    margin: 20px;
`

function Login(props) {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const handleSubmit = ev => {
        ev.preventDefault()
        props.login(email, password)
    }

    const { professionalData } = props

    return (
        <Root>

            <Banner>
                <StyledImg src={professionalData.businessImage} alt={professionalData.businessName} />
            </Banner>
            <Typography variant="h6">
                Entrar
            </Typography>

            <FormContainer
                autoComplete="off"
                onSubmit={handleSubmit}
            >

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
                    color="primary"
                />

                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                >
                    Entrar
                </Button>

            </FormContainer>

            <TextContainer onClick={props.goToSignUp}>
                <Typography>
                    Não possui cadastro? Clique aqui.
                </Typography>
            </TextContainer>

        </Root>
    )
}

const mapStateToProps = state => ({
    // se precisar da logo, está dentro desse mock
    professionalData: state.professional.professionalData
})

const mapDispatchToProps = dispatch => ({
    goToSignUp: () => dispatch(push(routes.signUp)),
    // login: (email, password) => dispatch(login(email, password))
})

export default connect(mapStateToProps, mapDispatchToProps)(Login);