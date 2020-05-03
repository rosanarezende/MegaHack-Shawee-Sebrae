import React, { useState } from 'react';
import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
// import { push } from 'connected-react-router';
// import { routes } from '../Router/index';
import { goBack } from 'connected-react-router';
import HeaderNav from '../../components/HeaderNav';
// import { addAdress } from '../../actions/user';

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
    margin-bottom: 30px;
`

function Adress(props) {
    const [street, setLogradouro] = useState("")
    const [number, setNumero] = useState("")
    const [complement, setComplement] = useState("")
    const [neighbourhood, setBairro] = useState("")
    const [city, setCidade] = useState("")
    const [state, setEstado] = useState("")

    const handleSubmit = (ev) => {
        ev.preventDefault()
        props.addAddress(
            {
                street,
                number,
                complement,
                neighbourhood,
                city,
                state
            }
        )
    }

    const { professionalData } = props

    return (
        <Root>
            <HeaderNav
                onClick={() => props.goBack()}
                textHeader={"Endereço"}
            />

            <StyledImg src={professionalData.businessImage} alt={professionalData.businessName} />

            <FormContainer
                autoComplete="off"
                onSubmit={handleSubmit}
            >

                <TextField
                    name="logradouro"
                    type="text"
                    label="Rua/Avenida"
                    placeholder="Rua / Av."
                    value={street}
                    onChange={(event) => setLogradouro(event.target.value)}
                    margin="normal"
                    variant="outlined"
                    required
                    pattern={props.pattern} 
                />

                <TextField
                    name="numero"
                    type="text"
                    label="Número"
                    placeholder="Número"
                    value={number}
                    onChange={(event) => setNumero(event.target.value)}
                    margin="normal"
                    variant="outlined"
                    required
                    pattern={props.pattern}
                />

                <TextField
                    name="complemento"
                    type="text"
                    label="Complemento"
                    placeholder="Apto. / Bloco"
                    value={complement}
                    onChange={(event) => setComplement(event.target.value)}
                    margin="normal"
                    variant="outlined"
                    pattern={props.pattern}
                />

                <TextField
                    name="bairro"
                    type="text"
                    label="Bairro"
                    placeholder="Bairro"
                    value={neighbourhood}
                    onChange={(event) => setBairro(event.target.value)}
                    margin="normal"
                    variant="outlined"
                    required
                    pattern={props.pattern}
                />

                <TextField
                    name="cidade"
                    type="text"
                    label="Cidade"
                    placeholder="Cidade"
                    value={city}
                    onChange={(event) => setCidade(event.target.value)}
                    margin="normal"
                    variant="outlined"
                    required
                    pattern={props.pattern}
                />

                <TextField
                    name="estado"
                    type="text"
                    label="Estado"
                    placeholder="Estado"
                    value={state}
                    onChange={(event) => setEstado(event.target.value)}
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
                    Salvar
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
    // addAddress: (address) => dispatch(addAddress(address)), TO DO criar action e reducer pra integrar
})

export default connect(mapStateToProps, mapDispatchToProps)(Adress)