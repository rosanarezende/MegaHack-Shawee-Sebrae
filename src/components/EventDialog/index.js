import React from 'react'
import {
	Dialog,
	DialogTitle,
	DialogActions,
	DialogContent,
	Button,
	Typography,
	TextField,
	MenuItem
} from '@material-ui/core';
import * as S from './styles'


class EventDialog extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			serviceSelected: undefined,
			localSelected: undefined,
			timeSelected: undefined,
			observeSelected: undefined
		}
	}

	componentDidUpdate() {

	}

	handleClose = (event) => {
		event.preventDefault()
		// coloca a informação no calendário
		
		const { addEvent, setOpenDialog, eventDate} = this.props
		const { serviceSelected, localSelected, timeSelected, observeSelected} = this.state
		const newEvent = {
			serviceId: serviceSelected,
			localId: localSelected,
			start: timeSelected,
			observe: observeSelected,
			date: eventDate
		}
		console.log(newEvent)

		// e fecha
		setOpenDialog(false)
	}

	serviceChange = () => {

	}

	handleTextFieldChange = (event) => {
		const { name, value } = event.target
		this.setState({
			[name]: value
		})
	}

	getMinDate = () => {
		const today = new Date()
		const stringIsoToday = today.toISOString()
		const splitDateFromTime = stringIsoToday.split("T")
		// console.log(splitDateFromTime[0])
		return splitDateFromTime[0]
	}

	render() {
		const { dialogOpen, eventDate } = this.props
		console.log(eventDate)

		const services = [
			{
				id: 1,
				name: 'Corte de cabelo masculino',
				value: 30,
				durationTime: 20
			},
			{
				id: 2,
				name: 'Corte de cabelo feminino',
				value: 50,
				durationTime: 60
			},
		]

		const locations = [
			{
				id: 1,
				name: 'Salão do Fulano',
				value: undefined
			},
			{
				id: 2,
				name: 'À domicílio',
				value: 10
			}
		]

		return (
			<Dialog
				disableBackdropClick
				disableEscapeKeyDown
				open={dialogOpen}
				onClose={this.handleClose}
				BackdropProps={{
					style: {
						backgroundColor: 'black',
						opacity: 0.1,
					},
				}}
				PaperProps={{ style: { boxShadow: "none" } }}
				id="dialog"
			>
				<DialogTitle>
					Agende um serviço
				</DialogTitle>

				<form onSubmit={this.handleClose}>
					<DialogContent>

						<S.Subtitle>
							Bem vindo ao Salão Fulanão!!! Selecione as opções abaixo para agendar um serviço.
					</S.Subtitle>

						<TextField
							disabled
							name="dateSelected"
							margin='normal'
							variant='outlined'
							fullWidth
							label="Data"
							InputLabelProps={{
								shrink: true,
							}}
							type='date'
							InputProps={{
								min: this.getMinDate()
							}}
							value={eventDate}
						/>


						<TextField
							required
							margin='normal'
							name="timeSelected"
							variant='outlined'
							fullWidth
							label="Horário"
							InputLabelProps={{
								shrink: true,
							}}
							type='time'
							// min
							// max
							value={this.state.timeSelected}
							onChange={this.handleTextFieldChange}
						/>


						<TextField
							required
							select
							name='localSelected'
							margin='normal'
							variant='outlined'
							fullWidth
							label="Local"
							value={this.state.localSelected}
							onChange={this.handleTextFieldChange}
						>
							{locations.map(local => (
								<MenuItem value={local.id}>
									{local.name} {local.value && ` (acréscimo de ${local.value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })})`}
								</MenuItem>
							))}
						</TextField>

						<TextField
							required
							select
							name='serviceSelected'
							margin='normal'
							variant='outlined'
							fullWidth
							label="Serviços"
							value={this.state.serviceSelected}
							onChange={this.handleTextFieldChange}
						>
							{services.map(service => (
								<MenuItem value={service.id}>
									{service.name} - {service.value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
								</MenuItem>
							))}
						</TextField>

						<TextField
							margin='normal'
							name="observeSelected"
							variant='outlined'
							fullWidth
							label="Observações"
							multiline
							rows="3"
							value={this.state.observeSelected}
							onChange={this.handleTextFieldChange}
						/>

					</DialogContent>

					<DialogActions>

						<Button
							variant='contained'
							color='primary'
							type="submit"
						>
							Agendar
					</Button>

					</DialogActions>

				</form>

			</Dialog>
		)
	}

}

export default EventDialog